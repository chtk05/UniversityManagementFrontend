import { Route, Routes } from "react-router-dom";
import axios from "axios";
import "./App.css";
import React from "react";
import Home from "./pages/Home";
import Register from "./pages/Register";
import toast, { Toaster } from "react-hot-toast";
import Login from "./pages/Login";
import Navbar from "./component/Navbar";
import DashBoard from "./pages/DashBoard";

axios.defaults.baseURL = "http://localhost:8080/";
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Toaster position="top-center" toastOptions={{ duration: 2500 }} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
