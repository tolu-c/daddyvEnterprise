import React, { Component } from "react";
import {
  GlobeAltIcon,
  PhoneIcon,
  SwitchHorizontalIcon,
  LightBulbIcon,
} from "@heroicons/react/outline";
import { CreditCardIcon } from "@heroicons/react/solid";
import { ReactComponent as MailBulk } from '../assets/mail-bulk-solid.svg'

export default class FeatureBox extends Component {
  render() {
    return (
      <>
        <Data />
        <Airtime />
        <AirtimeToCash />
        <ElectricityBill />
        <Withdrawal />
        <BulkSms/>
      </>
    );
  }
}

function Data() {
  return (
    <div className="w-20 h-20 bg-white p-2 rounded-sm shadow-md hover:shadow-xl">
      <GlobeAltIcon className="w-6 h-6 text-gray-800" />
      <p className="font-raleway capitalize font-bold text-lg mt-3">Data</p>
    </div>
  );
}

function Airtime() {
  return (
    <div className="w-20 h-20 bg-white p-2 rounded-sm shadow-md hover:shadow-xl">
      <PhoneIcon className="w-6 h-6 text-gray-800" />
      <p className="font-raleway capitalize font-bold text-lg mt-3">Airtime</p>
    </div>
  );
}

function AirtimeToCash() {
  return (
    <div className="w-20 h-20 bg-white p-2 rounded-sm shadow-md hover:shadow-xl">
      <SwitchHorizontalIcon className="w-6 h-6 text-gray-800" />
      <p className="font-raleway capitalize font-bold text-xs mt-3">
        Airtime to cash
      </p>
    </div>
  );
}

function ElectricityBill() {
  return (
    <div className="w-20 h-20 bg-white p-2 rounded-sm shadow-md hover:shadow-xl">
      <LightBulbIcon className="w-6 h-6 text-gray-800" />
      <p className="font-raleway capitalize font-bold text-xs mt-3">
        Electricity Bill
      </p>
    </div>
  );
}

function Withdrawal() {
  return (
    <div className="w-20 h-20 bg-white p-2 rounded-sm shadow-md hover:shadow-xl">
      <CreditCardIcon className="w-6 h-6 text-gray-800" />
      <p className="font-raleway capitalize font-bold text-xs mt-3">
        Withdrawal
      </p>
    </div>
  );
}
function BulkSms() {
  return (
    <div className="w-20 h-20 bg-white p-2 rounded-sm shadow-md hover:shadow-xl">
      <MailBulk className="w-6 h-6 text-gray-800" />
      <p className="font-raleway capitalize font-bold text-xs mt-3">
        Bulk Sms
      </p>
    </div>
  );
}
