const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  console.log(res, "----------checkout--------------");
  if (req.method === "POST") {
    // const { items } = req.body;
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: req.body.lineItems,
        phone_number_collection: {
          enabled: true,
        },
        shipping_address_collection: {
          allowed_countries: ["MX"], // Puedes ajustar los países permitidos
        },
        mode: "payment",
        allow_promotion_codes: true,
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
        metadata: {
          sub_cognito: req.body.sub,
          purchased_products: req.body.purchase.toString(),
        },
      });
      res.json({ url: session.url });
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
      console.log("ERROR chckout", err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
