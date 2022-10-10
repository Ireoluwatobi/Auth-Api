const toDo = require("../models/toDoModel");
const User = require("../models/userModel");

const createToDo = async (req, res) => {
  const { id } = req.user;
  const { name } = req.body;
  if(!name){
    res.status(401).json({

        message : "please enter all fields"
    })
  }
  try {
    const newToDo = new toDo({
      name,
    });
    const saved = await newToDo.save();

    const user = await User.findOne({id});
    await user.updateOne({$push : {toDo : saved}})
    res.json({
    status :true,
    message : "To do list updated"
    });
  } catch (error) {
    res.json({
        message : error
    })
  }
};
module.exports = createToDo

// update todo delete todo complete todo
// is admin