const express = require("express");
const { cregisterController,postJob, drafts } = require("../controllers/clientController");

// router Object

const router = express.Router();

// routers
// POST || LOGIN
// router.post('/login', cloginController);

// POST || REGISTER
router.post('/register', cregisterController);

//POST || POSTJOB
router.post('/postjob',postJob);

//GET || HOMEPAGE POSTED JOBS
router.post('/clientHome',drafts);


module.exports = router;