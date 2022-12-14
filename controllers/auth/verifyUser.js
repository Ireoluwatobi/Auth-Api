const jwt = require('jsonwebtoken')
const User = require("../../models/userModel");

const verifyUser = async (req, res) => {
const token = req.params.id

const validate = jwt.verify(token, process.env.JWT_PASS)
const {email} = validate

 try{
    const verifiedUser = await User.findOne({email})
    if(!verifiedUser){
        res.json({
            status : false,
            message: "Please request a new verification link"
        
        })
    }
  
    verifiedUser.isVerified = true
    await verifiedUser.save()

    res.json({
        status : true,
        message: "User Verified!"
    }) 
 }catch(error){
    console.log(error)
 }
}

module.exports = verifyUser