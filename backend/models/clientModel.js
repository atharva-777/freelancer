const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
    // Existing fields
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    // Additional fields for hiring client
    company: {
      type: String,
      required: [true, "Company name is required"],
    },
    jobTitle: {
      type: String,
      required: [true, "Job title is required"],
    },
    contactNumber: {
      type: String,
      required: [true, "Contact number is required"],
    },
  });
  
  const clientModel = mongoose.model('hiringClients', clientSchema);
  module.exports = clientModel;
  