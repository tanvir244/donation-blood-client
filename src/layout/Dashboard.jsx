import { BiSolidDonateHeart } from 'react-icons/bi';
import { FaHome } from 'react-icons/fa';
import { MdCreateNewFolder } from 'react-icons/md';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='flex justify-between'>
            {/* Dashboard slide bar  */}
            <div className='w-[20%] min-h-screen bg-[#ffd3cb] fixed'>
                <h2 className='text-3xl font-bold text-center my-4'>Donor</h2>
                <ul className="menu font-semibold">
                    <li>
                        <NavLink to="/dashboard/donor_home">
                        <span className='text-xl'><FaHome></FaHome></span>
                            Dashboard Home</NavLink>
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
            <div className='w-[80%] ml-[20%]'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;
