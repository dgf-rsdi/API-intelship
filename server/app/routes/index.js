const router = require("express").Router();
const sms = require("./sms");
const vessel = require("./vessel");
const fueltank = require("./fueltank")
const user = require("./user");

router.use("/", sms)
router.use("/", user)
router.use("/vessel", vessel)
router.use("/fueltank", fueltank)

module.exports = router;