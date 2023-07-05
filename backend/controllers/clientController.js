const clientModel = require("../models/clientModel");
const jobModel = require("../models/jobModule");

// const cloginController = async (req, res) => {
//     try {
//         const {email,password } = req.body;
//         const user = await clientModel.findOne({email, password });

//         if (!user) {
//             res.status(404).send(`User not found`)
//         }
//         res.status(200).json({
//             success: true,
//             user
//         });

//     } catch (error) {
//         res.status(400).json({
//             success: false,
//             error
//         })
//     }
// }



// Register USer
const cregisterController = async (req, res) => {
    try {
        const newUser = new clientModel(req.body);
        await newUser.save();
        res.status(201).json({
            success: true,
            // newUser
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            error
        })
    }
}




const editInfo = async(req,res)=>{
    try {
        await clientModel.findOneAndUpdate({_id:req.body.clientId}, req.body.payload);
        res.status(200).send("Edited Successfully..!")
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
} 


const postJob = async(req,res) =>{
    try {
        const newJob = new jobModel(req.body);
        await newJob.save();
        res.status(201).json({
            success: true,
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            error
        })
    }
}



module.exports = { cregisterController, editInfo, postJob }