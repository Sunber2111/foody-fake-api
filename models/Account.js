const mongoose = require("mongoose");

const AccountSchema = new mongoose.Schema({
  email: String,
  cmnd: String,
  matkhau: String,
});

module.exports = Account = mongoose.model("account", AccountSchema);
