import React from "react";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div className="bg-gradient-to-br from-red-100 to-red-200 opacity-80 min-h-80 relative">
      <div className="h-auto bg-white shadow-3xl w-3/4 absolute top-50 left-50 transform -translate-x-1/2 -translate-y-1/2 mx-auto rounded-lg py-6 px-3">
        <h2 className="text-gray-700 text-xl font-semibold font-lato mb-6">
          Sign In
        </h2>

        <form method="get" className="mb-2">
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
            className="focus:outline-none focus:placeholder-gray-700 text-gray-600 border border-red-100 border-sm w-full rounded-md px-3 py-1 placeholder-gray-400"
            required
          />
          <p className="text-xs text-blue-600 text-right mb-6">
            <Link to="/reset-password">Forgot Password?</Link>
          </p>
          <button className="w-full justify-center bg-blue-600 cursor-pointer text-white rounded-full text-lg font-semibold uppercase font-fira py-1 shadow focus:shadow-lg hover:shadow-lg">
            Sign In
          </button>
        </form>
        <p className="text-gray-600 font-raleway text-xs capitalize mt-1">
          Not a user?{" "}
          <Link to="/sign-up" className="text-blue-600">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
