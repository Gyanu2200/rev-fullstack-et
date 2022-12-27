import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";

const app = express();

const PORT = process.env.PORT || 8000;

//middlewares - the code that we run during the request, response lifecycle
app.use(morgan("dev")); // logs all the incoming req information
// app.use(helmet()) // setting default security headers to protect some attacks
// app.use(cors()); // allow cross origin resources
app.use(express.json()); //convert incoming data in the req.body

//mongoDb connection
import { connectDB } from "./src/config/dbConfig.js";
connectDB();

// routers
import userRouter from "./src/routers/userRouter.js";
app.use("/api/v1/user", userRouter);

app.use("*", (req, res) => {
  //need to understand about this line "*"
  res.json({
    message: "you are in the wrong place, go back !",
  });
});

// global error handler
app.use((error, req, res, next) => {
  const code = error.code || 500;
  res.status(code).json({
    status: "error",
    message: error.message,
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`your server is ready at http://localhost:${PORT}`);
});
