const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
    // Define the fields for the application collection
    jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'JobPost', required: true },
    freelancerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Freelancer', required: true },
    status: { type: String, required: true },
    // Add more fields as needed
});

// Define the models
const applicationModel = mongoose.model('Application', applicationSchema);

module.exports =  applicationModel;