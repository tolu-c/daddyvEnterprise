import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ArrowCircleRightIcon } from "@heroicons/react/solid";

export default class BillingInfo extends Component {
  render() {
    return (
      <div className="bg-gradient-to-br from-red-100 to-red-200 opacity-80 min-h-80 py-10 px-4">
        <h2 className="font-raleway font-bold text-2xl text-gray-800 mb-2">
          Enter Number
        </h2>

        <form method="get" className="text-center mt-2">
          <input
            type="tel"
            placeholder="234-814-127-2488"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}-[0-9]{4}"
            className="focus:outline-none focus:placeholder-gray-700 focus:text-black text-gray-600 border border-red-100 border-sm w-3/4 rounded-md px-4 py-2 placeholder-gray-400 oldstyle-nums"
            required
          />
        </form>
        <Link
          to="/data-carrier"
          className="capitalize text-blue-800 font-medium text-sm font-raleway mt-2 hover:text-gray-800"
        >
          for self?
        </Link>
        <Link to="/data-carrier">
          <div className="flex space-x-4 bg-blue-700 text-white inline-block w-28 items-center justify-center text-right rounded-full py-2 h-10 text-xl font-lato font-semibold">
            <span>Next</span> <ArrowCircleRightIcon className="h-6 w-6" />
          </div>
        </Link>
      </div>
    );
  }
}
