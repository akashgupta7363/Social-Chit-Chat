const express = require("express");
const app = express();
const dotenv = require("dotenv");
const chats = require("./Dummy data/data");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const messageRoutes = require("./routes/messageRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
app.use(express.json());

dotenv.config();
connectDB();

app.get("/", (req, res) => {
  res.send("APP IS RUNNING");
});

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);

// app.get("/api/chat", (req, res) => {
//   res.send(chats);
// });

// app.get("/api/chat/:id", (req, res) => {
//   const singleChat = chats.find((c) => c._id == req.params.id);
//   res.send(singleChat);
// });
app.use(notFound);
app.use(errorHandler);

PORT = process.env.PORT || 8000;
app.listen(
  PORT,
  console.log(`Server is listenning on port ${PORT}`.yellow.bold)
);
