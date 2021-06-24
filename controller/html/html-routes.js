const router = require('express').Router();
const path = require("path");
const isAuthenticated = require("../../config/middleware/isAuthenticated");

// Get routes

router.get("/signup", (req, res) => {
  console.log("GET /signup");
  // If the user already has an account send them to the where2go page
  if (req.user) {
    res.redirect("/where2go");
  }
  res.sendFile(path.join(__dirname, "../../public/signUp.html"));
});

router.get("/login", (req, res) => {
  console.log("GET /login");
  // If the user already has an account send them to the where2go page
  if (req.user) {
    res.redirect("/where2go");
  }
  res.sendFile(path.join(__dirname, "../../public/login.html"));
});

// Here we've add our isAuthenticated middleware to this route.
// If a user who is not logged in tries to access this route they will be redirected to the signup page
router.get("/where2go", isAuthenticated, (req, res) => {
  console.log("GET /where2go");
  res.sendFile(path.join(__dirname, "../../public/where2go.html"));
});

//working on heroku get"/" issue
// router.get("/", async (re, res) =>{
//   try{

//   }
// })

router.get("/", (req, res) => {
  console.log("GET /");
  // If the user already has an account send them to the where2go page
  if (req.user) {
    res.redirect("/where2go");
  }
  res.sendFile(path.join(__dirname, "../../public/home.html"));
});

// router.get('*', (req, res) => {
//   console.log("GET *");
//   res.sendFile(path.join(__dirname, '../../public/home.html'));
// });

module.exports = router;
