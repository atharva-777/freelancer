const express = require("express");
const { cloginController, cregisterController } = require("../controllers/clientController");

// router Object

const router = express.Router();

// routers
// POST || LOGIN
router.post('/login', cloginController);

// POST || REGISTER
router.post('/register', cregisterController);


module.exports = router;