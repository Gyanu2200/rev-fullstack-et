import express from "express";
import { insertUser, loginUser } from "../models/user/UserModel.js";

const router = express.Router();

// create user router
router.post("/", async (req, res, next) => {
  try {
    // get the incoming data
    //call insertUser to insert into the database

    const user = await insertUser(req.body);
    console.log(user);

    if (user?._id) {
      return res.json({
        status: "success",
        message: "user create successfully, you can login now",
      });
    }
    res.json({
      status: "error",
      message: "unable to create the user. Please try again",
    });
  } catch (error) {
    console.log(error.message);
    // error.code = 500; we do not have to use it here, since we have used it on server.js

    if (error.message.includes("E11000 duplicate key error collection")) {
      error.code = 200;
      error.message =
        "There is already another user exist with the same email, please rest password to use or use different email to register.";
    }
    next(error); // we are forwarding this error to our global handler error in our server.js file
  }
});

// create login users
router.post("/login", async (req, res) => {
  try {
    const result = await loginUser(req.body);
    console.log(result);
    result?._id
      ? res.json({
          status: "success",
          message: "login sucessful",
          result: {
            _id: result._id,
            email: result.email,
            userName: result.userName,
          },
        })
      : res.json({
          status: "error",
          message: "login is not successful",
        });
  } catch (error) {
    next(error);
  }
});

export default router;
