import React from "react";
import { ArrowCircleRightIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

function CtaBtn() {
  return (
    <Link
      to="/billing-info"
      className="bg-white text-lg text-center font-bold flex space-x-3 w-48 justify-center justify-items-center py-2 px-4 border border-red-800 text-red-800 rounded-full hover:bg-red-800 hover:text-white hover:shadow-xl"
    >
      <span>Buy Data</span>
      <ArrowCircleRightIcon className="h-auto w-5 inline-block" />
    </Link>
  );
}

export default CtaBtn;
