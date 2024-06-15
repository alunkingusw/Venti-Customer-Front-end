/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function Modal({ closeModal }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 50);
        return () => clearTimeout(timer);
    }, []);

    const modalStyles = {
        transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
        opacity: isVisible ? 1 : 0,
        transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
            <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
                onClick={closeModal}
                style={{ opacity: isVisible ? 1 : 0 }}></div>
            <div className="relative w-full max-w-lg p-4" style={modalStyles}>
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Login
                        </h3>
                        <button onClick={closeModal} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className="p-6 md:p-5 space-y-6 flex flex-col items-center justify-center">
                        <Link
                            to="/signin"
                            className="button border rounded-full mx-auto w-4/5 block text-center py-2 px-4 transition duration-300 ease-in-out"
                        >
                            Login
                        </Link>
                        <div className="w-full flex items-center justify-center">
                            <hr className="w-full border-gray-300" />
                            <span className="px-3 text-gray-500 bg-white">or</span>
                            <hr className="w-full border-gray-300" />
                        </div>
                        <Link
                            to="/signup"
                            className="button border rounded-full mx-auto w-4/5 block text-center py-2 px-4 transition duration-300 ease-in-out"
                        >
                            Sign up
                        </Link>
                    </div>
                    {/* <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button data-modal-hide="default-modal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                        <button onClick={closeModal} className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Decline</button>
                    </div> */}
                </div>
            </div>
        </div>
    );
}