const mongoose = require('mongoose')
const URL = "mongodb://127.0.0.1:27017/Auth_Task"

function MyConection (){   
    mongoose.connect(URL).then(()=>{
        console.log("I am Connected")
    }).catch(()=>{
        console.log("I am Failed")
    })
}

module.exports.MyConection = MyConection