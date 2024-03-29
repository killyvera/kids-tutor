import MailTemplate from "@/components/MailTemplate";
import { buffer } from "micro";
import Stripe from "stripe";
import { DataStore } from "@aws-amplify/datastore";
import { Users, OnlinePurchase } from "@/models";
import { useState, useEffect } from "react";
import nodemailer from "nodemailer";
import { v4 as uuidv4 } from "uuid";
import ReactDOMServer from "react-dom/server";
import { sendEmail } from "@/helpers/sendEmail";

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
      console.error(err), "error:E";
      return res.status(400).send(`Webhook Error E: ${err.message}`);
    }
    if (event.type === "checkout.session.completed") {
      // Handle successful payment
      const session = event.data.object;
      console.log(res, "-----------res---------------");
      console.log(
        session,
        session.metadata,
        session.customer_details.email,
        session.customer_details.name
      );
      CustomerHandler(
        session.customer_details.email,
        session.customer_details.name,
        session.metadata.purchased_products
      );
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

const CustomerHandler = async (email, name, address, phoneNumber, products) => {
  const uuid = uuidv4(); // Generar un UUID
  const customerEmail = email;
  const customerName = name;
  const customerProducts = products.split(",");
  const downloadLink = `https://kidstutor.co/download?email=${encodeURIComponent(
    customerEmail
  )}&uuid=${uuid}`;

  const purchase = await DataStore.save(
    new OnlinePurchase({
      customer_email: customerEmail,
      customer_name: customerName,
      uuid: uuid,
      details: {
        products: customerProducts,
      },
      status: {
        sent: "pending",
      },
    })
  );

  console.log("Compra almacenada:", purchase);

  // Actualizar el modelo User con los productos comprados y la uid
  const user = await DataStore.query(Users, (u) => u.email.eq(customerEmail));
  if (user.length > 0) {
    const updatedUser = await DataStore.update(
      Users.copyOf(user[0], (updated) => {
        updated.purchase_products = {
          products: customerProducts,
          uid: uuid,
        };
      })
    );
    console.log("Usuario actualizado:", updatedUser);
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
  const result = await sendEmail(mailOptions);
  if (result.success) {
    console.log("Correo electrónico enviado:");
    console.log("ID del mensaje:", result);
  } else {
    console.error(result);
  }

  await DataStore.save(
    OnlinePurchase.copyOf(purchase, (updated) => {
      updated.status = {
        sent: result?.success ? "ok" : "error",
        messageId: result?.messageId,
        error: result?.error,
      };
    })
  );
  console.log(purchase)
};
