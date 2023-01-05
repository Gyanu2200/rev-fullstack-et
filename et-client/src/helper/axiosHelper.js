import axios from "axios";

const rootUrl = "http://localhost:8000/api/v1/user";
const transactionUrl = "http://localhost:8000/api/v1/transaction";

const getIdFromSessionStorage = () => {
  const userObj = JSON.parse(sessionStorage.getItem("user"));
  return userObj._id;
};

export const registerUser = async (obj) => {
  const { data } = await axios.post(rootUrl, obj);
  return data;
};

export const loginUser = async (obj) => {
  const { data } = await axios.post(rootUrl + "/login", obj);
  return data;
};

//for transaction
export const getTransaction = async (obj) => {
  const userId = getIdFromSessionStorage();
  const { data } = await axios.get(transactionUrl, {
    header: {
      Authorization: userId,
    },
  });
  return data;
  console.log(data);
};
