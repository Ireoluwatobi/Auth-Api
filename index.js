const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const  createDB = require("./config/db")
const userRoute = require("./routes/userRoute")
const notFound = require("./middlewares/notFound")
require('colors')

var app = express()

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}));


dotenv.config()
const PORT = process.env.PORT

app.use("/api/v1/auth", userRoute)

app.use(notFound)

app.get ("/", (req, res) => {
   res.json({
   message: "Welcome to my api"
   })
})

const startApp = async ()=>{
 try{ 
   await createDB()  
    app.listen(PORT, console.log(`server is running on port ${PORT}`))
   
 }catch(error){
  console.log(error)
  throw error
 }

}
startApp()

module.exports = app