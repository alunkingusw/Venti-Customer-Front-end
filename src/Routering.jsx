/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import SignupForm from "./AuthForms/signupForm";
import SigninForm from "./AuthForms/signinForm";
import OtpForm from "./AuthForms/otpForm";
import UsersDashboard from "./dashboard_module/all_users-dashboard/users_dashboard";
import Forgot_password_email from "./AuthForms/forgot_password/forgot_password_email";
import Directive from "./AuthForms/forgot_password/directive";
import Reset_password from "./AuthForms/forgot_password/reset_password";

import Creator_home from "./dashboard_module/creator_dashboard/creator_home";
import Settings_bar from "./dashboard_module/common/mobile_settings/settings_bar";
import { useAuth } from "./providers/AuthProvider";
import Home from "./dashboard_module/common/home";
import Profile from "./dashboard_module/common/profile";
import Messages from "./dashboard_module/common/messages";
import Report_problem from "./dashboard_module/common/report_problem";
import SettingsPage from "./dashboard_module/all_users-dashboard/unique_to_users/settings/settingsLayout";
import Events from "./dashboard_module/all_users-dashboard/event/events";
import Event_readmore from "./dashboard_module/all_users-dashboard/event/event_readmore";
import Creator_uploads from "./dashboard_module/all_users-dashboard/unique_to_users/creator_uploads";

const Routing = () => {
  const { user } = useAuth();
  console.log(user)

  return (
    <Routes>
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/signin" element={<SigninForm />} />
      <Route path="/verification" element={<OtpForm />} />
      <Route path="/forgot-password-email" element={<Forgot_password_email />} />
      <Route path="/directive" element={<Directive/>} />
      <Route path="/reset-password" element={<Reset_password/>} />
      <Route path="/settings-bar" element={<Settings_bar />} />
      <Route path="/report-a-problem" element={<Report_problem/>} />

      <Route path="/" element={<UsersDashboard />}>

        {/* <Navigate to="/creator-home" replace /> */}
        <Route path="/" element={<Home />} />
        <Route path='profile' element={<Profile/>} />
        <Route path="messages" element={<Messages/>} />
        <Route path="settings-page" element={<SettingsPage/>} />
        <Route path="Events" element={<Events/>} />
        <Route path="event/:id" element={<Event_readmore/>} />
        <Route path="creator-uploads" element={<Creator_uploads/>} />
      </Route>

      <Route path="/creator-home" element={<Creator_home />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default Routing;
