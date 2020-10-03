const mongoose = require("mongoose");

const connectionDb = () => {
  mongoose.connect(
    process.env.MONGO_URI,
    { useUnifiedTopology: true,useFindAndModify: false,useNewUrlParser: true},
    (err) => {
      if (err) console.error(err);
      else console.log("Connect success");
    }
  );
};

module.exports = connectionDb;
