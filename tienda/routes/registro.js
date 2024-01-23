const express = require("express");
const router = express.Router();
const users = require("../users");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("registro", { title: "Registro", user: req.session.user, accepted: req.session.accepted || false});
});

router.post("/", function (req, res, next) {
  let user = req.body.user;
  let pass = req.body.pass;
  if (users[user]) {
    req.session.error = "Username already taken";
    res.redirect("/registro");
  } else {
    users.register(user, pass, function (err, result) {
      req.session.user = { username: user };
      req.session.message = "Welcome!";
      res.redirect("/restricted");
    });
  }
});
module.exports = router;
