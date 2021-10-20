import React, { Component } from "react";
import {
    ArrowCircleLeftIcon,
    ArrowCircleRightIcon,
  } from "@heroicons/react/outline";
  import { Link } from "react-router-dom";

export default class ConOrderBtn extends Component {
  render() {
    return (
      <div className="absolute bottom-10 flex space-x-8 ml-8">
        <Link to="/billing-info">
          <div className="p-2 px-3 bg-blue-800 z-10 capitalize text-white font-semibold flex justify-around items-center rounded-full w-32 cursor-pointer hover:shadow-lg text-center space-x-3">
            <ArrowCircleLeftIcon className="h-5 w-5" /> no, back
          </div>
        </Link>
        <Link to="/payment">
          <div className="p-2 px-auto bg-green-800 z-10 capitalize text-white font-semibold flex justify-around items-center rounded-full w-32 cursor-pointer hover:shadow-lg text-center space-x-3">
            yes, proceed
            <ArrowCircleRightIcon className="h-5 w-5" />
          </div>
        </Link>
      </div>
    );
  }
}
