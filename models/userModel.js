const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  isVerified: {
    type: Boolean,
    default: false,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

module.exports = mongoose.model("user", UserSchema);
