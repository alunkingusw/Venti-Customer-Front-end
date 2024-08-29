/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { MdOutlineAdd, MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const Creator_events = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date());

    const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();

    const prevMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
    };

    const nextMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
    };

    const renderCalendarDays = () => {
        const days = [];
        for (let i = 0; i < firstDayOfMonth; i++) {
            days.push(<div key={`empty-${i}`} className="bg-gray-100 dark:bg-gray-800"></div>);
        }
        for (let day = 1; day <= daysInMonth; day++) {
            days.push(
                <div key={day} className="relative flex flex-col bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 transition-all duration-300 hover:shadow-lg">
                    <span className="text-sm font-semibold">{day}</span>
                    <div className="flex flex-col mt-2 space-y-1">
                        <EventItem time="9:00 AM" title="Team Meeting" />
                        <EventItem time="2:00 PM" title="Client Call" confirmed />
                    </div>
                    <button className="absolute bottom-2 right-2 p-1 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-200">
                        <MdOutlineAdd className="w-4 h-4" />
                    </button>
                </div>
            );
        }
        return days;
    };

    return (
        <div className="max-w-6xl mx-auto p-6 border dark:bg-black min-h-screen">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                    {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
                </h1>
                <div className="flex space-x-4">
                    <button onClick={prevMonth} className="p-2 rounded-full bg-white dark:bg-gray-800 shadow hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
                        <MdArrowBackIos className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    </button>
                    <button onClick={nextMonth} className="p-2 rounded-full bg-white dark:bg-gray-800 shadow hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
                        <MdArrowForwardIos className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-7 gap-4 mb-4">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                    <div key={day} className="text-center font-semibold text-gray-600 dark:text-gray-400">
                        {day}
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-7 gap-4">
                {renderCalendarDays()}
            </div>
        </div>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
const EventItem = ({ time, title, confirmed = true }) => (
    <div className={`flex items-center text-xs ${confirmed ? 'text-green-600 dark:text-green-400' : 'text-gray-600 dark:text-gray-400'}`}>
        <div className={`w-2 h-2 rounded-full mr-2 ${confirmed ? 'bg-green-500' : 'border border-gray-400'}`}></div>
        <span className="font-medium">{time}</span>
        <span className="ml-2 truncate">{title}</span>
    </div>
);

export default Creator_events;