/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import SignupForm from "./AuthForms/signupForm";
import SigninForm from "./AuthForms/signinForm";
import OtpForm from "./AuthForms/otpForm";
import UsersDashboard from "./dashboard_module/all_users-dashboard/users_dashboard";
import Forgot_password_email from "./AuthForms/forgot_password/forgot_password_email";
import Creator_home from "./dashboard_module/creator_dashboard/creator_home";
import Settings_bar from "./dashboard_module/common/mobile_settings/settings_bar";
import { useAuth } from "./providers/AuthProvider";
// import Sidebar from "./dashboard_module/common/sidebar";
import Home from "./dashboard_module/common/home";
import Profile from "./dashboard_module/common/profile";
import Messages from "./dashboard_module/common/messages";

const Routing = () => {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/signin" element={<SigninForm />} />
      <Route path="/verification" element={<OtpForm />} />
      <Route path="/forgot-password-email" element={<Forgot_password_email />} />
      <Route path="/settings-bar" element={<Settings_bar />} />

      <Route path="/" element={user === null || user.userType === 0 ? (
        <>
          <UsersDashboard />
        </>

      ) : (
        <Navigate to="/creator-home" replace />
      )
      } >
        <Route path="/" element={<Home />} />
        <Route path='/profile' element={<Profile/>} />
        <Route path="/messages" element={<Messages/>} />
      </Route>

      <Route path="/creator-home" element={
        user !== null && user.userType === 1 ? (
          <Creator_home />
        ) : (
          <Navigate to="/" replace />
        )
      } />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default Routing;
