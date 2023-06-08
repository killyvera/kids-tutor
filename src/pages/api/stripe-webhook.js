import { buffer } from "micro";
import Stripe from "stripe";
import { DataStore } from '@aws-amplify/datastore';
import { Users } from '@/models';

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
      const { customer_email, metadata, display_items } = event.data.object;
      console.log(session)

      return res.status(200).json({ received: true });
      //   res.status(200).end();
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};

export default webhookHandler;
