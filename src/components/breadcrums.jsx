/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { HiHome } from "react-icons/hi2";
import { IoIosArrowForward } from "react-icons/io";

const Breadcrumb = ({ homeLink, actionLink, actionPage, currentPage }) => {
    return (
        <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1 text-lg text-gray-600">
                <li>
                    <Link to={homeLink} className="block transition hover:text-gray-700">
                        <span className="sr-only">Home</span>
                        <HiHome />
                    </Link>
                </li>

                <li className="rtl:rotate-180">
                    <IoIosArrowForward />
                </li>

                <li>
                    <Link to={actionLink} className="block transition hover:text-gray-700">
                        {actionPage}
                    </Link>
                </li>

                <li className="rtl:rotate-180">
                    <IoIosArrowForward />
                </li>

                <li>
                    <span className="block text-gray-700">
                        {currentPage}
                    </span>
                </li>
            </ol>
        </nav>
    );
};

export default Breadcrumb;
