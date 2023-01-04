import TransactionSchema from "./TransactionSchema.js";

export const postTransaction = (obj) => {
  return TransactionSchema(obj).save();
};

export const getTransaction = (obj) => {
  return TransactionSchema.find();
};

export const deleteTransaction = (obj) => {
  return TransactionSchema.deleteMany();
};
