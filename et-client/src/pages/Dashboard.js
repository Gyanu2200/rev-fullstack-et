import React, { useEffect, useState } from "react";
import { CustomTabel } from "../components/customForm/CustomTabel";
import { Layout } from "../components/layout/Layout";
import { getTransaction } from "../helper/axiosHelper";

const Dashboard = () => {
  const [transaction, setTransaction] = useState([]);
  useEffect(() => {
    fetchTransaction();
  }, []);

  const fetchTransaction = async () => {
    const { result, status, message } = await getTransaction();
    console.log(result);
    setTransaction(result);
  };

  return (
    <Layout>
      <CustomTabel transaction={transaction} />
    </Layout>
  );
};

export default Dashboard;
