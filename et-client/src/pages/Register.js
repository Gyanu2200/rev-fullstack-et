import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import { CustomInput } from "../components/layout/CustomInput";
import { Layout } from "../components/layout/Layout";
import { registerUser } from "../helper/axiosHelper";

export const Register = () => {
  const inputFields = [
    {
      label: "Name",
      placeholder: "Sam Smith",
      required: true,
      name: "name",
      type: "text",
    },
    {
      label: "Email",
      placeholder: "your@info.com",
      required: true,
      name: "email",
      type: "email",
    },
    {
      label: "Pin",
      placeholder: "1234",
      required: true,
      name: "pin",
      type: "number",
      min: 1000,
      max: 9999,
    },
  ];

  const [registerDetails, setRegisterDetails] = useState({});

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { status, message } = await registerUser(registerDetails);
    toast[status](message);
  };

  const handleChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setRegisterDetails({
      ...registerDetails,
      [name]: value,
    });
    // console.log(registerDetails);
  };
  return (
    <Layout>
      <Form onSubmit={handleOnSubmit} className="login-page">
        <h2>Register</h2>
        <hr />
        {inputFields.map((item, i) => (
          <CustomInput key={i} onChange={handleChange} {...item} />
        ))}
        <div className="d-grid">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </Layout>
  );
};
