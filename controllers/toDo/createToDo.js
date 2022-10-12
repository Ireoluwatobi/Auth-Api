const toDo = require("../../models/toDoModel");
const User = require("../../models/userModel");

const createToDo = async (req, res) => {
  const { userId } = req.user;
  const { content } = req.body;
  if (!content) {
    res.status(401).json({
      message: "please enter all fields",
    });
  }
  try {
    const newToDo = new toDo({
      content,
    });
    const todo = await newToDo.save();

    const user = await User.findById(userId);
    await user.updateOne({ $push: { toDo: todo } });
    res.json({
      status: true,
      message: "New to-do added",
      id: todo._id,
    });
  } catch (error) {
    res.json({
      message: error,
    });
  }
};
module.exports = createToDo;
