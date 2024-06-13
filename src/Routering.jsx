/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route } from 'react-router-dom';
import SignupForm from "./AuthForms/signupForm";
import SigninForm from "./AuthForms/signinForm";
import OtpForm from "./AuthForms/otpForm";
import UsersDashboard from "./dashboard_module/all_users-dashboard/users_dashboard";
import Forgot_password_email from "./AuthForms/forgot_password/forgot_password_email";

// creator module
import Creator_home from "./dashboard_module/creator_dashboard/creator_home";
import { useAuth } from "./providers/AuthProvider";

const Routing = () => {
  const { user } = useAuth();
  // console.log(user);
  return (
    <Routes>
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/signin" element={<SigninForm />} />
      <Route path="/verification" element={<OtpForm />} />
      <Route path="/forgot-password-email" element={<Forgot_password_email />} />
      {/* {user === null ? ( */}
        <Route path="/" element={<UsersDashboard />} />
      {/* ) : ( */}
        <Route path="/creator-home" element={<Creator_home />} />
      {/* )} */}
    </Routes>
  );
};

export default Routing;
