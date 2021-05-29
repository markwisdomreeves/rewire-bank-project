
const express = require("express");
const router = express.Router();

const { requireSignin, adminMiddleware } = require("../controllers/authCtrl");
const { read, update } = require("../controllers/userCtrl");


router.get('/user/:id', requireSignin, read);
router.put('/user/update', requireSignin, update);
router.put('/admin/update', requireSignin, adminMiddleware, update);



module.exports = router;
