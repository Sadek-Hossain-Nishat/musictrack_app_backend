const express = require("express");
const cors = require("cors");
const config = require("./config/config");
const musictrackRouter = require("./routes/musicTrackRoute");

const app = express();

require("dotenv").config();

// Middleware
app.use(cors());
app.use(express.json());

const connectDB = require("./services/connectMongo");

connectDB();

app.use("/api", musictrackRouter);

// Start the server
app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}\nHello World`);
});
