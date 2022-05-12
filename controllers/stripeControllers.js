require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_TEST_KEY);

module.exports = {
  getProductList: async (req, res) => {
    const products = await stripe.products.list({
      limit: process.env.PRODUCT_LIST_LIMIT,
    });
    console.log(products);
    res.json(products);
  },

  getPriceId: async (req, res) => {
    try {
      const prices = await stripe.prices.list({
        limit: process.env.PRODUCT_LIST_LIMIT,
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
      payment_method_types: [process.env.PAYMENT_METHOD_TYPES],
      shipping_address_collection: {
        allowed_countries: [process.env.ALLOWED_COUNTRIES],
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: process.env.SHIPPING_TYPE,
            fixed_amount: {
              amount: process.env.FREE_SHIPPING_AMOUNT,
              currency: process.env.CURRENCY,
            },
            display_name: process.env.FREE_SHIPPING_DISPLAY_NAME,
            delivery_estimate: {
              minimum: {
                unit: process.env.DELIVERY_ESTIMATE_MIN_UNIT,
                value: process.env.FREE_SHIPPING_MIN_DELIVERY_VALUE,
              },
              maximum: {
                unit: process.env.DELIVERY_ESTIMATE_MAX_UNIT,
                value: process.env.FREE_SHIPPING_MAX_DELIVERY_VALUE,
              },
            },
          },
        },
        {
          shipping_rate_data: {
            type: process.env.SHIPPING_TYPE,
            fixed_amount: {
              amount: process.env.NEXT_DAY_SHIPPING_AMOUNT,
              currency: process.env.CURRENCY,
            },
            display_name: process.env.NEXT_DAY_SHIPPING_DISPLAY_NAME,
            delivery_estimate: {
              minimum: {
                unit: process.env.DELIVERY_ESTIMATE_MIN_UNIT,
                value: process.env.NEXT_DAY_SHIPPING_MIN_DELIVERY_VALUE,
              },
              maximum: {
                unit: process.env.DELIVERY_ESTIMATE_MAX_UNIT,
                value: process.env.NEXT_DAY_SHIPPING_MAX_DELIVERY_VALUE,
              },
            },
          },
        },
      ],

      line_items: lineItems,
      mode: process.env.STRIPE_MODE,
      success_url: `${process.env.YOUR_DOMAIN}?success=true`,
      cancel_url: `${process.env.YOUR_DOMAIN}?canceled=true`,
    });

    res.send(session.url);
  },
};
