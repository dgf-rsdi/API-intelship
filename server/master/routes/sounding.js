const router = require("express").Router();
const SoundingController = require("../controllers/SoundingController")

router.get('/', SoundingController.getSounding)
router.post('/', SoundingController.addSounding)
router.put('/:id', SoundingController.editSounding)
router.delete('/:id', SoundingController.deleteSounding)

module.exports = router;