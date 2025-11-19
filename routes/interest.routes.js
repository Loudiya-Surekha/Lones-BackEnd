const express = require('express');
const router = express.Router();

const { 
    adminManagerAuthenticate, 
    adminauthenticate 
} = require('../middlewares/auth.middleware');

const {
    getInterestRates,
    addInterestRates,
    updateInterestRate
} = require('../controllers/interest.controller');

// GET INTEREST RATES
router.get("/intrestrates", adminManagerAuthenticate, getInterestRates);

// ADD NEW INTEREST RATE
router.post("/addintrestrates", adminauthenticate, addInterestRates);

// UPDATE INTEREST RATE
router.put("/updateintrestrate/:id", adminauthenticate, updateInterestRate);

module.exports = router;
