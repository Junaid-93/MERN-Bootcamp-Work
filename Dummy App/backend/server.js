const express = require("express")
const cors = require("cors")
const JWT = require("jsonwebtoken")
const Connection = require("./Config/DBConnection")
const User = require("./Model/User")
const Excercise = require("./Model/Excercise")

Connection()
const SKey = "manhbataoga"

const app = express()
app.use(express.json())
app.use(cors({origin:"*"}))


app.use("/excercise",(req,res,next)=>{
    const token = req.headers.authorization

    if(token==null){
        res.status(401).send("Nikal")
    }
    else{
        JWT.verify(token,SKey,(err,data)=>{
            if(err){
                res.status(401).send("Nikal")
            }
            else{
                req.data = data
                next()
            }

        })

    }

})

// For All
app.post("/register",async (req,res)=>{
    const {name, email, password} = req.body
    // User.create({name:name,email:email,password:password})
try{

    const result = await  User.create({name,email,password})
    
    res.status(200).send({
        message:"Register Successful",
        User:result
    })
    
}
catch(err){
    res.send("User Not Created")

}
})

// For All
app.post("/login",async (req,res)=>{
    const {email,password} = req.body
    console.log(req.body)

    const result  = await User.findOne({email:email,password:password})

    if(result==null){
        res.status(400).send("Invalid Credentials")
    }
    else{
        const Token = JWT.sign({id:result["_id"]},SKey)
        res.send({Token:Token})
    }
})


// For Authenticate
app.post("/excercise/addexcercise",async (req,res)=>{ 
    // {id:"sdasfsdfs",iat:"sdasdasd"}

    const UserId  = req.data.id
    console.log(UserId)

    const {title,des,type,duration} = req.body

    try{
        const result = await Excercise.create({title,des,type,duration})
        await User.findByIdAndUpdate(UserId,{$push:{exercises: result["_id"]}})

        res.send({
            message:"Excercise Added"
        })

    }
    catch(err){
        res.status(400).send({
            message:"Excercise Not Added",
            Error:err.message
        })
    }
})




// For Authenticate
app.get("/excercise/getexcercise",async (req,res)=>{
    const UserId = req.data.id
    const result = await User.findById(UserId).populate("exercises")
    console.log(result)

    res.send({exercises:result.exercises})
})

// For Authenticate
app.delete("/excercise/:id",(req,res)=>{})

app.delete("/excercise/:exName",(req,res)=>{})

app.listen(5000)