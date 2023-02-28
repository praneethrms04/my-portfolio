import React from "react";
import About from "../pages/About";
import Home from "../pages/Home"
import Projects from "../pages/Projects";
import { Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default AppRoutes;
