const toDo = require("../../models/toDoModel");

const deleteToDo = async (req, res) => {
  const id = req.params.id;
  const ID = req.user;
  try {
    const todo = await toDo.findByIdAndDelete(id);

    res.status(200).json({
      message: "todo Deleted",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = deleteToDo;
