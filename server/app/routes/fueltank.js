const router = require("express").Router();
const FuelTankController = require("../controllers/FueltankController")

router.get('/', FuelTankController.getFueltankTypes)
router.post('/', FuelTankController.addFueltank)
router.get('/:id', FuelTankController.fueltankById)
router.put('/:id', FuelTankController.editFueltankById)
router.delete('/:id', FuelTankController.deleteFueltank)

module.exports = router;