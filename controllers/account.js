const Account = require("./../models/Account");

module.exports.save_account = async(req, res) => {
  try {
    const data = req.body;
    let acc = new Account(data);
    await acc.save();
    res.json("ok");
  } catch (error) {
    res.status(400).json("Tạo Thất Bại");
  }
};
