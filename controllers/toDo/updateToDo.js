const toDo = require("../../models/toDoModel");

const updateToDo = async (req, res) => {
  const id = req.params.id;
  const { content } = req.body;
  if (!content) {
    res.status(401).json({
      message: "please enter all fields",
    });
  } else {
    try {
      const todo = await toDo.findByIdAndUpdate(id, { content });

      res.status(200).json({
        message: "to-do Updated",
      });
    } catch (error) {
      console.log(error);
    }
  }
};
module.exports = updateToDo;
