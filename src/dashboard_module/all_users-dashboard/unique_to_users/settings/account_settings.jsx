/* eslint-disable no-unused-vars */
import React from 'react';
import { IoIosArrowForward } from "react-icons/io";

const AccountSettings = () => {
    return (
        <div>
            <div className="block pl-4 pr-4 pt-4 border border-gray-200 rounded-lg">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Account Settings
                </h5>
                <p className="font-normal text-gray-700 border-b dark:text-white">
                    Stay updated with the latest discussions and feedback from the community.
                </p>
                <div className="py-10  grid w-full grid-cols-1 gap-2">
                    <button className="relative w-full hover:bg-red-50 focus:bg-red-100">
                        <label className="flex cursor-pointer flex-row justify-between items-center rounded-lg border border-gray-300 p-4 peer-checked:border-4 ">
                            <span className="mt-2 text-xl">Change account to Business</span>
                            <IoIosArrowForward className='font-bold text-2xl'/>
                        </label>
                    </button>
                    <button className="relative w-full hover:bg-red-50 focus:bg-red-100">
                        <label className="flex cursor-pointer flex-row justify-between items-center rounded-lg border border-gray-300 p-4 peer-checked:border-4 ">
                            <span className="mt-2 text-xl">Change account to Creator</span>
                            <IoIosArrowForward className='font-bold text-2xl'/>
                        </label>
                    </button>
                    <button className="relative w-full hover:bg-red-50 focus:bg-red-100">
                        <label className="flex cursor-pointer flex-row justify-between items-center rounded-lg border border-gray-300 p-4 peer-checked:border-4 ">
                            <span className="mt-2 text-xl">Change account to Professional</span>
                            <IoIosArrowForward className='font-bold text-2xl'/>
                        </label>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AccountSettings;
