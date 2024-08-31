/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom';
import { CalendarSearch } from 'lucide-react';

const Events_sidebar = () => {
    return (
        <div className=''>
            <div className="sm:hidden border-b ">
                <nav className="flex space-x-4 pb-4">
                    <Link to="/creator/creator-events" className="hover:text-rose-500 whitespace-nowrap">Events</Link>
                    <Link to="/creator/creator-events/coming-events" className="hover:text-rose-500 whitespace-nowrap">Coming Events</Link>
                    <Link to="#" className="hover:text-rose-500 whitespace-nowrap">Booked Events</Link>
                    <Link to="/creator/creator-events/summary" className="hover:text-rose-500 whitespace-nowrap" aria-current="page">Summary</Link>
                </nav>
            </div>

            <div className="hidden sm:block col-span-2 px-10 relative items-start">
                <nav className="space-y-1 px-2 w-fit">
                    <Link to="/creator/creator-events"
                        className="focus:bg-gray-100 flex dark:focus:bg-gray-200 hover:bg-gray-100 dark:hover:bg-gray-200 dark:focus:text-black dark:hover:text-gray-700 rounded-md py-4 focus:outline-none">
                        <CalendarSearch />
                        Events
                    </Link>
                    <Link to="/creator/creator-events/coming-events"
                        className="focus:bg-gray-100 flex dark:focus:bg-gray-200 hover:bg-gray-100 dark:hover:bg-gray-200 dark:focus:text-black dark:hover:text-gray-700 rounded-md py-4 focus:outline-none">
                        <CalendarSearch />
                        Comming Events
                    </Link>
                    <Link className="focus:bg-gray-100 flex dark:focus:bg-gray-200 hover:bg-gray-100 dark:hover:bg-gray-200 dark:focus:text-black dark:hover:text-gray-700 rounded-md py-4 focus:outline-none">
                        <CalendarSearch />
                        Booked Events
                    </Link>
                    <Link
                        to="/creator/creator-events/summary"
                        className="focus:bg-gray-100 flex dark:focus:bg-gray-200 hover:bg-gray-100 dark:hover:bg-gray-200 dark:focus:text-black dark:hover:text-gray-700 rounded-md py-4 focus:outline-none">
                        <CalendarSearch />
                        Summary
                    </Link>
                </nav>
            </div>
        </div>
    )
}

export default Events_sidebar;