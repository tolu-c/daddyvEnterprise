import React, { Component } from "react";
import { ChartBarIcon } from "@heroicons/react/solid";
import { UserIcon } from "@heroicons/react/solid";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="flex bg-red-500 p-4 justify-between">
        <div className="text-white">
          <ChartBarIcon className="text-white h-8 w-8 ml-2" />
        </div>
        <div className="text-white">
          <UserIcon className="text-white h-8 w-8" />
        </div>
      </nav>
    );
  }
}
