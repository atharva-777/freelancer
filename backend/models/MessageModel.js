const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
    // Existing fields
    roomId: {
        type:String
    },
    message:{
        type:String
    },
    sender: {
        type: mongoose.Schema.Types.ObjectId,
    },
    recevier: {
        type: mongoose.Schema.Types.ObjectId,
    }
  },
  {timestamps:true}
  );
  
  const MessageModel = mongoose.model('messages', MessageSchema);
  module.exports = MessageModel;
  