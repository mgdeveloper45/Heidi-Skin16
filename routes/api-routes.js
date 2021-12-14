const express = require("express");
const router = express.Router();

router.get("/example", (req, res) => {
    res.send("messae from back end: success")
})


module.exports = router;