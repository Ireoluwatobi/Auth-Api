const cloudinary = require("../utils/cloudinary")
const upload = require("../utils/multer")

const uploadFile = async (req, res)=>{
 try {
    console.log("uploading")
    const result = await cloudinary.uploader.upload(req.file.path)
    res.status(200).json({
     message : "file uploaded successfully",
     result,
    })
 } catch (error) {
    res.status(404).json({
        message : " upload not successful",
        error,
       })
 }
}

module.exports = uploadFile