const express = require('express')
const router = express.Router()
const {getBestDoctors , getDoctorByID , getDoctors} = require('../controllers/doctor')
router.get('/best-doctors', getBestDoctors)
router.get('/doctor/:id',getDoctorByID)
router.get('/doctors',getDoctors)
module.exports=router