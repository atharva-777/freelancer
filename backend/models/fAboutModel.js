const mongoose = require("mongoose");

// schema design 
const aboutSchema = new mongoose.Schema({
    userid:{
        type: mongoose.Schema.Types.ObjectId,
        required:[true,"Id is required"]
    },
    domain:{
        type: String, 
        require:[true, "name is required"]
    },
    skills:{
        type: [String],
        require:[true, "email is required"],
        unique: true
    },
    education:{
        type: String,
        required:[true, "education is required"]
    },
    experience:{
        type: String,
        enum: ["Yes", "No"],
        default: "No"
    },
    portFolio: {
        type: String,
        required: false, 
        default: "", 
    },
    charges: {
        type: Number,
        required: [true, "charges are required"]
    },
},
{timestamps:true}
)


const aboutModel = mongoose.model('freelancerAbout', aboutSchema);
module.exports =  aboutModel;
