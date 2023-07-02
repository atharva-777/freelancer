const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
// const colors = require("colors");
const connectDb = require("./config/connectDb");

// config env File
dotenv.config();

// databaseCall
connectDb();

const app = express();

// middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello, World!');
  });

// Routes

// user routes
app.use("/api/v1/users", require("./routes/userRoute"));

app.use("/api/v1/client", require("./routes/clientRoute"));


const PORT = 8080 || process.env.PORT

app.listen(PORT,()=>{
    console.log(`running on port ${PORT}`);
});