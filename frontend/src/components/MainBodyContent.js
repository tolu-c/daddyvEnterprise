import FeatureBox from "./FeatureBox";

import React from "react";

function MainBodyContent() {
  return (
    <div className="bg-red-200 rounded-t-2xl h-64 transform -translate-x-50 translate-y-35 p-3 flex space-x-4 flex-wrap justify-center">
      <FeatureBox />
    </div>
  );
}

export default MainBodyContent;
