import mongoose from "mongoose";

const connectDB = () => {
  mongoose.connect(process.env.MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    bufferCommands: false, // Disable mongoose buffering
    bufferMaxEntries: 0, // and MongoDB driver buffering
    serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds instead of 30 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  })
  .then(() => {
    console.log(`Server Connected ${mongoose.connection.host}`.cyan.bold);
  })
  .catch((error) => {
    console.log(`Server Not Connected ${error.message}`.red.underline.bold);
  });
}

export default connectDB;
