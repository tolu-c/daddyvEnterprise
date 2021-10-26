import React from "react";
import { Link } from "react-router-dom";

function ResetPassword() {
  return (
    <div className="bg-gradient-to-br from-red-100 to-red-200 opacity-80 min-h-80">
      <div className="h-auto shadow-3xl w-3/4 absolute top-50 left-50 transform -translate-x-1/2 -translate-y-1/2 mx-auto rounded-lg py-6 px-3">
        <h2 className="text-gray-700 text-xl font-semibold font-lato mb-4">
          Reset Password
        </h2>
        <p className="text-sm text-gray-600 mb-2">
          A verification code has been sent to the phone number used to create
          your account.
        </p>

        <form method="get" className="">
          <input
            type="tel"
            placeholder="000-0000"
            pattern="[0-9]{3}-[0-9]{3}"
            className="focus:outline-none focus:placeholder-gray-700 text-gray-600 border border-red-100 border-sm w-full rounded-md px-3 py-1 placeholder-gray-400 mb-4 oldstyle-nums relative"
            required
          />
          <div className="text-xs font-semibold text-blue-900 rounded-md inline-block p-2 align-right absolute right-4">
            Resend Code
          </div>
          <Link to="/change-password">
            <div className="w-full text-center bg-blue-600 cursor-pointer text-white rounded-full text-lg font-semibold uppercase font-fira py-1 shadow focus:shadow-lg hover:shadow-lg">
              Reset Password
            </div>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
