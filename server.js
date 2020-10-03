const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectionDb = require("./config/connectDb");
require("dotenv").config();

let app = express();
app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
  res.header("Access-Control-Allow-Headers", "Accept, Content-Type, Authorization, X-Requested-With");

  next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

connectionDb();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("API running ! Oh yeah");
});

app.use("/api/account", require("./routers/account"));

app.listen(PORT, () => {
  console.log("Api running on Port 5000");
});
