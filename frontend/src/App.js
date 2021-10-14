import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

// pages
import HomePage from "./Pages/HomePage";
import BillingInfo from "./Pages/BillingInfo";

// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Route path="/" component={HomePage} exact />
        <Route path="/billing-info" component={BillingInfo} />
        <Footer />
      </Router>
    );
  }
}
