const express = require("express")
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.post("/",(req,res)=>{
    console.log(req.body.name);
})

app.listen(5000)