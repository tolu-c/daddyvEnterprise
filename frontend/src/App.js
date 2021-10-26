import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";

import "./App.css";

// pages
import HomePage from "./Pages/HomePage";
import BillingInfo from "./Pages/BillingInfo";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import ConfirmAccount from "./Pages/ConfirmAccount";
import ConfirmOrder from "./Pages/ConfirmOrder";
import PaymentInfo from "./Pages/PaymentInfo";
import DataCarrier from "./Pages/DataCarrier";
import UserDashboard from './Pages/UserDashboard'
import ResetPassword from './Pages/ResetPassword'
import ChangePassword from './Pages/ChangePassword'

// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" component={HomePage} exact />
      <Route path="/billing-info" component={BillingInfo} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/sign-in" component={SignIn} />
      <Route path="/confirm-order" component={ConfirmOrder} />
      <Route path="/confirm-account" component={ConfirmAccount} />
      <Route path="/payment" component={PaymentInfo} />
      <Route path="/data-carrier" component={DataCarrier} />
      <Route path="/dashboard" component={UserDashboard} />
      <Route path="/change-password" component={ChangePassword} />
      <Route path="/reset-password" component={ResetPassword} />
      <Footer />
    </Router>
  );
}

export default App;
