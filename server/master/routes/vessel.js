const router = require("express").Router();
const VesselController = require("../controllers/VesselController")

router.get('/', VesselController.getVessel)
router.post('/', VesselController.addVessel)
router.put('/:id', VesselController.editVessel)
router.delete('/:id', VesselController.deleteVessel)

module.exports = router;