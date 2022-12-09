const User = require("../models/User");
const Doctor = require("../models/Doctor");
const mongoosePaginate = require("mongoose-paginate-v2");
exports.getBestDoctors = (req, res) => {
  User.find({ _doctor: { $ne: null } })
    .populate("_doctor")
    .select("-password")
    .limit("5")
    .then((doctors) => {
      res.status(200).json(doctors);
    })
    .catch((err) => {
      res.status(401).json(err);
    });
};

exports.getDoctorByID = (req, res) => {
  id = req.params.id;
  User.findOne({ _id: id })
    .populate("_doctor")
    .select("-password")
    .then((doctor) => {
      if (doctor._doctor) {
        res.status(200).json(doctor);
      } else {
        res.status(401).json("no doctor");
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};
exports.getDoctors = (req, res) => {
  const { page, name, speciality } = req.query;
  let query = {};
  query._doctor={ $ne: null }
  if (speciality) {
     //{ $and: [{ age: { $gt: 2 } }, { age: { $lte: 4 } }] }
  // query._doctor={$and:[ {$ne: null},{}] };
    // query._doctor={ $ne: null };
    query.speciality={ $in: speciality.split(",")}
    
  }
  if (name?.length>2) {
    query.name = {  $regex: new RegExp(name), $options: "i"   };
  }
  // ;
  const options = {
    page: page,
    limit: 5,
    populate: "_doctor",
    select: "-password ",
    // where:_doctor: { $ne: null }
  };
  User.paginate(query, options, (err, result) => { 
    if (err) {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    }
    res.json(result);
  });
};
