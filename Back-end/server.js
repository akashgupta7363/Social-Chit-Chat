const express = require("express");
const app = express();
const dotenv = require("dotenv");
const chats = require("./Dummy data/data");
const connectDB = require("./config/db");
const colors = require("colors");

dotenv.config();
connectDB();

app.get("/", (req, res) => {
  res.send("APP IS RUNNING");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  const singleChat = chats.find((c) => c._id == req.params.id);
  res.send(singleChat);
});

PORT = process.env.PORT || 7000;
app.listen(
  PORT,
  console.log(`Server is listenning on port ${PORT}`.yellow.bold)
);
