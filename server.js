require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_TEST_KEY);

const express = require("express");
const app = express();
const PORT = process.env.PORT;
const YOUR_DOMAIN = process.env.YOUR_DOMAIN;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const apiRoutes = require("./routes/api-routes");
app.use(apiRoutes);

app.get("/product", async (req, res) => {
  const products = await stripe.products.list({
    limit: 100,
  });
  console.log(products);
  res.json(products);
});

app.get("/prices", async (req, res) => {
  try {
    const prices = await stripe.prices.list({
      limit: 100,
    });

    const products = prices.data.map((item) => {
      return { priceId: item.id, productId: item.product };
    });

    res.json(products);
  } catch (err) {
    res.status(510).json({ msg: err });
  }
});

app.post("/create-checkout-session", async (req, res) => {
  const { lineItems } = req.body;

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: "price_1KqiqABf2bZUjRVFtuF69ew7",
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  res.redirect(303, session.url);
});

// app.post("/create-checkout-session", async (req, res) => {
//   // const { lineItems } = req.body;

//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: ["card"],
//     shipping_address_collection: {
//       allowed_countries: ["US"],
//     },
//     shipping_options: [
//       {
//         shipping_rate_data: {
//           type: "fixed_amount",
//           fixed_amount: {
//             amount: 0,
//             currency: "usd",
//           },
//           display_name: "Free shipping",
//           // Delivers between 5-7 business days
//           delivery_estimate: {
//             minimum: {
//               unit: "business_day",
//               value: 5,
//             },
//             maximum: {
//               unit: "business_day",
//               value: 7,
//             },
//           },
//         },
//       },
//       {
//         shipping_rate_data: {
//           type: "fixed_amount",
//           fixed_amount: {
//             amount: 1500,
//             currency: "usd",
//           },
//           display_name: "Next day air",
//           // Delivers in exactly 1 business day
//           delivery_estimate: {
//             minimum: {
//               unit: "business_day",
//               value: 1,
//             },
//             maximum: {
//               unit: "business_day",
//               value: 1,
//             },
//           },
//         },
//       },
//     ],
//     line_items: [
//       {
//         price: "price_1KqiqABf2bZUjRVFtuF69ew7",
//         quantity: 1,
//       },
//     ],
//     mode: "payment",
//     success_url: `${YOUR_DOMAIN}/?success=true`,
//     cancel_url: `${YOUR_DOMAIN}/my-cart`,
//   });

//   res.send(session.url);
// });

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
