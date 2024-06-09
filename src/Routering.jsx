// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';  
import SignupForm from "./AuthForms/signupForm";
import SigninForm from "./AuthForms/signinForm";
import OtpForm from "./AuthForms/otpForm";
import Error404 from "./AuthForms/ErrorPages/Error404";
import Home from "./dashboard_module/home";
import Forgot_password_email from "./AuthForms/forgot_password/forgot_password_email";

// creator module
import Creator_home from "./dashboard_module/creator_dashboard/creator_home";

const Routing = () => {
    // const {user} = useAuth();
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/signup" element={<SignupForm />} />
                <Route path="/signin" element={<SigninForm />} />
                <Route path="/verification" element={<OtpForm />} />
                <Route path="/forgot-password-email" element={<Forgot_password_email/>} />
                <Route path="/" element={<Home/>} />
                <Route path='*' element={<Error404/>} />
            </Routes>
            <Routes>
                <Route path="/creator-dashboard" element={<Creator_home/>} />
            </Routes>
        </BrowserRouter>
    );
}
export default Routing;