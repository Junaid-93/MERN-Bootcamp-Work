const express = require("express");
const app = express();
const port = process.env.PORT || 8000

// app.use(express.text())

app.get("/", (req,res) => {
    console.log(res.write("Salam ! kya hal hen"))
})

app.get("/about", (req,res) => {
    res.send("How about you")
})

// var server = app.listen(8000, function () {  
//      console.log("Example app listening at http://%s:%s", host, port)  
//     })  
app.listen(port,()=>{
    console.log(`App is listening at http://localhost:${port}`);
})