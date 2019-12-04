const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require('path');
const PORT = process.env.PORT || 3000;

// Tells express to use bodyParser for post requests variables
app.use(bodyParser.urlencoded({
  extended: true
}));


// Sets render method default to EJS
app.set("view engine", "ejs");
app.use("/public", express.static(path.join(__dirname, 'public')));
//Landing Route
app.get("/", function(req, res) {
  res.render("landing.ejs");
});

app.get("/about", function(req, res) {
  res.render("about.ejs");
});

app.get("/merch", function(req, res) {
  res.render("merch.ejs");
});

app.get("/contact", function(req, res) {
  res.render("contact.ejs");
});

app.post("/contact", function(req, res) {

  // redirect back to contact page

  res.redirect("/contact");


});

app.listen(PORT, function(){
    console.log(`Merge server running on port ${ PORT }`);
});

// app.listen(3000, function() {
//   console.log("Merge server active");
// });
