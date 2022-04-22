require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const apiRoutes = require("./routes/api-routes");
const stripeRoutes = require("./routes/stripe-routes");
app.use(apiRoutes);
app.use(stripeRoutes);

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
