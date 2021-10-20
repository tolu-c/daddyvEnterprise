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
            <ChartBarIcon className="h-8 w-8 ml-2" />
          </Link>
        </div>
        <div className="text-white">
          <Link to="/sign-up" className="cursor-pointer">
            <UserIcon className="h-8 w-8" />
          </Link>
        </div>
      </nav>
    );
  }
}
