/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom';
import { CalendarSearch } from 'lucide-react';
import { MdOutlineEventRepeat, MdEventAvailable, MdEvent, MdOutlineSummarize } from "react-icons/md"

const Events_sidebar = () => {
    return (
        <div className=''>
            <div className="p-2 items-center border-b">
                <nav className="flex sm:flex-nowrap space-x-4">
                    <Link to="/creator/creator-events" className="hover:text-rose-500 whitespace-nowrap">Events</Link>
                    <Link to="/creator/creator-events/coming-events" className="hover:text-rose-500 whitespace-nowrap">Coming Events</Link>
                    <Link to="#" className="hover:text-rose-500 whitespace-nowrap">Booked Events</Link>
                    <Link to="/creator/creator-events/summary" className="hover:text-rose-500 whitespace-nowrap" aria-current="page">Summary</Link>
                </nav>
            </div>

            <div className="hidden sm:block col-span-2 py-4 relative items-start">
                <nav className="space-y-1 px-2 w-fit">
                    <Link to="/creator/creator-events"
                        className="focus:bg-gray-100 mt-5 cursor-pointer py-2 font-semibold transition flex dark:focus:bg-gray-200 hover:bg-gray-100 dark:hover:bg-gray-200 dark:focus:text-black dark:hover:text-gray-700 rounded-md focus:outline-none">
                        <MdEvent className='h-6 w-6' />
                        Events
                    </Link>
                    <Link to="/creator/creator-events/coming-events"
                        className="focus:bg-gray-100 mt-5 cursor-pointer py-2 font-semibold transition flex dark:focus:bg-gray-200 hover:bg-gray-100 dark:hover:bg-gray-200 dark:focus:text-black dark:hover:text-gray-700 rounded-md focus:outline-none">
                        <MdOutlineEventRepeat className='h-6 w-6' />
                        Comming Events
                    </Link>
                    <Link className="focus:bg-gray-100 mt-5 cursor-pointer py-2 font-semibold transition flex dark:focus:bg-gray-200 hover:bg-gray-100 dark:hover:bg-gray-200 dark:focus:text-black dark:hover:text-gray-700 rounded-md focus:outline-none">
                        <MdEventAvailable className='h-6 w-6' />
                        Booked Events
                    </Link>
                    <Link
                        to="/creator/creator-events/summary"
                        className="focus:bg-gray-100 mt-5 cursor-pointer font-semibold transition flex dark:focus:bg-gray-200 hover:bg-gray-100 dark:hover:bg-gray-200 dark:focus:text-black dark:hover:text-gray-700 rounded-md py-4 focus:outline-none">
                        <MdOutlineSummarize className='h-6 w-6' />
                        Summary
                    </Link>
                </nav>
            </div>
        </div>
    )
}

export default Events_sidebar;