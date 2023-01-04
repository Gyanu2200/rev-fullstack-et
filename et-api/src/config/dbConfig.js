import mongoose from "mongoose";

//discuss about this as well/ recall and how it is connected with server
export const connectDB = () => {
  try {
    const connStr = "mongodb://localhost:27017/aug_transaction";
    mongoose.set("strictQuery", true);
    const conn = mongoose.connect(connStr);

    conn
      ? console.log("mongo connected")
      : console.log("unable to connect mongo");
  } catch (error) {
    console.log(error);
  }
};
