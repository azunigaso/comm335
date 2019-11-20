const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// Tells express to use bodyParser for post requests variables
app.use(bodyParser.urlencoded({extended: true}));
// Sets render method default to EJS
app.set("view engine", "ejs");

//Landing Route
app.get("/",function(req,res){
res.render("landing.ejs");
});

app.get("/about", function(req,res){
res.render("about.ejs");
});

app.get("/services", function(req,res){
res.render("services.ejs");
});

app.get("/contact", function(req,res){
res.render("contact.ejs");
});

app.listen(3000,function(){
  console.log("Merge server active");
});
