const jwt = require('jsonwebtoken')
const User = require("../models/userModel");

const confirmUser = async (req, res) => {
const token = req.params.id

const validate = jwt.verify(token, process.env.PASS)
const {id} = validate
 try{
    const findUser = User.findById(id)
    if(findUser){
        res.json({
            status : true,
            message: "User Found"
        
        })
    }
    res.json({
        status : false,
        message: "User does not exist"
    }) 
 }catch(error){
    console.log(error)
 }
}

module.exports = confirmUser