const express = require('express')
const app = express()
const JWT = require('jsonwebtoken')
const MyDb =  require("./config/dbConfig")
const User =  require("./Model/User")
const cookieParser =  require("cookie-parser")

app.use(express.json())

const myKey = "Pakistan11"
MyDb.MyConection()
app.use(cookieParser())

// AUTHENTICATION

app.use(['/Admin','/GetAllCourses','/GetAllStudents','/GetAllTeachers','/MakeAssignment','/MakeQuiz','/SubmitAssignment','/SubmitQuiz','/MyCourse'],(req,res,next) => {
    const Token = req.cookies.Token1;
    if(Token==null){
        res.status(400).send("Please, login first")
}
else{
        JWT.verify(Token,myKey,(err,user)=>{
            if(err){
                res.status(401).send("Please, login again")
        }
        req.MyUser =  user
        next()
        })
            }
})

// AUTHORIZATION FOR ADMIN
app.use(['/Admin','/GetAllCourses','/GetAllStudents','/GetAllTeachers'],(req,res,next) => {
    if(req.MyUser.role == "Admin") {
        next()
    }
    else {
        res.send("You are not authorized/Admin")
    }
})

// AUTHORIZATION FOR TEACHER
app.use(['/MakeAssignment','/MakeQuiz','/MyCourse'],(req,res,next) => {
    if(req.MyUser.role == "Teacher") {
        next()
    }
    else {
        res.send("You are not authorized/teacher")
    }
})

// AUTHORIZATION FOR STUDENT
app.use(['/SubmitAssignment','/SubmitQuiz','/MyCourse'],(req,res,next) => {
    if(req.MyUser.role == "Student") {
        next()
    }
    else {
        res.send("You are not authorized/student")
    }
})

// REGISTER USER
app.post('/RegisterUser', async (req,res)=>{
    const {Email,Password,Phone,Role} = req.body
    console.log(req.body)

    try{
        const result = await User.create({Email:Email, Password:Password, Phone:Phone, Role:Role })
        console.log(result)

        const obj = {
           id:result["_id"],
           Role:result["Role"]    
        }
   
        const Token = JWT.sign(obj,myKey)
   
         res.cookie("Token1",Token)
       
        res.send(Token)
       }
       catch(e){
           res.status(400).send(e.message)
       }
   

})
// LOGIN
app.post("/login",async(req,res)=>{
    const {Email, Password} = req.body

    const result =  await User.findOne({Email:Email,Password:Password})
    
    if(result==null){
        res.send("Invalid Entry")
    }
    
    else{

        const obj = {
            id:result["_id"],
            Role:result["Role"]       
         }
    
         const Token = JWT.sign(obj,myKey)
    
         res.cookie("Token1",Token)
       
        res.send("Log in successful")
    }


})

// LogoutUser
app.post("/logout",(req,res)=>{
    res.cookie("Token1",null)
    res.send("Logout")
})

// APIs 

// FOR ADMIN
app.get("/Admin", (req,res) => {
    res.send("Admin")
})

app.get("/GetAllCourses", (req,res) => {
    res.send("GetAllCourses")
})

app.get("/GetAllStudents", (req,res) => {
    res.send("GetAllStudents")
})

app.get("/GetAllTeachers", (req,res) => {
    res.send("GetAllTeachers")
})

app.get("/MakeAssignment", (req,res) => {
    res.send("MakeAssignment")
})

app.get("/MakeQuiz", (req,res) => {
    res.send("MakeQuiz")
})

app.get("/SubmitAssignment", (req,res) => {
    res.send("SubmitAssignment")
})


app.get("/SubmitQuiz", (req,res) => {
    res.send("SubmitQuiz")
})

app.get("/MyCourse", (req,res) => {
    res.send("MyCourse")
})


app.listen(3000)