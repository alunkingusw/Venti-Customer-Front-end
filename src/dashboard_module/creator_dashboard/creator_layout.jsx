/* eslint-disable no-unused-vars */
import React from 'react'
import NavBar from '../common/navBar'
import Creator_navBar from './creator_components/creator_navBar'
import Creator_sidebar from './creator_components/creator_sidebar'
import { Outlet } from 'react-router-dom'

const Creator_layout = () => {
  return (
    <div className="flex h-screen dark:text-white dark:bg-black">
      <Creator_sidebar />
      <div className="flex h-full w-full flex-col">
        <Creator_navBar />
        <div className="h-screen overflow-auto">
          <div className="flex flex-wrap gap-x-4 gap-y-8 justify-center items-center mb-10">
            <Outlet />
          </div>
        </div>
      </div>

    </div >
  )
}

export default Creator_layout