import React from "react";

function PaymentInfo() {
  let date = new Date();
  let day = date.getTime();
  return (
    <div className="bg-gradient-to-br from-red-100 to-red-200 opacity-80 min-h-80 py-3 relative">
      <div className="h-auto bg-white shadow-2xl w-3/4 absolute top-50 left-50 transform -translate-y-1/2 -translate-x-1/2 mx-auto rounded-lg py-4 px-3">
        <h2 className="text-xl font-bold text-gray-800 text-center font-lato">
          Payment Details
        </h2>

        <div className="mt-5">
          <p className="oldstyle-nums text-lg font-semibold font-raleway">
            1394274402
          </p>
          <p className="text-sm font-lato text-gray-700 capitalize">
            Access bank
          </p>
          <p className="text-sm font-lato text-gray-700 capitalize">
            Adeyemo Toluwanimi emmanuel
          </p>
          <p className="text-xs font-lato text-gray-700 capitalize mt-2">
            Order id:{" "}
            <span className="text-sm font-lato oldstyle-nums text-blue-700 p-1 font-semibold">
              {day}
            </span>
          </p>
          <p className="text-xs text-gray-500">
            Enter order id in your transaction description to confirm your order
            and enable tracking.
          </p>
        </div>
        <div className="text-right cursor-pointer font-semibold mt-3 font-lato capitalize text-base text-gray-700 hover:text-black hover:underline">
          Proceed to whatsapp
        </div>
      </div>
    </div>
  );
}

export default PaymentInfo;
