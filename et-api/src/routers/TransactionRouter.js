import express from "express";
import {
  getTransaction,
  postTransaction,
} from "../models/transaction/TransactionModel.js";

const transRouter = express.Router();

transRouter.post("/", async (req, res, next) => {
  try {
    const { authorization } = req.header;
    const result = await postTransaction({
      ...req.body,
      userId: authorization,
    });
    console.log(result);
    console.log(authorization);
  } catch (error) {
    next(error);
  }
});

transRouter.get("/", async (req, res, next) => {
  try {
    const { authorization } = req.header;
    const result = await getTransaction({ userId: authorization });
    result?._id
      ? res.json({
          status: "success",
          message: "transaction successfully retrive",
          result,
        })
      : res.json({
          status: "error",
          message: "transaction unsuccessfull",
        });
    console.log(result);
  } catch (error) {
    next(error);
  }
});
export default transRouter;
