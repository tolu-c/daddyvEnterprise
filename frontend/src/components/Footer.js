import React, { Component } from "react";
import { ReactComponent as CopyRight } from "../assets/copyright-regular.svg";

export default class Footer extends Component {
  render() {
    let date = new Date();
    let currentYear = date.getFullYear();

    return (
      <footer className="bg-gray-700 text-center text-sm text-gray-200 py-5 flex items-center justify-center">
        <CopyRight className='h-4 w-4 text-gray-200 inline-block justify-center mr-2' />
        DaddyV Enterprise, {currentYear}.
      </footer>
    );
  }
}
