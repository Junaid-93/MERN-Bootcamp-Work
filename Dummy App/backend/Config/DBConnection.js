const mongoose = require("mongoose");
const Url = "mongodb+srv://bilal5002:manhbataoga@cluster0.mfmba.mongodb.net/?retryWrites=true&w=majority"

function connection(){
    
    mongoose.connect(Url)
    .then(()=>{
        console.log("DB Connected")
    })
    .catch(()=>{
        console.log("DB Connection Failed")
    })

}


module.exports = connection