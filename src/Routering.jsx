/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import SignupForm from "./AuthForms/signupForm";
import SigninForm from "./AuthForms/signinForm";
import OtpForm from "./AuthForms/otpForm";
import UsersDashboard from "./dashboard_module/all_users-dashboard/users_dashboard";
import Forgot_password_email from "./AuthForms/forgot_password/forgot_password_email";
import Creator_home from "./dashboard_module/creator_dashboard/creator_home";
import { useAuth } from "./providers/AuthProvider";

const Routing = () => {
  const { user } = useAuth();
  return (
    <Routes>
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/signin" element={<SigninForm />} />
      <Route path="/verification" element={<OtpForm />} />
      <Route path="/forgot-password-email" element={<Forgot_password_email />} />
      
      <Route path="/" element={
        user === null ? <UsersDashboard /> : <Navigate to="/creator-home" replace />
      } />
      
      <Route path="/creator-home" element={
        user !== null ? <Creator_home /> : <Navigate to="/" replace />
      } />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default Routing;