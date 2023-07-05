const express = require("express");
const { floginController, fregisterController,search } = require("../controllers/fuserController");

// router Object

const router = express.Router();

// routers
// POST || LOGIN
router.post('/login', floginController);

// POST || REGISTER
router.post('/register', fregisterController);

//POST || SEACRH
router.post('/search', search);


module.exports = router;