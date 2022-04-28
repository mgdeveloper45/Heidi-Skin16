require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_TEST_KEY);
const YOUR_DOMAIN = process.env.YOUR_DOMAIN;

module.exports = {
  getProductList: async (req, res) => {
    const products = await stripe.products.list({
      limit: 100,
    });
    console.log(products);
    res.json(products);
  },

  getPriceId: async (req, res) => {
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
  },
  createCheckoutSession: async (req, res) => {
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
  },
};
