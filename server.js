const stripe = require("stripe")(
  "sk_test_51KqihZBf2bZUjRVF1tUeqS7oFm9fDqx47JkWoxbdapWVGl7mpMMjx1OLNBmGLxRJOjGaZj7zcZsh1ZrcaFCoTKso00CIkLkjvM"
);

const express = require("express");
const app = express();
const PORT = process.env.PORT || 5010;

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

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
