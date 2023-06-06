// pages/api/stripe-webhook.js

import { Readable } from "stream";
import Stripe from "stripe";
import { useCartContext } from "@/context/CartContext";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

function SetAsset(newAssset) {
  const { asset, setAsset } = useCartContext();
  setAsset(newAssset)
}

export default async function handler(req, res) {
  const buf = await new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      resolve(Buffer.from(body));
    });
    req.on("error", (err) => {
      reject(err);
    });
  });

  const sig = req.headers["stripe-signature"];
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      buf,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("Error verifying webhook signature:", err);
    return res.status(400).send("Webhook Error: Invalid signature");
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const { customer_email, metadata } = session;

    // Extract relevant information from the event and implement your logic
    // to generate the digital content or access credentials based on the purchased product.

    // Store the purchase information in your datastore or database.

    // Send an email to the customer containing the digital product or access instructions.

    SetAsset(event?.data.object)
  }

  res.status(200).json({ received: true });
}
