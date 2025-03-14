import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import HowItWorks from "./pages/HowItWorks";
import ReferEarn from "./pages/ReferEarn";

const AppRoutes = () => {
    return (
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path ="/refer-earn" element={<ReferEarn />} />
    </Routes>
    );
};

export default AppRoutes;
