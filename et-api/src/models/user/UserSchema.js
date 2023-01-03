import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      index: 1,
    },
    pin: {
      type: Number,
      min: 1000,
      max: 9999,
    },
  },
  {
    timestamps: true, // this will give that added date and updated date
  }
);

export default mongoose.model("User", userSchema); //this will converted to lowercase users, based on userSchema
