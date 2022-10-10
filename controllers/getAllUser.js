const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const getAllUser = async (req, res) => {
  const { id } = req.user;

  const allUser = await User.find({});
  console.log(allUser)
  res.json({
    status: true,
    message : "All users retrieved sucessfully",
    payload: 
      allUser.map((el) => {
        return{
          id: el._id,
          firstName : el.firstName,
          lastName : el.lastName,
          toDo : el.toDo
        }
       
      })
    ,
  });
};

module.exports = getAllUser;
