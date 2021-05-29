
const router = require("express").Router();
const contactCtrl = require("../controllers/contactCtrl")
const { runValidation } = require("../validators")
const { contactValidator } = require("../validators/authValidator")



router.post('/contact', runValidation, contactValidator, contactCtrl.createContact);


module.exports = router;
