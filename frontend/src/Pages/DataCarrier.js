import React, { Component } from "react";

export default class DataCarrier extends Component {
  render() {
    return (
      <div className="bg-gradient-to-br from-red-100 to-red-200 opacity-80 min-h-80 py-3 relative">
        <div className="h-auto bg-white shadow-2xl w-3/4 absolute top-50 left-50 transform -translate-y-1/2 -translate-x-1/2 mx-auto rounded-lg py-4 px-3">
          <h2 className="text-xl font-bold text-gray-800 capitalize font-raleway">
            Select carrier
          </h2>
          <form>
              <select className='appearance-none uppercase border-none'>
                  <option className='uppercase font-medium text-md text-gray-700'>Mtn</option>
                  <option className='uppercase font-medium text-md text-gray-700'>airtel</option>
                  <option className='uppercase font-medium text-md text-gray-700'>glo</option>
                  <option className='uppercase font-medium text-md text-gray-700'>9mobile</option>
              </select>
          </form>
        </div>
      </div>
    );
  }
}
