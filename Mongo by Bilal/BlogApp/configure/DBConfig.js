const mongoose = require("mongoose")
const URL = "mongodb+srv://bilal5002:gafar123@cluster0.mfmba.mongodb.net/?retryWrites=true&w=majority";

function MyConection (){   
    mongoose.connect(URL).then(()=>{
        console.log("I am Connected")
    }).catch(()=>{
        console.log("I am Failed")
    })
}

module.exports.MyConection = MyConection


