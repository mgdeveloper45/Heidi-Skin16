const {
  getProductList,
  getPriceId,
  createCheckoutSession,
} = require("../controllers/stripeControllers");
const express = require("express");
const router = express.Router();

router.get("/product-list", getProductList);
router.get("/price-id", getPriceId);
router.post("/create-checkout-session", createCheckoutSession);

module.exports = router;
