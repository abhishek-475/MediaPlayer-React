import React from "react";
import "./App.css";
import "./bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

import Home from "./assets/pages/Home";
import Landing from "./assets/pages/Landing";
import History from "./assets/pages/History";
import Login from "./assets/pages/Login";
import Register from "./assets/pages/Register";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/his" element={<History />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reg" element={<Register />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
