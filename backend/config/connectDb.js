const mongoose = require("mongoose");
const colors = require("colors");
const connectDb = async ()=>{
    try{
        // mongoose.set('debug', true);
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`Server running on ${mongoose.connection.host}`.bgCyan.white);
    }catch(err){
        console.log(`${err}`.bgRed);
    }
}

module.exports = connectDb;