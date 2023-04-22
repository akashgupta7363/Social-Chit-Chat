const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Mongodb conncted ${conn.connection.host}`.cyan.bold);
  } catch (error) {
    console.log(`ERROR : ${error}`.red.bold);
  }
};
module.exports = connectDB;
