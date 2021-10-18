import React, { Component } from "react";
import { ChartBarIcon } from "@heroicons/react/solid";
import { UserIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="flex bg-red-500 p-4 justify-between">
        <div className="text-white">
          <Link to="/" className="cursor-pointer">
            <ChartBarIcon className="text-white h-8 w-8 ml-2" />
          </Link>
        </div>
        <div className="text-white">
          <UserIcon className="text-white h-8 w-8" />
        </div>
      </nav>
    );
  }
}
