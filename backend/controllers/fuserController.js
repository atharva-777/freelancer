const userModel = require("../models/fuserModel");
const jobModel = require("../models/jobModule");

const floginController = async (req, res) => {
    try {
        const {email,password } = req.body;
        const user = await userModel.findOne({email, password });

        if (!user) {
            res.status(404).send(`User not found`)
        }
        res.status(200).json({
            success: true,
            // user
        });


    } catch (error) {
        res.status(400).json({
            success: false,
            error
        })
    }
}



// Register USer
const fregisterController = async (req, res) => {
    try {
        const newUser = new userModel(req.body);
        await newUser.save();
        res.status(201).json({
            success: true,
            newUser
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            error
        })
    }
}



    const search = async (req, res) => {
        try {
            const  query  = req.param; // The attribute being searched, passed as a URL parameter

            // Perform a case-insensitive search using regular expressions
            const results = await jobModel.find({ title: { $regex: query, $options: 'i' } });
        
            res.status(200).json(results); // Return the search results to the client
            // results[0].description     if we are getting multiple results we can access them using thier index.
          } catch (error) {
            console.error('Error in searchAttribute controller:', error);
            res.status(500).json({ error});
          }
}

module.exports = { floginController, fregisterController, search }
