/* eslint-disable no-unused-vars */
import React from 'react'
import { FaUsers } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { MdPreview } from "react-icons/md";
import { Charts } from './charts';

const analytics = () => {
    return (
        <div>
            <div className="border-b pt-4">
                <h1 className="py-2 text-2xl font-semibold">Analytics settings</h1>
                <section className="bg-blue-40 text-gray-700">
                    <div className="mx-auto flex max-w-screen-xl flex-col px-4 sm:flex-row sm:px-8 lg:px-20">
                        <div className="mt-20 flex flex-col sm:w-2/3 sm:pr-10">
                            <div className="">
                                <h1 className="block whitespace-nowrap text-center text-4xl font-black text-gray-800 sm:text-left">Growth Trends</h1>
                            </div>
                            <Charts className="my-10 hidden w-full max-w-2xl rounded-xl border-8 border-gray-200 bg-white object-contain p-8 sm:block" />
                            <p className="hidden text-gray-600 sm:block">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam vitae laborum repellendus placeat temporibus eligendi qui maiores doloremque dignissimos dolorem, veniam magni, rem officia?</p>
                        </div>
                        <div className="mt-8 flex-col items-end space-y-3 rounded-xl px-4 py-4 sm:w-1/3 md:ml-auto lg:flex">
                            <div className="bg flex w-full flex-col items-center justify-center rounded-xl px-2 py-2 text-slate-700 border border-black sm:h-56 sm:w-56">
                                <div className="p-3">
                                    <FaUsers className='h-6 w-6'/>
                                </div>
                                <div className="text-center">
                                    <p className="text-3xl font-bold">1420</p>
                                    <p className="text-sm">Number of Follewers</p>
                                </div>
                            </div>
                            <div className="bg flex w-full flex-col items-center justify-center rounded-xl px-2 py-2 text-slate-700 border border-black sm:h-56 sm:w-56">
                                <div className="p-3">
                                    <CiHeart className='h-6 w-6'/>
                                </div>
                                <div className="text-center">
                                    <p className="text-3xl font-bold">550</p>
                                    <p className="text-sm">Total Likes</p>
                                </div>
                            </div>
                            {/* <div className="bg flex w-full flex-col items-center justify-center rounded-xl px-2 py-2 border border-black text-slate-700 sm:h-56 sm:w-56">
                                <div className="p-3">
                                    <MdPreview className='h-6 w-6'/>
                                </div>
                                <div className="text-center">
                                    <p className="text-3xl font-bold">240</p>
                                    <p className="text-sm">Total Views</p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default analytics