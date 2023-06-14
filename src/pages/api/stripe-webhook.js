import { buffer } from "micro";
import Stripe from "stripe";
import { DataStore } from "@aws-amplify/datastore";
import { Users, OnlinePurchase } from "@/models";
import { useState, useEffect } from "react";
import nodemailer from "nodemailer";
import { v4 as uuidv4 } from "uuid";

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
      // const { customer_email, metadata, display_items } = event.data.object;
      // console.log(session.metadata, session.email, session.name);
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
      return res.status(200).json({ received: true });
      //   res.status(200).end();
    } else if (event.type === "charge.succeeded") {
      // Handle charge.succeeded event
      // ...

      // Return a 200 status code
      return res.status(200).end();
    } else if (event.type === "payment_intent.succeeded") {
      // Handle payment_intent.succeeded event
      // ...

      // Return a 200 status code
      return res.status(200).end();
    } else if (event.type === "payment_intent.created") {
      // Handle payment_intent.created event
      // ...

      // Return a 200 status code
      return res.status(200).end();
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};

export default webhookHandler;

const CustomerHandler = async (email, name, products) => {
  const uuid = uuidv4(); // Generate a UUID
  const customerEmail = email;
  const customerName = name;
  const customerProducts = products.split(',');
  const downloadLink = `https://localhost:3000/download?email=${encodeURIComponent(
    customerEmail
  )}&uuid=${uuid}`;
  // const testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.titan.email",
    port: 465,
    secure: true,
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS,
    },
  });

  const mailOptions = {
    from: "ventas@kidstutor.co",
    to: customerEmail,
    subject: `Hola ${customerName}, Kids Tutor tiene buenas noticias para tí..`,
    // text: "Este es id de tu producto" + `${customerProducts}`,
    text: downloadLink,
  };

  const info = await transporter.sendMail(mailOptions);

  console.log("Correo electrónico enviado:");
  console.log("ID del mensaje:", info.messageId);
  // "URL de visualización del mensaje:",
  // nodemailer.getTestMessageUrl(info)

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
};
