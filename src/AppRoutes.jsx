import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import HowItWorks from "./pages/HowItWorks";

const AppRoutes = () => {
    return (
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
    </Routes>
    );
};

export default AppRoutes;
