import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./index.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        toastStyle={{
          background: "#4e1c75",
          color: "#e817db",
          fontWeight: "bold",
          borderRadius: "10px",
        }}
      />
    </BrowserRouter>
  );
};

export default App;
