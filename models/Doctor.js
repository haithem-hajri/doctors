const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
  {
    gov: {
      type: String,
    },
    country: {
      type: String,
    },
    city: {
      type: String,
    },

    speciality: {
      type: String,
    },
    about: {
      type: String,
    },
    avatar: {
      type: String,
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model("Doctor", doctorSchema);
