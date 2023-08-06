 const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
// const colors = require("colors");
const connectDb = require("./config/connectDb");
const loginController = require("./controllers/loginController");
const socket = require("socket.io");
const MessageModel = require("./models/MessageModel");

// config env File
dotenv.config();

// databaseCall
connectDb();

const app = express();

// middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors({
  origin:"*"
}))

app.get('/', (req, res) => {
    res.send('Hello, World!');
  });

// Routes

//common route
app.post('/api/v1/login', loginController);

// user routes
app.use("/api/v1/users", require("./routes/userRoute"));

//client route
app.use("/api/v1/client", require("./routes/clientRoute"));

app.get("/messages", async(req,res) => {
  const messages = await MessageModel.find({
    roomId:req.query.roomId
  })

  return res.json(messages)
})


const PORT = 5000 || process.env.PORT

const server =  app.listen(PORT,()=>{
    console.log(`running on port ${PORT}`);
});

const io = socket(server, {
  cors: {
    origin: "*",
  },
});


io.on("connection",(socket) => {
// create a room with company id and freelancer id to chat
  socket.on("join-room", (event) => {
    const roomId = event.roomId
    console.log("join room event ", roomId)

    socket.join(roomId)

    socket.on(`chat`, async (event) => {
      console.log("Chat event triggered")
      console.log(event)
      // save the chat into database
      socket.to(roomId).emit("new-message",event)
      await MessageModel.create({
        sender:event.sender,
        receiver:event.receiver,
        roomId,
        message:event.message
      })
    })
  })

  

  socket.on("leave-room",(event) => {
    socket.leave(event.roomId)
  })
})