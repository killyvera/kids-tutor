import { buffer } from "micro";
import Stripe from "stripe";
import { DataStore } from "@aws-amplify/datastore";
import { Users } from "@/models";
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
        buf.toString(),
        sig,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      console.error(err), "error:E";
      return res.status(400).send(`Webhook Error E: ${err.message}`);
    }

    if (event.type === "checkout.session.completed") {
      // Handle successful payment
      const session = event.data.object;
      // const { customer_email, metadata, display_items } = event.data.object;
      // console.log(session.metadata, session.email, session.name);
      console.log(
        session,
        session.metadata,
        session.customer_details.email,
        session.customer_details.name
      );
      InvitedCustomerHandler(
        session.customer_details.email,
        session.customer_details.name,
        session.metadata.purchased_products
      );
      return res.status(200).json({ received: true });
      //   res.status(200).end();
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};

export default webhookHandler;

const InvitedCustomerHandler = async (email, name, products) => {
  const customerEmail = email;
  const customerName = name;
  const customerProducts = products;
  const testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.titan.email",
    port: 465,
    secure: true,
    auth: {
      user: "ventas@kidstutor.co",
      pass: "v3nt@2k1d2",
    },
  })

  const mailOptions = {
    from: "ventas@kidstutor.co",
    to: customerEmail,
    subject: `Hola ${customerName}, Kids Tutor te tiene buenas noticias.`,
    text: "Este es id de tu producto" + `${customerProducts}`,
  };

  const info = await transporter.sendMail(mailOptions);

  console.log("Correo electrónico enviado:");
  console.log("ID del mensaje:", info.messageId);
  console.log(
    "URL de visualización del mensaje:",
    nodemailer.getTestMessageUrl(info)
  );
};
