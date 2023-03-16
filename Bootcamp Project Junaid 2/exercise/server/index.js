const express = require('express')
const app = express()
const user = require('./models/user')
const exercise = require('./models/exercise')
const JWT = require('jsonwebtoken')
const dbConnection = require('./config/dbConnection')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const bcrypt = require('bcrypt')



// MongoDB Connection
dbConnection()

app.use(cors({origin:"*",methods:["GET","POST","PATCH","PUT","DELETE"]}))
// app.use(cors())
app.use(express.json())
app.use(cookieParser())

// Secret Key
const theKey = "abcd"

const port = process.env.PORT || 8000



// MIDDLEWARE
app.use(["/dashboard","/dashboard/add_activity","/dashboard/my_activities","/dashboard/profile"],(req,res,next)=>{
    // const Token = req.cookies.token;
    const Token = req.headers.authorization;
    // const Token = rawtoken.replace('Bearer ','')
    console.log('token found:',Token);
    if(Token===undefined){
        res.status(401).send("You are not authorized")
    }
    else{

        JWT.verify(Token,theKey,(err,data)=>{
            if(err){
                res.status(401).send("Please, provide correct credentials")
            }
            else{
                req.data = data
                console.log(req.data);
                next()
            }
        })
    }
})


// Sign Up (For All)
app.post("/signup", async (req,res) => {
    const {name,email,password,about} = req.body
    if(!name, !email, !password) {
        res.status(404).send("Please, fill all the fields")
    }
    try {
        const exist = await user.findOne({email:email});
        if (exist) {
            res.status(302).send("This email already exists")
        }

        const hashed = await bcrypt.hash(password,5);
        const result = await user.create({name:name,email:email,password:hashed,about:about})

        if(!result) {
            res.status(404).send("User not created")
        }

        res.status(200).send({
            message: "Registered successfully",
            user:result
        });
    }
        catch(error){
            res.status(500).send("User not created : Server Error")
        }
    
})



// Login (For all) 
app.post("/", async (req,res) => {
    const {email, password} = req.body
        
    const exist = await user.findOne({email:email})

    if(!exist){
        res.status(404).send("Field provided is incorrect")
    }

    const compare = await bcrypt.compare(password, exist.password);

    if (!compare){
        res.status(404).send("email or password is incorrect")
    }

    else{
        const Token = JWT.sign(
            {id: exist._id, username: exist.username, email: exist.email},
            theKey, 
            { algorithm: "HS256"});
            // res.cookie("token", Token)
        res.status(200).send({Token:Token})
    }
})
    


// Logout

app.post("/logout",(req,res) => {
    // res.cookie("token", null)
    res.send("Logout")
})




// For Authenticated Users

app.post("/dashboard/add_activity", async (req,res) => {
    const userId= req.data.id
    console.log(userId);
    
    const {name, type, duration, date, description} = req.body

    try{
        const result = await exercise.create({name:name,type:type,duration:duration,date:date,description:description,userId:userId})
        // await user.findByIdAndUpdate(userId,{$push:{exercises: result["_id"]}})
       console.log(result);
        res.send({
            message:"Exercise has been added",
            data:result
        })

    }
    catch(err){
        res.status(400).send({
            message:"Exercise not added",
            Error:err.message
        })
    }
})



// For Authenticated Users
app.get("/dashboard/my_activities" ,async (req,res) => {
    const userId = req.data.id
    // const result = await user.findById(UserId).populate("exercises")
    const result = await exercise.find({userId:userId})
    console.log(result)
    res.send({exercises:result})
})


// Profile (For Authenticated Users)
app.post("/dashboard/profile", async (req,res) => {
    const {name,email,password,about} = req.body
    const UserId = req.data.id
    try {
        const result = await user.updateOne({name:name,email:email,password:password,about:about})
        res.status(200).send({
            message: "Updated successfully",
            user:result
        });
    }
        catch(error){
            res.send("User not updated")
        }
    
})



// Logout
app.post("/logout", (req,res) => {
    res.send({"Token": Token})
})


















app.listen(port , ()=>{
    console.log(`Port is running at http://localhost:${port}`)
})  