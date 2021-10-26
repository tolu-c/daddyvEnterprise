import React from "react";

function ChangePassword() {
  return (
    <div className="bg-gradient-to-br from-red-100 to-red-200 opacity-80 min-h-80">
      <div className="h-auto shadow-3xl w-3/4 absolute top-50 left-50 transform -translate-x-1/2 -translate-y-1/2 mx-auto rounded-lg py-6 px-3">
        <form method="get">
          <input
            type="password"
            className="focus:outline-none focus:placeholder-gray-700 text-gray-600 border border-red-100 border-sm w-full rounded-md px-3 py-1 placeholder-gray-400 mb-4"
            placeholder="New password"
            required
          />
          <input
            type="password"
            className="focus:outline-none focus:placeholder-gray-700 text-gray-600 border border-red-100 border-sm w-full rounded-md px-3 py-1 placeholder-gray-400 mb-4"
            placeholder="Confirm password"
            required
          />
          <button className="w-full justify-center bg-blue-600 cursor-pointer text-white rounded-full text-lg font-semibold uppercase font-fira py-1 shadow focus:shadow-lg hover:shadow-lg mt-6">
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;
