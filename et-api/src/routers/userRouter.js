import express from "express";

const router = express.Router();

// create user router
router.post("/", (req, res, next) => {
  try {
    // get the incoming data
    const user = req.body;
    console.log(user);
    res.json({
      status: "success",
      message: "user create successfully, you can login now",
    });
  } catch (error) {
    next(error); // we are forwarding this error to our global handler error in our server.js file
  }
});

export default router;
