const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("individualGoods", {
    email: req.session.email,
    loginState: req.session.loginState
  });
});

module.exports = router;
