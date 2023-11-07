const router = require("express").Router();
const user = require("./user");
const company = require("./company");
const vessel = require("./vessel");
const vesselTank = require("./vesselTank");
const sounding = require("./sounding");

router.use("/user", user)
router.use("/company", company)
router.use("/vessel", vessel)
router.use("/vesseltank", vesselTank)
router.use("/sounding", sounding)

module.exports = router;