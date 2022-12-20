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

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`your server is ready at http://localhost:${PORT}`);
});
