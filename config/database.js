import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);

  // If the databse is already connected, than don't connect again
  if (connected) {
    console.log("MongoDB is connected");
    return;
  }

  // Connect to mongoDB
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
  } catch (err) {
    console.log("[DB ERROR]: ", err);
  }
};

export default connectDB;
