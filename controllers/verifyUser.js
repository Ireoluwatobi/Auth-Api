const jwt = require('jsonwebtoken')
const User = require("../models/userModel");

const verifyUser = async (req, res) => {
const token = req.params.id

const validate = jwt.verify(token, process.env.JWT_PASS)
const {email} = validate

 try{
    const unverifiedUser = await User.findOne({email})
    if(!unverifiedUser){
        res.json({
            status : false,
            message: "Please request a new verification link"
        
        })
    }
  
    unverifiedUser.isVerified = true
    await unverifiedUser.save()

    res.json({
        status : true,
        message: "User Verified!"
    }) 
 }catch(error){
    console.log(error)
 }
}

module.exports = verifyUser