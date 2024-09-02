/* eslint-disable no-unused-vars */
import React from 'react'

const Coming_events = () => {
  return (
    <div className='sm:border-l min-h-full'>
      <div className="pt-4 pl-2">
        <h1 className="py-2 text-2xl font-semibold">Up-Coming Events</h1>
        <p>Explore up and Coming events you&apos;re supposed to attend.</p>
      </div>
      <hr className="mt-4 mb-8" />
      <div className="sm:hidden block ">
        <div className="max-w-xl mx-auto p-8">
          <div className="flow-root">
            <ul className="-mb-8">
              <li>
                <div className="relative pb-8">
                  <span className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-400 dark:bg-current" aria-hidden="true"></span>
                  <div className="relative flex items-start space-x-3">
                    <div>
                      <div className="relative px-1">
                        <div className="h-8 w-8 bg-blue-500 rounded-full ring-8 ring-transparent flex items-center justify-center">
                          <span className='font-bold text-white'>1</span>
                        </div>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1 py-0">
                      <div className="text-md">
                        <div>
                          <a href="#" className="font-bold text-lg mr-2">Ventie</a>

                          <a href="#"
                            className="my-0.5 relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5 text-sm">
                            <div className="absolute flex-shrink-0 flex items-center justify-center">
                              <span className="h-1.5 w-1.5 rounded-full bg-green-500" aria-hidden="true"></span>
                            </div>
                            <div className="ml-3.5 font-medium">Feature</div>
                          </a>
                        </div>
                        <span className="whitespace-nowrap text-md font-bold text-rose-500">3rd Feb 2021, 2pm</span>
                      </div>
                      <div className="mt-2">
                        <span className="whitespace-nowrap text-md font-bold">Venti Grounds</span>
                        <p>
                          <span className='font-bold'>Guest: </span>John Pombe Magufuli
                          <br />
                          - Implemented a dark mode for improved user experience at night.
                          <br />
                          - Introduced real-time notifications for instant updates.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* on Large screen */}
      <div className="hidden sm:block mx-auto mt-8">
        <div className=" border-gray-500 pl-8">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Event 1</h3>
              <p className="text-sm">Date: January 1, 2022</p>
            </div>
            <p className="">Some description goes here...</p>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between mt-8">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Event 2</h3>
              <p className=" text-sm">Date: February 1, 2022</p>
            </div>
            <p className="">Some description goes here...</p>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between mt-8">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Event 3</h3>
              <p className=" text-sm">Date: March 1, 2022</p>
            </div>
            <p className="">Some description goes here...</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Coming_events;