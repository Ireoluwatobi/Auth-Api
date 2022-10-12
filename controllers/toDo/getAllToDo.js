const User = require("../../models/userModel");

const getToDos = async (req, res) => {
  const id = req.user;
  try {
    const user = await User.findOne({ id }).populate({
      path: "toDo",
      select: "content status",
    });

    const toDo = user.toDo;

    res.status(200).json({
      message: "To Do List",
      payload: toDo,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = getToDos;
