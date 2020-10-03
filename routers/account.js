const router = require("express").Router();

const { save_account } = require("./../controllers/account");

router.post("", save_account);

module.exports = router;
