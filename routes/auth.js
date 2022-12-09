const express = require("express");
const router = express.Router();
const { Signup, DoctorSignup, login,getUser,getAllUser } = require("../controllers/auth");
const {requireLogin} = require('../middlwares/requireLogin')
router.post("/signup", Signup);
router.post("/doctor-signup", DoctorSignup);
router.post("/login", login);
router.get("/user",requireLogin, getUser); 
router.get("/users", getAllUser);
  
module.exports = router;
