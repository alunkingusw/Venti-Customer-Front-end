/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import { GoBellFill } from "react-icons/go";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { FaMoneyBills } from "react-icons/fa6"
import { SiSimpleanalytics } from "react-icons/si";
import { Link } from 'react-router-dom';
import Notification from '../../common/notification';
import Billing from './billing';
import Analytics from './analytics';
import Invoices from './invoices';

const Settings = () => {
  const [selectedSection, setSelectedSection] = useState('home');

  const renderSection = () => {
    switch (selectedSection) {
        case 'analytics':
            return <Analytics/>;
        case 'billing':
            return <Billing />;
        case 'invoices':
            return <Invoices />;
        case 'notifications':
            return <Notification />;
        default:
            return <Analytics />;
    }
};
  return (
    <div>
      <div className="min-h-screen max-w-screen-xl overflow-hidden xl:mx-auto">
        <h1 className="border-b text-4xl font-semibold">Settings</h1>
        <div className="grid grid-cols-4 sm:grid-cols-10">

          <div className="relative my-4 w-60 items-center sm:hidden">
            <ul className='mr-10 border-l-2 overflow-hidden'>
              <li className="flex cursor-pointer px-3 items-center py-2 text-xl text-slate-700">
                <SiSimpleanalytics className='m-2' />
                <span>Analytics</span>
              </li>
              <li className="flex items-center cursor-pointer px-3 py-2 text-xl text-slate-700">
                <FaMoneyBills className='m-2' />
                <span>Billing Settings</span>
              </li>
              <li className="flex items-center cursor-pointer px-3 py-2 text-xl text-slate-700">
                <FaFileInvoiceDollar className='m-2' />
                <span>Invoices</span>
              </li>
              <li className="flex items-center cursor-pointer px-3 py-2 text-xl text-slate-700">
                <GoBellFill className='m-2' />
                <span>Notifications</span>
              </li>
            </ul>
          </div>
          <div className="col-span-2 relative hidden sm:block">
            <ul>
              <li className="mt-5 cursor-pointer font-semibold transition ">
                <button 
                onClick={()=>setSelectedSection('analytics')}
                className='px-2 py-2 border-l-2 border-transparent hover:border-l-red-700 focus:border-red-700 hover:text-gray-500'>Analytics</button>
              </li>
              <li className="mt-5 cursor-pointer font-semibold ">
                <button 
                onClick={()=>setSelectedSection('billing')}
                className='border-l-2 border-transparent px-2 py-2 transition hover:border-l-red-700 focus:border-red-700 hover:text-gray-500'>Billing
                </button>
              </li>
              {/* <li className="mt-5 cursor-pointer font-semibold ">
                <button 
                onClick={()=>setSelectedSection('invoices')}
                className='border-l-2 border-transparent px-2 py-2 transition hover:border-l-red-700 focus:border-red-700 hover:text-gray-500'>Invoices</button>
              </li> */}
              <li className="mt-5 cursor-pointer font-semibold ">
                <button 
                onClick={()=>setSelectedSection('notifications')}
                className='border-l-2 border-transparent px-2 py-2 transition hover:border-l-red-700 focus:border-red-700 hover:text-gray-500'>Notifications</button>
              </li>
            </ul>
          </div>

          <div className="col-span-8 overflow-hidden rounded-xl sm:bg-red-50 sm:px-8 sm:shadow">
            <section>
              {renderSection()}
            </section>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Settings;