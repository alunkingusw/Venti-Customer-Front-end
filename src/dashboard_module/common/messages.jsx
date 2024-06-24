/* eslint-disable no-unused-vars */
import React from 'react'
import { IoSend } from "react-icons/io5";

const Messages = () => {
    return (
        <div>
            <div className="min-h-screen max-w-screen-xl xl:mx-auto">
                <h1 className="border-b text-4xl font-semibold">Messages</h1>
                <div className="grid grid-cols-4 sm:grid-cols-10">
                    {/* <div className="relative my-4 w-60 items-center hidden">
                        <ul className='mr-10 border-l-2 overflow-hidden'>
                            <li className="flex cursor-pointer px-3 items-center py-2 text-xl text-slate-700">
                                {/* <SiSimpleanalytics className='m-2' /> */}
                                {/* <span>Analytics</span> */}
                            {/* </li> */}
                            {/* <li className="flex items-center cursor-pointer px-3 py-2 text-xl text-slate-700"> */}
                                {/* <FaMoneyBills className='m-2' /> */}
                                {/* <span>Billing Settings</span> */}
                            {/* </li> */}
                            {/* <li className="flex items-center cursor-pointer px-3 py-2 text-xl text-slate-700"> */}
                                {/* <FaFileInvoiceDollar className='m-2' /> */}
                                {/* <span>Invoices</span> */}
                            {/* </li> */}
                            {/* <li className="flex items-center cursor-pointer px-3 py-2 text-xl text-slate-700"> */}
                                {/* <GoBellFill className='m-2' /> */}
                                {/* <span>Notifications</span> */}
                            {/* </li> */}
                        {/* </ul> */}
                    {/* </div> */}
                    <div className="col-span-2 relative hidden sm:block dark:border-r">
                        <div className="py-4 px-2">
                            <input
                                type="text"
                                placeholder="search chats"
                                className="py-2 px-2 outline bg-gray-100 outline-1 rounded-2xl w-full"/>
                        </div>
                        <div
                            className="flex flex-row py-4 px-2 justify-center items-center" >
                            <div className="w-1/4">
                                <img
                                    src="https://img.icons8.com/?size=100&id=GoWFs1kyLbrO&format=png&color=000000"
                                    className="object-cover h-12 w-12 border rounded-full"
                                    alt=""
                                />
                            </div>
                            <div className="w-full">
                                <div className="text-lg font-semibold">Lara Abegnale</div>
                                <span className="text-gray-500">Pick me at 9:00 Am</span>
                            </div>
                        </div>
                        <div className="flex flex-row py-4 px-2 items-center">
                            <div className="w-1/4">
                                <img
                                    src="https://img.icons8.com/?size=100&id=23265&format=png&color=000000"
                                    className="object-cover h-12 w-12 border rounded-full"
                                    alt=""
                                />
                            </div>
                            <div className="w-full">
                                <div className="text-lg font-semibold">Everest Trip 2021</div>
                                <span className="text-gray-500">Hi Sam, Welcome</span>
                            </div>
                        </div>
                        <div className="flex flex-row py-4 px-2 items-center">
                            <div className="w-1/4">
                                <img
                                    src="https://img.icons8.com/?size=100&id=114900&format=png&color=000000"
                                    className="object-cover h-12 w-12 rounded-full"
                                    alt=""/>
                            </div>
                            <div className="w-full">
                                <div className="text-lg font-semibold">MERN Stack</div>
                                <span className="text-gray-500">Lusi : Thanks Everyone</span>
                            </div>
                        </div>
                        <div className="flex flex-row py-4 px-2 items-center">
                            <div className="w-1/4">
                                <img
                                    src="https://img.icons8.com/?size=100&id=114900&format=png&color=000000"
                                    className="object-cover h-12 w-12 rounded-full"
                                    alt=""/>
                            </div>
                            <div className="w-full">
                                <div className="text-lg font-semibold">MERN Stack</div>
                                <span className="text-gray-500">Lusi : Thanks Everyone</span>
                            </div>
                        </div>
                        <div className="flex flex-row py-4 px-2 items-center">
                            <div className="w-1/4">
                                <img
                                    src="https://img.icons8.com/?size=100&id=IPV289q5MXom&format=png&color=000000"
                                    className="object-cover h-12 w-12 rounded-full"
                                    alt=""
                                />
                            </div>
                            <div className="w-full">
                                <div className="text-lg font-semibold">Javascript Indonesia</div>
                                <span className="text-gray-500">Evan : some one can fix this</span>
                            </div>
                        </div>
                        <div className="flex flex-row py-4 px-2 items-center">
                            <div className="w-1/4">
                                <img
                                    src="https://img.icons8.com/?size=100&id=IPV289q5MXom&format=png&color=000000"
                                    className="object-cover h-12 w-12 rounded-full"
                                    alt=""
                                />
                            </div>
                            <div className="w-full">
                                <div className="text-lg font-semibold">Javascript Indonesia</div>
                                <span className="text-gray-500">Evan : some one can fix this</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-8 overflow-hidden rounded-xl sm:px-8 sm:shadow">
                        <section>
                            <div className="flex sticky top-0 z-50 space-x-2  border-b py-5 px-8 text-left text-sm ">
                                <img src="https://img.icons8.com/?size=100&id=GoWFs1kyLbrO&format=png&color=000000" alt="" className="border float-left inline-block h-6 w-6 sm:h-12 sm:w-12 rounded-full" />
                                <h4 className="py-1 text-left font-bold text-lg">Lara Abegnale</h4>
                            </div>
                            <div className="flex-grow px-8 pt-8 text-left text-gray-700">
                                <div className="relative mb-6 text-center">
                                    <span className="relative bg-white px-2 text-sm text-gray-600">28 June, 2022</span>
                                </div>

                                <div className="relative mb-6 text-left">
                                    <div className="text-gray-700">
                                        <div className="absolute inset-x-0 top-0">
                                            <img src="https://img.icons8.com/?size=100&id=GoWFs1kyLbrO&format=png&color=000000" alt="" className="float-right inline-block h-6 w-6 sm:h-12 sm:w-12 rounded-full" />
                                        </div>
                                        <div className="relative float-right mr-8 sm:mr-16 inline-block rounded-md bg-red-50 py-3 px-4 text-gray-700">
                                            <p className="text-sm">Hi, John</p>
                                        </div>
                                    </div>
                                    <div className="clear-both flex text-gray-700"></div>
                                </div>

                                <div className="relative mb-6 text-left">
                                    <div className="text-gray-700">
                                        <div className="absolute inset-x-0 top-0">
                                            <img src="https://img.icons8.com/?size=100&id=GoWFs1kyLbrO&format=png&color=000000" alt="" className="float-right inline-block h-6 w-6 sm:h-12 sm:w-12 rounded-full" />
                                        </div>
                                        <div className="relative float-right mr-8 sm:mr-16 inline-block rounded-md bg-red-50 py-3 px-4 text-gray-700">
                                            <p className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid, dicta.</p>
                                        </div>
                                    </div>
                                    <div className="clear-both flex text-gray-700"></div>
                                </div>

                                <div className="relative mb-6 text-center">
                                    <span className="relative bg-white px-2 text-sm text-gray-600">Yesterday</span>
                                </div>

                                <div className="relative mb-6 text-left">
                                    <div className="text-gray-700">
                                        <div className="absolute inset-x-0 top-0">
                                            <img src="https://img.icons8.com/?size=100&id=GoWFs1kyLbrO&format=png&color=000000" alt="" className="float-right inline-block h-6 w-6 sm:h-12 sm:w-12 rounded-full" />
                                        </div>
                                        <div className="relative float-right mr-8 sm:mr-16 inline-block rounded-md bg-red-50 py-3 px-4 text-gray-700">
                                            <p className="text-sm">Option congue nihil imperdiet mazim placerat facer possim.</p>
                                        </div>
                                    </div>
                                    <div className="clear-both flex text-gray-700"></div>
                                </div>

                                <div className="relative mb-6 text-left">
                                    <div className="text-gray-700">
                                        <div className="absolute top-0 left-0">
                                            <img src="https://img.icons8.com/?size=100&id=pkktBvlFnlAO&format=png&color=000000" alt="" className="float-right inline-block h-6 w-6 sm:h-12 sm:w-12 rounded-full" />
                                        </div>
                                        <div className="relative float-left ml-8 sm:ml-16 inline-block rounded-md bg-gray-200 py-3 px-4">
                                            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quia optio accusamus.</p>
                                        </div>
                                    </div>
                                    <div className="clear-both flex text-gray-700"></div>
                                </div>

                                <div className="relative mb-6 text-left">
                                    <div className="text-gray-700">
                                        <div className="absolute inset-x-0 top-0">
                                            <img src="https://img.icons8.com/?size=100&id=GoWFs1kyLbrO&format=png&color=000000" alt="" className="float-right inline-block h-6 w-6 sm:h-12 sm:w-12 rounded-full" />
                                        </div>
                                        <div className="relative float-right mr-8 sm:mr-16 inline-block rounded-md bg-red-50 py-3 px-4 text-gray-700">
                                            <p className="text-sm">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
                                        </div>
                                    </div>
                                    <div className="clear-both flex text-gray-700"></div>
                                </div>

                                <div className="relative mb-6 text-left">
                                    <div className="text-gray-700">
                                        <div className="absolute top-0 left-0">
                                            <img src="https://img.icons8.com/?size=100&id=pkktBvlFnlAO&format=png&color=000000" alt="" className="float-right inline-block h-6 w-6 sm:h-12 sm:w-12 rounded-full" />
                                        </div>
                                        <div className="relative float-left ml-8 sm:ml-16 inline-block rounded-md bg-gray-200 py-3 px-4">
                                            <div className="h-6 pt-2">
                                                <span className="rounded-full float-left mx-px h-2 w-2 bg-gray-500"></span>
                                                <span className="rounded-full float-left mx-px h-2 w-2 bg-gray-500"></span>
                                                <span className="rounded-full float-left mx-px h-2 w-2 bg-gray-500"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="clear-both flex text-gray-700"></div>
                                </div>
                                <div className="mt-4  flex items-start border-t sm:p-8 py-4 text-left  text-gray-700">
                                    <textarea cols="2" rows="2" placeholder="Your Message" 
                                    className="mr-4 overflow-hidden w-full flex-1 cursor-text resize-none outline outline-1 whitespace-pre-wrap rounded-lg text-sm py-2 px-2 sm:px-1 sm:py-0 font-normal text-gray-600 "></textarea>
                                    <button className="relative inline-flex h-10 w-auto flex-initial cursor-pointer items-center justify-center self-center  rounded-md px-6 text-center align-middle text-sm font-medium outline-none">
                                        <IoSend className='w-8 h-8 text-blue-600'/>
                                    </button>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Messages;