/* eslint-disable no-unused-vars */
import React from 'react'

const Notification = () => {
  return (
    <div>
      <div className="border-b pt-4 pb-8">
        <h1 className="py-2 text-2xl font-semibold">Notification settings</h1>
        <p className="font- text-slate-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="grid border-b py-6 sm:grid-cols-2">
        <div className="">
          <h2 className="text-lg font-semibold leading-4 text-slate-700">Comments</h2>
          <p className="font- text-slate-600">Lorem ipsum dolor, Alias eligendi laboriosam magni reiciendis neque.</p>
        </div>
        <div className="mt-4 flex items-center sm:justify-end">
          <div className="flex flex-col gap-3">
            <label htmlFor="push" className="relative inline-flex cursor-pointer items-center">
              <input type="checkbox" value="" id="push" className="peer sr-only" />
              <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-red-700 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none dark:bg-gray-700 "></div>
              <span className="ml-5 text-sm font-medium text-gray-900 dark:text-gray-300">Push</span>
            </label>
            <label htmlFor="email" className="relative inline-flex cursor-pointer items-center">
              <input type="checkbox" value="" id="email" className="peer sr-only" />
              <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-red-700 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none  dark:border-gray-600 dark:bg-gray-700"></div>
              <span className="ml-5 text-sm font-medium text-gray-900 dark:text-gray-300">Email</span>
            </label>
            <label htmlFor="sms" className="relative inline-flex cursor-pointer items-center">
              <input type="checkbox" value="" id="sms" className="peer sr-only" />
              <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-red-700 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none dark:border-red-600 dark:bg-gray-700 dark:peer-focus:ring-red-800"></div>
              <span className="ml-5 text-sm font-medium text-gray-900 dark:text-gray-300">SMS</span>
            </label>
          </div>
        </div>
      </div>

      <div className="grid border-b py-6 sm:grid-cols-2">
        <div className="">
          <h2 className="text-lg font-semibold leading-4 text-slate-700">Reminders</h2>
          <p className="font- text-slate-600">Lorem ipsum dolor, Alias eligendi laboriosam magni reiciendis neque.</p>
        </div>
        <div className="mt-4 flex items-center sm:justify-end">
          <div className="flex flex-col gap-3">
            <label htmlFor="rem-push" className="relative inline-flex cursor-pointer items-center">
              <input type="checkbox" value="" id="rem-push" className="peer sr-only" />
              <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-red-700 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none dark:border-red-600 dark:bg-gray-700 dark:peer-focus:ring-red-800"></div>
              <span className="ml-5 text-sm font-medium text-gray-900 dark:text-gray-300">Push</span>
            </label>
            <label htmlFor="rem-email" className="relative inline-flex cursor-pointer items-center">
              <input type="checkbox" value="" id="rem-email" className="peer sr-only" />
              <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-red-700 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none  dark:border-gray-600 dark:bg-gray-700"></div>
              <span className="ml-5 text-sm font-medium text-gray-900 dark:text-gray-300">Email</span>
            </label>
            <label htmlFor="rem-sms" className="relative inline-flex cursor-pointer items-center">
              <input type="checkbox" value="" id="rem-sms" className="peer sr-only" />
              <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-red-700 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none dark:border-gray-600 dark:bg-gray-700"></div>
              <span className="ml-5 text-sm font-medium text-gray-900 dark:text-gray-300">SMS</span>
            </label>
          </div>
        </div>
      </div>
      <div className="grid border-b py-6 sm:grid-cols-2">
        <div className="">
          <h2 className="text-lg font-semibold leading-4 text-slate-700">Updates</h2>
          <p className="font- text-slate-600">Lorem ipsum dolor, Alias eligendi laboriosam magni reiciendis neque.</p>
        </div> 
        <div className="mt-4 flex items-center sm:justify-end">
          <div className="flex flex-col gap-3">
            <label htmlFor="update-push" className="relative inline-flex cursor-pointer items-center">
              <input type="checkbox" value="" id="update-push" className="peer sr-only" />
              <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-red-700 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none dark:border-gray-600 dark:bg-gray-700"></div>
              <span className="ml-5 text-sm font-medium text-gray-900 dark:text-gray-300">Push</span>
            </label>
            <label htmlFor="update-email" className="relative inline-flex cursor-pointer items-center">
              <input type="checkbox" value="" id="update-email" className="peer sr-only" />
              <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-red-700 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none dark:border-gray-600 dark:bg-gray-700"></div>
              <span className="ml-5 text-sm font-medium text-gray-900 dark:text-gray-300">Email</span>
            </label>
            <label htmlFor="update-sms" className="relative inline-flex cursor-pointer items-center">
              <input type="checkbox" value="" id="update-sms" className="peer sr-only" />
              <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-red-700 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none dark:border-gray-600 dark:bg-gray-700"></div>
              <span className="ml-5 text-sm font-medium text-gray-900 dark:text-gray-300">SMS</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notification;