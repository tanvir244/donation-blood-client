import { BiSolidDonateHeart } from 'react-icons/bi';
import { FaHome, FaUser } from 'react-icons/fa';
import { MdCreateNewFolder } from 'react-icons/md';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='lg:flex lg:justify-between'>
            {/* Dashboard slide bar  */}
            <div className='w-full lg:w-[20%] lg:min-h-screen py-6 lg:py-0 lg:rounded-b-xl bg-[#ffd3cb] lg:fixed'>
                <h2 className='text-3xl font-bold text-center mb-6 lg:my-4'>Donor</h2>
                <ul className="menu font-semibold">
                    <li>
                        <NavLink to="/dashboard/donor_home_page">
                        <span className='text-xl'><FaHome></FaHome></span>
                            Dashboard Home Page</NavLink> 
                    </li>
                    <li>
                        <NavLink to="/dashboard/profile">
                        <span className='text-xl'><FaUser></FaUser></span>
                            Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/donor_home">
                            <span className='text-2xl'><BiSolidDonateHeart /></span>
                            My Donation Requests</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/create_request">
                        <span className='text-xl'><MdCreateNewFolder /></span>
                            Create Donation Request</NavLink>
                    </li>
                </ul>
            </div>

            {/* Dashboard contents  */}
            <div className='w-full lg:w-[80%] lg:ml-[20%] mb-4 lg:mb-0'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;
