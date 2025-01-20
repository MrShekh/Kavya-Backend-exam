const express=require('express')
const app = express()
const  userModel =require('./model/model.js') 
var bodyParser = require('body-parser')
const bcrypt=require("bcrypt")
const  connectToDb =require( './config/db.js')
connectToDb()
const port = 3000
app.use(bodyParser.urlencoded({ extended: true }))


app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('kavus World!')
})
app.post("/register", async (req, res)=>{
  const {name, email, password,confirmpassword,phone} = req.body
  const userExist = await userModel.findOne({email})
  if(userExist) {
    return res.status(400).json({error: "Email already exists"})
  } 
  const hash_password = await bcrypt.hashSync(password, 10)
  const user = await userModel.create({
    name,
    password: hash_password,
    confirmpassword:hash_password,
    email,
    phone
  })
  await user.save();
  res.send({message:"User Create"})
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})