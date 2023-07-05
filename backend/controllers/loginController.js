const userModel = require("../models/fuserModel");
const clientModel = require("../models/clientModel");


const loginController = async (req, res) => {
    try {
      const { email, password } = req.body;
      let user;
  
      // Search for the user in the clientModel collection
      user = await clientModel.findOne({ email, password });
  
      // If the user is not found, search in the freelancerModel collection
      if (!user) {
        user = await userModel.findOne({ email, password });
      }
  
      if (!user) {
        return res.status(404).send('User not found');
      }
  
      // Determine the role based on the collection the user was found in
      const role = user instanceof clientModel ? 'client' : 'freelancer';
  
      res.status(200).json({
        success: true,
        user,
        role,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        error,
      });
    }
  };
  

  module.exports = loginController;