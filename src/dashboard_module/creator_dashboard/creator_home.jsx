/* eslint-disable no-unused-vars */
import NavBar from '../common/navBar';
import Home from '../common/home';
import Profile from '../common/profile';
import Settings from './unique_components/settings';
import Messages from '../common/messages';
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCircleUser, FaMoon, FaRegSun } from "react-icons/fa6";
import { RiCalendarEventFill, RiMessageFill, RiFileWarningLine, RiLogoutCircleRLine } from "react-icons/ri";
import { AiFillSetting, AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { IoIosAddCircle } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { useAuth } from '../../providers/AuthProvider';
import { Modal } from '../../components/modal';
import { logout } from '../../utils/helpers';

const Creator_home = () => {
    const [selectedSection, setSelectedSection] = useState('home');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const dropdownRef = useRef(null);
    const { user } = useAuth();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSidebarClick = (section) => {
        if (user === null) {
            setIsModalOpen(true);
        } else {
            setSelectedSection(section);
        }
    };

    const toggleDropdown = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        if (dropdownRef.current) {
            if (isMenuOpen) {
                dropdownRef.current.style.maxHeight = `${dropdownRef.current.scrollHeight}px`;
            } else {
                dropdownRef.current.style.maxHeight = '0px';
            }
        }
    }, [isMenuOpen]);

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const renderSection = () => {
        switch (selectedSection) {
            case 'home':
                return <Home />;
            case 'profile':
                return <Profile />;
            case 'messages':
                return <Messages />;
            case 'settings':
                return <Settings />;
            default:
                return <Home />;
        }
    };
    return (
        <div>
            <div className="bg-red-50 overflow-hidden flex h-screen">
                <div>
                    <div className="fixed z-50 md:relative border">
                        <nav ref={menuRef} className="peer-checked:w-64 left-0 z-10 flex h-screen w-0 flex-col overflow-auto xs:hidden bg-red-100 transition-all md:h-100dvh md:w-64 lg:w-72">
                            <div className="bg-red-100 mt-0 py-4 pl-10 md:mt-10">
                                <span className="">
                                    <span className=" inline-flex text-white h-8 w-8 items-center justify-center rounded-full bg-red-600 align-bottom text-2xl font-bold">V</span>
                                    <span className="text-xl">entie</span>
                                </span>
                            </div>
                            <ul className="mt-4 space-y-3 md:mt-5">
                                <li className="relative">
                                    <button
                                        onClick={() => handleSidebarClick('home')}
                                        className="focus:bg-red-50 hover:bg-red-50 flex w-full space-x-2 rounded-md px-10 py-4 text-black focus:outline-none">
                                        <span>
                                            <AiFillHome className="h-6 w-6" />
                                        </span>
                                        <span>Home</span>
                                    </button>
                                </li>
                                <li className="relative">
                                    <button className="focus:bg-red-50 hover:bg-red-50 flex w-full space-x-2 rounded-md px-10 py-4 text-black focus:outline-none">
                                        <span>
                                            <AiOutlineSearch className="h-6 w-6" />
                                        </span>
                                        <span>Search</span>
                                    </button>
                                </li>
                                <li className="relative">
                                    <button className="focus:bg-red-50 hover:bg-red-50 flex w-full space-x-2 rounded-md px-10 py-4 text-black focus:outline-none">
                                        <span>
                                            <RiCalendarEventFill className="h-6 w-6" />
                                        </span>
                                        <span>Events</span>
                                    </button>
                                </li>
                                <li className="relative">
                                    <button
                                        onClick={() => handleSidebarClick('messages')}
                                        className="focus:bg-red-50 hover:bg-red-50 flex w-full space-x-2 rounded-md px-10 py-4 text-black focus:outline-none">
                                        <span className="text-2xl">
                                            <RiMessageFill aria-hidden="true" />
                                        </span>
                                        <span>Messages</span>
                                    </button>
                                </li>
                                <li className="relative">
                                    <button className="focus:bg-red-50 hover:bg-red-50 flex w-full space-x-2 rounded-md px-10 py-4 text-black focus:outline-none">
                                        <span>
                                            <IoIosAddCircle className="h-6 w-6" />
                                        </span>
                                        <span>Post</span>
                                    </button>
                                </li>
                                <li className="relative">
                                    <button
                                        onClick={() => handleSidebarClick('settings')}
                                        className="focus:bg-red-50 hover:bg-red-50 flex w-full space-x-2 rounded-md px-10 py-4 text-black focus:outline-none">
                                        <span>
                                            <AiFillSetting className="h-6 w-6" />
                                        </span>
                                        <span>Settings</span>
                                    </button>
                                </li>
                                <li className="relative">
                                    <button
                                        onClick={() => handleSidebarClick('profile')}
                                        className="focus:bg-red-50 hover:bg-red-50 flex w-full space-x-2 rounded-md px-10 py-4 text-black focus:outline-none">
                                        <span>
                                            <FaCircleUser className="h-6 w-6" />
                                        </span>
                                        <span>Profile</span>
                                    </button>
                                </li>
                                <li className="relative">
                                    <button
                                        onClick={toggleDropdown}
                                        className="focus:bg-red-50 hover:bg-red-50 flex w-full space-x-2 rounded-md px-10 py-4 text-black focus:outline-none">
                                        <span>
                                            <IoMenu className="h-6 w-6" />
                                        </span>
                                        <span>Menu</span>
                                    </button>
                                    <ul
                                        ref={dropdownRef}
                                        className={`transition-max-height px-10 duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-screen' : 'max-h-0'
                                            }`}>
                                        <Link
                                            className="flex items-center space-x-2 w-full focus:bg-red-50 hover:bg-red-50 cursor-pointer select-none rounded-md px-3 py-2 text-start leading-tight transition-all"
                                        >
                                            <FaRegSun className="flex-shrink-0" />
                                            {/* <FaMoon /> */}
                                            <span>Switch Modes</span>
                                        </Link>
                                        <Link
                                            className="flex items-center space-x-2 w-full hover:bg-red-50 focus:bg-red-50 cursor-pointer select-none rounded-md px-3 py-2 text-start leading-tight transition-all">
                                            <RiFileWarningLine className='flex-shrink-0' />
                                            Report a problem
                                        </Link>
                                        <hr className='text-black' />
                                        <Link
                                            // onClick={() => logout()}
                                            className="flex items-center space-x-2 w-full hover:bg-red-50 focus:bg-red-50 cursor-pointer select-none rounded-md px-3 py-2 text-start leading-tight transition-all">
                                            <RiLogoutCircleRLine className='flex-shrink-0' />
                                            Logout
                                        </Link>
                                    </ul>
                                </li>
                            </ul>
                        </nav>

                        <div className="sm:hidden fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-red-100 border border-gray-200 bottom-0 left-1/2 dark:bg-gray-700 dark:border-gray-600">
                            <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
                                <button
                                    onClick={() => handleSidebarClick('home')}
                                    data-tooltip-target="tooltip-home" type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                                    <AiFillHome className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" />
                                    <span className="sr-only">Home</span>
                                </button>

                                <button data-tooltip-target="tooltip-wallet" type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                                    <RiCalendarEventFill className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" />
                                    <span className="sr-only">Events</span>
                                </button>

                                <div className="flex items-center justify-center">
                                    <button data-tooltip-target="tooltip-new" type="button" className="inline-flex items-center justify-center w-10 h-10 font-medium bg-blue-600 rounded-full hover:bg-blue-700 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">
                                        <IoIosAddCircle className="w-4 h-4 text-white" />
                                        <span className="sr-only">Post</span>
                                    </button>
                                </div>

                                <button data-tooltip-target="tooltip-settings" type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                                    <RiMessageFill className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
                                    <span className="sr-only">Messages</span>
                                </button>

                                <button data-tooltip-target="tooltip-profile" type="button"
                                    onClick={() => handleSidebarClick('profile')}
                                    className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                                    <FaCircleUser className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
                                    <span className="sr-only">Profile</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex h-full w-full flex-col">
                    <NavBar />
                    <div className="h-full overflow-y-scroll">
                        <main
                            id="dashboard-main"
                            className="h-[calc(100vh-10rem)] px-4 py-8 flex flex-col items-center"
                            style={{ overscrollBehavior: 'none' }}
                        >
                            <div className="flex flex-wrap gap-x-4 gap-y-8 justify-center items-center">
                                <section>
                                    {renderSection()}
                                </section>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <Modal closeModal={closeModal} />
            )}
        </div>
    )
}

export default Creator_home;