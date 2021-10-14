import React, { Component } from "react";
import { ReactComponent as Bro } from "../assets/bro.svg";
import { DotsVerticalIcon } from "@heroicons/react/solid";

import CtaBtn from './CtaBtn'

export default class MainBody extends Component {
  render() {
    return (
      <div className="bg-gradient-to-br from-red-100 to-red-200 opacity-80 h-auto p-4 text-gray-600 text-3xl uppercase">
        <DotsVerticalIcon className="text-gray-50 opacity-60 h-6" />
        be like bro
        <Bro />
        <CtaBtn />
      </div>
    );
  }
}
