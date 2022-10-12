const mongoose = require("mongoose");

const toDoSchema = mongoose.Schema(
  {
    content: {
      type: String,
    },
    status: {
      type: String,
      default: "UNCOMPLETED",
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("todo", toDoSchema);
