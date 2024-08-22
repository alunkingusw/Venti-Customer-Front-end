/* eslint-disable no-unused-vars */
import NavBar from '../common/navBar';
import Sidebar from '../common/sidebar';
import { Outlet } from 'react-router-dom';

const UsersDashboard = () => {
   
    return (
        <div className="flex h-screen dark:text-white dark:bg-black">
            <Sidebar/>
            <div className="flex h-full w-full flex-col">
                <NavBar />
                <div className="h-screen overflow-auto">
                    <div className="flex flex-wrap gap-x-4 gap-y-8 justify-center items-center mb-10">
                        <Outlet />
                    </div>
                </div>
            </div>
            
        </div >
    );
}

export default UsersDashboard;
