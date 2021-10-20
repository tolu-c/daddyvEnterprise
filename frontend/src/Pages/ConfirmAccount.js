import React, { Component } from "react";

export default class ConfirmAccount extends Component {
  render() {
    return (
      <div className="bg-gradient-to-br from-red-100 to-red-200 opacity-80 min-h-80 relative">
        <div className="h-auto bg-white shadow-3xl w-3/4 absolute top-50 left-50 transform -translate-y-1/2 -translate-x-1/2 mx-auto rounded-lg py-6 px-3">
          <h2 className="text-gray-700 text-xl font-semibold font-lato mb-6 uppercase">
            confirm your account
          </h2>

          <p className="text-gray-600 text-sm mb-4">
            Enter the 6-digits code sent to your number to confirm your account.
          </p>

          <form method="get" className="mb-2">
            <input
              type="tel"
              placeholder="123-456"
              pattern="[0-9]{3}-[0-9]{3}"
              className="focus:outline-none focus:placeholder-gray-700 text-gray-600 border border-red-100 border-sm w-full rounded-md px-3 py-1 placeholder-gray-400 mb-4 oldstyle-nums"
              required
            />
            <button className="w-full justify-center bg-blue-600 mt-4 uppercase text-white rounded-full text-lg font-medium-bold font-fira py-1 shadow focus:shadow-lg hover:shadow-lg">
              verify
            </button>
          </form>
        </div>
      </div>
    );
  }
}
