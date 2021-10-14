import React, { Component } from "react";

import Navbar from "../components/Navbar";
import MainBody from "../components/MainBody";
import Footer from "../components/Footer";

export default class HomePage extends Component {
  render() {
    return (
      <>
        <Navbar />
        <MainBody />
        <Footer />
      </>
    );
  }
}
