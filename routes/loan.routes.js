const express = require("express");
const router = express.Router();

const {
    getAllLoans,
    getLoanDetails,
    getUserLoanDetails,
    payEmi,
    addLoan,
    approveLoan,
    receiveDownPayment,
    disburseLoan
} = require("../controllers/loan.controller");

const {
    adminManagerAuthenticate,
    adminauthenticate,
    userauthenticate
} = require("../middlewares/auth.middleware");

// ADMIN / MANAGER ROUTES
router.get("/", adminManagerAuthenticate, getAllLoans);
router.get("/:id", adminManagerAuthenticate, getLoanDetails);
router.post("/", adminManagerAuthenticate, addLoan);
router.put("/approve/:id", adminManagerAuthenticate, approveLoan);
router.put("/downpayment/:id", adminManagerAuthenticate, receiveDownPayment);
router.put("/disburse/:id", adminManagerAuthenticate, disburseLoan);

// USER ROUTES
router.get("/user/details/get", userauthenticate, getUserLoanDetails);
router.put("/user/payemi/:loanId/:emiId", userauthenticate, payEmi);

module.exports = router;
