const express =  require("express")
const app =  express()
const JWT =  require("jsonwebtoken")
const cookieParser =  require("cookie-parser")
const User =  require("./Model/User")
const MyDb =  require("./config/dbConfig")

// Secret Key
const myKey = "Manhbataga" 

// DB Connection
MyDb.MyConection()

// Parse res.cookie
app.use(cookieParser())

// Parse res.body
app.use(express.json())

// http:localhost:3000/admin1

// Only Authentication
app.use(["/getallstudent","/admin2","/user1","/user2","/allow"],(req,res,next)=>{
       const Token =  req.cookies.Token1
    if(Token==null){
            res.status(400).send("Nikal")
    }
    else{
            JWT.verify(Token,myKey,(err,user)=>{
                if(err){
                    res.status(401).send("Nikal Dosra Wala Lao")
            }
            req.MyUser =  user
            next()
        })
    }

})

// Authorization Checking Role == Admin
app.use(["/admin1","/admin2"],(req,res,next)=>{
    if(req.MyUser.role=="Admin"){
        next()
    }
    else{
        res.send("You Are Not Admin")
    }
})

// Authorization Checking Role == User
app.use(["/user1","/user2"],(req,res,next)=>{
    if(req.MyUser.role=="User"){
        next()
    }
    else{
        res.send("You Are Not User")
    }
})

// EveryOne Is Allowed Even Without Token
app.get("/",(req,res)=>{
    
    console.log(req.cookies)
    console.log(req.headers["cookie"])
    res.send("EverOne Is Allowed")
})

// RegisterUser
app.post("/registerUser",async(req,res)=>{
   const {Email, Password, Phone} = req.body
   console.log(req.body)

   try{
     const result = await User.create({Email:Email, Password:Password, Phone:Phone})
     const obj = {
        id:result["_id"],
        role:result["Role"]       
     }

     const Token = JWT.sign(obj,myKey)

     res.cookie("Token1",Token)
     res.send("User Added")
    }
    catch(e){
        res.status(400).send(e.message)
    }

})

// LogoutUser
app.post("/logout",(req,res)=>{
    res.cookie("Token1",null)
    res.send("Logout")
})

// LoginUser
app.post("/login",async(req,res)=>{
    const {Email, Password} = req.body

    const result =  await User.findOne({Email:Email,Password:Password})
    
    if(result==null){
        res.send("Insan Banja")
    }
    
    else{

        const obj = {
            id:result["_id"],
            role:result["Role"]       
         }
    
         const Token = JWT.sign(obj,myKey)
    
         res.cookie("Token1",Token)
       
        res.send("Yah Lo Cookie")
    }


})


// Only Admin 
app.get("/admin1",(req,res)=>{
    res.send("Admin1")
    
})
app.get("/admin2",(req,res)=>{
    res.send("Admin2")
    
})

// Only User
app.get("/user1",(req,res)=>{
    res.send("User1")
    
})
app.get("/user2",(req,res)=>{
    res.send("User1")
    
})

// Any One With Authenticate Token
app.get("/allow",(req,res)=>{
    res.send("All Allowed")
    
})

// App Starting Port
app.listen(3000)