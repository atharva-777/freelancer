const express = require("express");
const { fregisterController,search, applyForJob } = require("../controllers/fuserController");

// router Object

const router = express.Router();

// routers
// POST || LOGIN
// router.post('/login', floginController);

// POST || REGISTER
router.post('/register', fregisterController);

//POST || SEACRH
router.post('/search', search);

//POST || APPLY
router.post("/apply",applyForJob);


module.exports = router;