const express = require("express");
const router = express.Router();

const { adminauthenticate } = require("../middlewares/auth.middleware");

const {
    getManagers,
    approveManager,
    removeManager
} = require("../controllers/admin.controller");

// FETCH ALL USERS WHO CAN BE MANAGERS
router.get("/addmanager", adminauthenticate, getManagers);

// MAKE A USER MANAGER
router.put("/approvemanager/:id", adminauthenticate, approveManager);

// REMOVE MANAGER ROLE
router.put("/removemanager/:id", adminauthenticate, removeManager);

module.exports = router;
