import mongoose from "mongoose";

export const connectDB = () => {
  try {
    const connStr = "mongodb://localhost:27017/aug_transaction";
    const conn = mongoose.connect(connStr);

    conn
      ? console.log("mongo connected")
      : console.log("unable to connect mongo");
  } catch (error) {
    console.log(error);
  }
};
