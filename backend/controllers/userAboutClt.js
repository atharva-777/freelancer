const aboutModel = require("../models/fAboutModel");


const edituser = async(req,res)=>{
    try {
        await clientModel.findOneAndUpdate({_id:req.body.clientId}, req.body.payload);
        res.status(200).send("Edited Successfully..!")
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
} 


module.exports = edituser;




