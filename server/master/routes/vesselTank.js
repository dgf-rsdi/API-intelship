const router = require("express").Router();
const VesselTankController = require("../controllers/VesselTankController")

router.get('/', VesselTankController.getVesselTank)
router.post('/', VesselTankController.addVesselTank)
router.put('/:id', VesselTankController.editVesselTank)
router.delete('/:id', VesselTankController.deleteVesselTank)

module.exports = router;