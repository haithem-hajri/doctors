const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    socketId: {
      type: String,
    },
    password: {
      type: String,
    },
    role: {
      type: String,
    },

    name: {
      type: String,
      required: true,
      max: 32,
    },

    _doctor: { type: mongoose.Types.ObjectId, ref: "Doctor" },
  },
  { timestamp: true }
);
userSchema.plugin(mongoosePaginate);
const User = mongoose.model("User", userSchema);
module.exports = User;
// module.exports = mongoose.model("User", userSchema);
