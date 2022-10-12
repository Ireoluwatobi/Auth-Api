const toDo = require("../../models/toDoModel");

const completeToDo = async (req, res)=>{
const id = req.params.id

try {
    const todo = await  toDo.findById(id)
 todo.status = "COMPLETED"

 await todo.save()

 
    res.status(200).json({
      message: "todo Completed",
    });
} catch (error) {
    console.log(error)
}
}

module.exports = completeToDo