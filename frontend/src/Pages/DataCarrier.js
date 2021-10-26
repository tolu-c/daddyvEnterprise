import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowCircleRightIcon } from "@heroicons/react/solid";

import data from "../data";

function DataCarrier() {
  const dataInfo = data;
  // console.log(dataInfo[0]);
  // console.log(bundles[0].bundle.map((b) => b.size));
  console.log(dataInfo[0].bundle.map((b) => b.size));

  const [selectDataCarrier, setSelectDataCarrier] = useState(dataInfo);

  console.log(selectDataCarrier)
  return (
    <div className="bg-gradient-to-br from-red-100 to-red-200 opacity-80 min-h-80 py-3 relative">
      <div className="h-auto bg-white shadow-2xl w-3/4 absolute top-50 left-50 transform -translate-y-1/2 -translate-x-1/2 mx-auto rounded-lg py-4 px-3">
        <h2 className="text-xl font-bold text-gray-800 capitalize font-raleway">
          Select carrier - {selectDataCarrier.network}{" "}
        </h2>
        <form>
          <select className="appearance-none uppercase border-none w-1/2 bg-green-600 text-center focus:outline-none hover:bg-gray-800">
            <option className="uppercase font-medium text-md text-gray-700 hover:bg-gray-200 hover:text-gray-700">
              Mtn
            </option>
            <option className="uppercase font-medium text-md text-gray-700">
              airtel
            </option>
            <option className="uppercase font-medium text-md text-gray-700">
              glo
            </option>
            <option className="uppercase font-medium text-md text-gray-700">
              9mobile
            </option>
          </select>
        </form>
        <Link to="/data-carrier/bundle">
          <button className="flex space-x-4 mt-4 bg-blue-700 text-white inline-block w-28 items-center justify-center text-right rounded-full py-2 h-10 text-xl font-lato font-semibold">
            <span>Next</span> <ArrowCircleRightIcon className="h-6 w-6" />
          </button>
        </Link>

        <div>
          {selectDataCarrier.map((network) => (
            <p>{network.network}</p>
          ))}
        </div>

        <div>
          {selectDataCarrier.map((bundle) => (
            <p>
              {bundle.bundle.map((b) => (
                <span>
                  {b.size} - {b.price}{" "}
                </span>
              ))}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DataCarrier;
