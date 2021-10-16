import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SignUp extends Component {
  render() {
    return (
      <div className="bg-gradient-to-br from-red-100 to-red-200 opacity-80 min-h-80">
        <div className="h-auto bg-white shadow-3xl w-3/4 transform translate-y-24 mx-auto rounded-lg py-6 px-3">
          <h2 className="text-gray-700 text-xl font-semibold font-lato mb-6">
            Create an Account
          </h2>

          <form method="get" className="mb-2">
            <input
              type="text"
              placeholder="Full Name"
              className="focus:outline-none focus:placeholder-gray-700 text-gray-600 border border-red-100 border-sm w-full rounded-md px-3 py-1 placeholder-gray-400 mb-4"
              required
            />
            <input
              type="tel"
              placeholder="+234-000-000-0000"
              pattern="[+]{1}[0-9]{3}-[0-9]{3}-[0-9]{3}-[0-9]{4}"
              className="focus:outline-none focus:placeholder-gray-700 text-gray-600 border border-red-100 border-sm w-full rounded-md px-3 py-1 placeholder-gray-400 mb-4 oldstyle-nums"
              required
            />
            <input
              type="Password"
              placeholder="Password"
              className="focus:outline-none focus:placeholder-gray-700 text-gray-600 border border-red-100 border-sm w-full rounded-md px-3 py-1 placeholder-gray-400 mb-4"
              required
            />
            <button className="w-full justify-center bg-blue-600 text-white rounded-full text-lg font-semi-bold uppercase font-fira py-1 shadow focus:shadow-lg hover:shadow-lg">
              Sign up
            </button>
          </form>
          <p className="text-gray-600 font-raleway text-xs capitalize mt-1">
            Already a user?{" "}
            <Link to="/sign-in" className="text-blue-600">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    );
  }
}
