const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors({origin:"*",methods:"*"}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.post("/",(req,res)=>{
    console.log(req.body.name);
    res.write(req.body.name)
    res.write(req.body.id)
    res.send(req.body.password)
})

app.listen(5000,()=>{console.log('server is running ok');})