import React from "react";
import "./App.css";
import "./bootstrap.min.css";
import Home from "./assets/pages/Home";
import Landing from "./assets/pages/Landing";
import History from "./assets/pages/History";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/his' element={<History />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
