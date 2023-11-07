const router = require("express").Router();
const CompanyController = require("../controllers/CompanyController")
// const isAdmin = require("../middlewares/authorization")
// const isUser = require("../middlewares/auth")

router.post('/', CompanyController.addCompany)
router.get('/', CompanyController.getCompany)
router.get('/:id', CompanyController.companyById)
router.delete('/:id', CompanyController.deleteCompany)
router.put('/:id', CompanyController.editCompany)

module.exports = router;