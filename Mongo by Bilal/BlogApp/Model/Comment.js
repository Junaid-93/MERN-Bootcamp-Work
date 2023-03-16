const mongoose = require("mongoose")


const Comment = new mongoose.Schema(
{
    comment:{
        type:String,
        required: [true,"Title Is Required"],
    },
    createdDate:{
        type:Date,
        default:Date.now()
    }

}
)


module.exports = mongoose.model("Comment",Comment)