import React, { Component } from "react";
import { ReactComponent as Bro } from "../assets/bro.svg";
import { DotsVerticalIcon } from "@heroicons/react/solid";

import CtaBtn from "./CtaBtn";
import MainBodyContent from './MainBodyContent'

export default class MainBody extends Component {
  render() {
    return (
      <div className="bg-gradient-to-br from-red-100 to-red-200 opacity-80 p-4 text-gray-600 min-h-90 text-3xl capitalize relative">
        <DotsVerticalIcon className="text-gray-50 opacity-60 h-6 absolute top-0 right-0" />
        <div className="flex flex-col">
          <span className="text-5xl font-light font-lato">Be</span>
          <span className="font-bold text-lg font-lato">Like Bro</span>
          <p className="font-normal text-sm normal-case font-raleway">
            Stay on top of your world, Stay online.
          </p>
          <CtaBtn />
        </div>
        <Bro className="absolute top-6 transform rotate-12" />
        <MainBodyContent/>
      </div>
    );
  }
}
