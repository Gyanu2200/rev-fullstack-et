import { Button } from "react-bootstrap";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { CustomInput } from "../components/layout/CustomInput";
import { Layout } from "../components/layout/Layout";
import { useAsyncValue } from "react-router-dom";
import { loginUser } from "../helper/axiosHelper";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const loginValidation = [
    {
      name: "email",
      type: "email",
      label: "Email",
      placeholder: "qw@gmail.com",
      required: true,
    },
    {
      name: "password",
      type: "password",
      label: "Password",
      placeholder: "1234",
      required: true,
    },
  ];

  const [logindetails, setLoginDetails] = useState({});
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { status, message, result } = await loginUser(logindetails);
    console.log(result);
    toast[status](message);
    if (status === "success") {
      sessionStorage.setItem("user", JSON.stringify(result));
      navigate("/dashboard");
    }
  };

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setLoginDetails({ ...logindetails, [name]: value });
  };
  return (
    <div>
      <Layout>
        <Form onSubmit={handleOnSubmit} className="login-page">
          {loginValidation.map((item, i) => (
            <CustomInput onChange={handleOnChange} key={i} {...item} />
          ))}
          <div className="d-grid">
            <Button variant="primary" type="submit">
              Login
            </Button>
          </div>
        </Form>
      </Layout>
    </div>
  );
};
