import MailTemplate from "@/components/MailTemplate";
import { buffer } from "micro";
import Stripe from "stripe";
import { DataStore } from "@aws-amplify/datastore";
import { Users, OnlinePurchase } from "@/models";
import { v4 as uuidv4 } from "uuid";
import ReactDOMServer from "react-dom/server";
import nodemailer from "nodemailer";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const config = {
  api: {
    bodyParser: false,
  },
};

const webhookHandler = async (req, res) => {
  if (req.method === "POST") {
    const buf = await buffer(req);
    const sig = req.headers["stripe-signature"];

    let event;

    try {
      event = stripe.webhooks.constructEvent(
        buf,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      console.error("Error during webhook event construction:", err);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    if (event.type === "checkout.session.completed") {
      // Handle successful payment
      const session = event.data.object;
      console.log("Checkout session completed:", session);
      try {
        await CustomerHandler(
          session.customer_details.email,
          session.customer_details.name,
          session.metadata.purchased_products
        ).then(res.status(200).json({ received: true }));
        console.log("CustomerHandler executed successfully.");
      } catch (err) {
        console.error("Error in CustomerHandler:", err);
        return res.status(500).send("Internal Server Error");
      }

      return res.status(200).json({ received: true }); // Enviar una respuesta 200 OK
    } else if (event.type === "charge.succeeded") {
      // Handle charge.succeeded event
      // ...
      return res.status(200).end();
    } else if (event.type === "payment_intent.succeeded") {
      // Handle payment_intent.succeeded event
      // ...
      return res.status(200).end();
    } else if (event.type === "payment_intent.created") {
      // Handle payment_intent.created event
      // ...
      return res.status(200).end();
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};

export default webhookHandler;

const CustomerHandler = async (email, name, products) => {
  const uuid = uuidv4(); // Generar un UUID
  const customerEmail = email;
  const customerName = name;
  const customerProducts = products.split(",");
  const downloadLink = `https://kidstutor.co/download?email=${encodeURIComponent(
    customerEmail
  )}&uuid=${uuid}`;

  const transporter = nodemailer.createTransport({
    host: "smtp.titan.email",
    port: 465,
    secure: true,
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS,
    },
  });

  const purchase = await DataStore.save(
    new OnlinePurchase({
      customer_email: customerEmail,
      customer_name: customerName,
      uuid: uuid,
      details: {
        products: customerProducts,
      },
    })
  );

  console.log("Compra almacenada:", purchase);

  // Actualizar el modelo User con los productos comprados y la uid
  const user = await DataStore.query(Users, (u) => u.email.eq(customerEmail));
  if (user.length > 0) {
    try {
      const updatedUser = await DataStore.update(
        Users.copyOf(user[0], (updated) => {
          updated.purchase_products = {
            products: customerProducts,
            uid: uuid,
          };
        })
      );
      console.log("Usuario actualizado:", updatedUser);
    } catch (err) {
      console.error("Error updating user:", err);
    }
  }

  const mailOptions = {
    from: "ventas@kidstutor.co",
    to: customerEmail,
    subject: `Hola ${customerName}, Kids Tutor tiene buenas noticias para ti.`,
    html: ReactDOMServer.renderToString(
      <MailTemplate
        username={customerName}
        link={downloadLink}
        email={customerEmail}
        purchaseID={purchase?.id}
      />
    ),
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Correo electrónico enviado:", info.messageId);
  } catch (err) {
    console.error("Error sending email:", err);
  }
};
