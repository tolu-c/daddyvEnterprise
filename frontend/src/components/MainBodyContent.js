import React, { Component } from "react";
import FeatureBox from "./FeatureBox";

export default class MainBodyContent extends Component {
  render() {
    return (
      <div className="bg-red-200 rounded-t-2xl h-64 transform -translate-x-50 translate-y-35 p-3 flex space-x-4 flex-wrap justify-center">
        <FeatureBox />
      </div>
    );
  }
}
