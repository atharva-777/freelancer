const express = require("express");
const { cloginController, cregisterController,postJob } = require("../controllers/clientController");

// router Object

const router = express.Router();

// routers
// POST || LOGIN
// router.post('/login', cloginController);

// POST || REGISTER
router.post('/register', cregisterController);

//POST || POSTJOB
router.post('/postjob',postJob);


module.exports = router;