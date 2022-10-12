const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  isAdmin: {
    type: Boolean,
    default: false,
  },
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
  toDo: [{ type: mongoose.Schema.Types.ObjectId, ref: "toDo" }],
});

module.exports = mongoose.model("user", UserSchema);
