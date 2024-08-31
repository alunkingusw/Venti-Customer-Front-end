/* eslint-disable no-unused-vars */
import React from 'react'

const Summary = () => {
    return (
        <div className='sm:border-l'>
            <div className="pt-4 pl-2">
                <h1 className="py-2 text-2xl font-semibold">Accounts Summary</h1>
                <p>Explore up and Coming events you&apos;re supposed to attend.</p>
            </div>
            <hr className="mt-1 mb-8" />
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <dl className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4">
                    <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                        <dt className="order-last text-lg font-medium text-gray-500">Total Tickets Sold</dt>

                        <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">$4.8m</dd>
                    </div>

                    <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                        <dt className="order-last text-lg font-medium text-gray-500">Official Addons</dt>

                        <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">24</dd>
                    </div>

                    <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                        <dt className="order-last text-lg font-medium text-gray-500">Total Addons</dt>

                        <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">86</dd>
                    </div>

                    <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                        <dt className="order-last text-lg font-medium text-gray-500">Downloads</dt>

                        <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">86k</dd>
                    </div>
                </dl>
            </div>
        </div>
    )
}

export default Summary;