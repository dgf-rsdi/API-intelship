const router = require("express").Router();
const VesselController = require("../controllers/VesselController")

router.get('/', VesselController.getVesselName)
router.post('/', VesselController.addVessel)
router.post('/client', VesselController.getVesselByCompanyName)
router.get('/info',VesselController.getVesselInfo)
router.get('/:id', VesselController.vesselById)
router.put('/:id', VesselController.editVesselById)
router.delete('/:id', VesselController.deleteVessel)
router.get('/info/:id', VesselController.vesselInfoById)
router.delete('/info/:id', VesselController.deleteVesselInfo)

module.exports = router;