import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./stylesheets/global.css";
import Important from "./pages/Important.jsx";
const wrapper = document.querySelector(".root");
ReactDOM.createRoot(wrapper).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Important />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
