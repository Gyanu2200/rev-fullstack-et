import "./App.css";
import { ToastContainer, toast } from "react-toastify";

import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
