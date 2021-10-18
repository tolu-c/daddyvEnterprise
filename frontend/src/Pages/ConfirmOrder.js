import React, { Component } from "react";
import { ReactComponent as Bro2 } from "../assets/bro-2.svg";
import {
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
} from "@heroicons/react/outline";

export default class ConfirmOrder extends Component {
  render() {
    return (
      <div className="bg-gradient-to-br from-red-100 to-red-200 opacity-80 min-h-80 py-3 relative">
        <h2 className="text-gray-800 font-semi-bold text-2xl font-raleway capitalize py-2 ml-6">
          Does this look right{" "}
          <span className="text-gray-900 font-bold">?</span>
        </h2>
        <Bro2 className="h-auto w-full absolute top-2" />
        <div className="bg-green-500 bg-opacity-10 border border-red-100 w-5/6 p-4 absolute top-40 left-7 rounded-lg filter drop-shadow-lg backdrop-filter backdrop-blur">
          <p className="text-gray-900 text-lg font-raleway font-bold mb-4 capitalize">
            Adeyemo toluwanimi emmanuel
          </p>
          <p className="text-gray-900 text-lg font-raleway font-bold mb-4 oldstyle-nums">
            0814 127 2488
          </p>
          <p className="text-gray-900 text-lg font-raleway font-bold mb-4 uppercase">
            mtn
          </p>
          <p className="text-gray-900 text-lg font-raleway font-bold mb-4 oldstyle-nums">
            6Gb - 1 500
          </p>
        </div>
        <div className="absolute bottom-10 flex space-x-6">
          <div className="p-2 bg-blue-600 capitalize text-white font-semibold flex rounded-full w-32 cursor-pointer hover:shadow-lg text-center space-x-3 content-center">
            <ArrowCircleLeftIcon className='h-5 w-5' /> no, back
          </div>
          <div>yes</div>
        </div>
      </div>
    );
  }
}
