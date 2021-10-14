import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./Pages/HomePage";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route to="/" component={HomePage} exact />
        {/* <div className="container">
          <HomePage />
        </div> */}
      </BrowserRouter>
    );
  }
}
