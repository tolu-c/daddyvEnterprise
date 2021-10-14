import React, { Component } from "react";
import { ArrowCircleRightIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

export default class CtaBtn extends Component {
  render() {
    return (
      <Link
        to="/billing-info"
        className="bg-white text-lg text-center px-6 py-3 font-bold content-center border border-red-800 text-red-800 rounded-full hover:bg-red-800 hover:text-white"
      >
        Buy Data <ArrowCircleRightIcon className="h-auto w-5 inline text-center justify-center" />
      </Link>
    );
  }
}
