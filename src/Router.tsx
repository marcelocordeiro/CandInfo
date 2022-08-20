import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Candidates from "./pages/Candidates";
import Profile from "./pages/Profile";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="candidatos" element={<Candidates />} />
        <Route path="candidatos/:id" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
