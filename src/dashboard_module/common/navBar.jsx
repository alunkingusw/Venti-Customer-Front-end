/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaRegCircleUser } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
import { HiOutlineSearch } from "react-icons/hi";
import { useAuth } from '../../providers/AuthProvider';
import { Modal } from '../../components/modal';

const NavBar = () => {
    const { user } = useAuth();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const OpenModal =()=>{
        setIsModalOpen(true);
    }
    return (
        <div>
            <header className="relative flex flex-col items-center bg-red-20 px-4 py-4 sm:flex-row md:h-20">
                <div className="flex w-full flex-col justify-between overflow-hidden transition-all sm:max-h-full sm:flex-row sm:items-center">
                    {user !== null ? (
                        <>
                            <div className="relative ml-0 flex items-center justify-between rounded-md sm:ml-auto">
                                <HiOutlineSearch className="absolute sm:hidden left-2 block h-5 w-5 text-gray-400" />
                                <input
                                    type="text"
                                    name="search"
                                    className="sm:hidden h-10 w-full rounded-md border border-gray-100 bg-gray-100 py-4 pr-4 pl-12 shadow-sm outline-none focus:border-blue-500"
                                    placeholder="Search for anything"
                                />
                                <Link
                                to="/settings-page"
                                 className='sm:hidden text-gray-500 hover:text-blue-500 ml-3'>
                                    <IoSettings className='h-6 w-6' />
                                </Link>
                            </div>
                            <ul className="mx-auto mt-4 flex space-x-6 sm:mx-10 sm:mt-0 rounded-full">
                                <li className="hidden sm:block">
                                    <button className="h-10 w-10 flex items-center justify-center rounded-xl border text-gray-300 dark:text-gray-100">
                                        <FaRegCircleUser className="h-6 w-6" />
                                    </button>
                                </li>
                                <li className="hidden sm:block">
                                    <button className="flex items-center justify-center text-gray-600 dark:text-gray-100">
                                        <span className="hidden sm:block">{user.username}</span>
                                    </button>
                                </li>
                            </ul>
                        </>
                    ) : (
                        <>
                            <div className="relative ml-0 flex items-center justify-between rounded-md sm:ml-auto">
                                <HiOutlineSearch className="absolute sm:hidden left-2 block h-5 w-5 text-gray-400" />
                                <input
                                    type="text"
                                    name="search"
                                    className="sm:hidden h-10 w-full rounded-md border border-gray-100 bg-gray-100 py-4 pr-4 pl-12 shadow-sm outline-none focus:border-blue-500"
                                    placeholder="Search for anything"
                                />
                                <Link to="#"
                                className='text-gray-500 dark:text-gray-50 cursor-pointer hover:bg-gray-200 dark:hover:text-white ml-3'>
                                    <IoSettings className='sm:hidden h-6 w-6' />
                                </Link>
                            </div>
                            <div className="relative w-full">
                                <ul className="relative right-0 flex items-center justify-end sm:mr-0 sm:mt-0 rounded-full">
                                    <li className="hidden sm:block">
                                        <Link to="/signin" className="button text-gray-400 right-0">Login</Link>
                                    </li>
                                </ul>
                            </div>
                        </>
                    )}
                </div>
            </header>
        </div>
    )
}

export default NavBar;
