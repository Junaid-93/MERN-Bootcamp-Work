const mongoose = require('mongoose')
const url = 'mongodb+srv://19junaid93:QwIaxAXuyPPqAui4@cluster0.zskq0pt.mongodb.net/test'

const dbConnection = () =>{
    mongoose.connect(url)
    .then(()=>{
        console.log('Database is connected')
    })
    .catch((error) => {
        console.log({message: error.message})
    })
}
module.exports = dbConnection