// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';  
import SignupForm from "./AuthForms/signupForm";
import SigninForm from "./AuthForms/signinForm";
import OtpForm from "./AuthForms/otpForm";
import Home from "./dashboard_module/home";

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/signup" element={<SignupForm />} />
                <Route path="/signin" element={<SigninForm />} />
                <Route path="/verification" element={<OtpForm />} />
                <Route path="/" element={<Home/>} />
            </Routes>
        </BrowserRouter>
    );
}
export default Routing;