const express = require("express");
const { floginController, fregisterController } = require("../controllers/fuserController");

// router Object

const router = express.Router();

// routers
// POST || LOGIN
router.post('/login', floginController);

// POST || REGISTER
router.post('/register', fregisterController);


module.exports = router;