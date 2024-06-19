/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom';
import { FaRegCircleUser } from "react-icons/fa6";
import { HiOutlineSearch } from "react-icons/hi";
import { useAuth } from '../../providers/AuthProvider';

const NavBar = () => {
    const {user} = useAuth();
    // console.log(user)
    return (
        <div>
            <header className="relative flex flex-col items-center bg-red-20 px-4 py-4 sm:flex-row md:h-20">
                <div className="flex w-full flex-col justify-between overflow-hidden transition-all sm:max-h-full sm:flex-row sm:items-center">
                    {user !== null ?(
                        <>
                            <div className="relative ml-0 flex items-center justify-between rounded-md sm:ml-auto">
                                <HiOutlineSearch className="absolute sm:hidden left-2 block h-5 w-5 text-gray-400" />
                                <input 
                                    type="text" 
                                    name="search" 
                                    className="sm:hidden h-10 w-full rounded-md border border-gray-100 bg-gray-100 py-4 pr-4 pl-12 shadow-sm outline-none focus:border-blue-500" 
                                    placeholder="Search for anything" 
                                />
                            </div>
                            <ul className="mx-auto mt-4 flex space-x-6 sm:mx-10 sm:mt-0 rounded-full">
                                <li className="hidden sm:block">
                                    <button className="h-10 w-10 flex items-center justify-center rounded-xl border text-gray-300">
                                        <FaRegCircleUser className="h-6 w-6" />
                                    </button>
                                </li>
                                <li className="hidden sm:block">
                                    <button className="flex items-center justify-center text-gray-600">
                                        <span className="hidden sm:block">{user.username}</span>
                                    </button>
                                </li>
                            </ul>
                        </>
                    ) : (
                        <div className="relative ml-0 flex items-center justify-between rounded-md sm:ml-auto">
                            <Link to="/signin" className="button text-gray-400 xs:absolute sm:right-2">Login</Link>
                        </div>
                    )}
                </div>
            </header>
        </div>
    )
}

export default NavBar;
