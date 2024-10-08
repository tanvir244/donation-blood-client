import { useEffect, useState } from 'react';
import { BiSolidDonateBlood } from 'react-icons/bi';
import { FaHome, FaUser, FaUsers } from 'react-icons/fa';
import { MdCreateNewFolder, MdOutlineContentPasteSearch, MdOutlineKeyboardBackspace } from 'react-icons/md';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { axiosSecure } from '../hooks/useAxiosSecure';

const Dashboard = () => {
    const { user } = useAuth();
    const [role, setRole] = useState([]);
    console.log(role);

    const navigate = useNavigate()
    if (!user) {
        navigate('/login');
    }

    useEffect(() => {
        axiosSecure(`/user_data/${user?.email}`)
            .then(res => {
                setRole(res.data.role);
            })
    }, [user?.email])

    return (
        <div className='lg:flex lg:justify-between'>
            {/* Dashboard slide bar  */}
            <div className='w-full lg:w-[20%] lg:min-h-screen py-6 lg:py-0 lg:rounded-b-xl bg-[#d90429] text-white lg:fixed '>
                <h1 className='mt-4 ml-4'><Link to={'/'}><span className='text-xl'><MdOutlineKeyboardBackspace /></span></Link></h1>
                <h2 className='text-3xl font-bold text-center mb-6 lg:my-4'>{role === 'admin' ? 'Admin' : role === 'donor' ? 'Donor' : role === 'volunteer' ? 'Volunteer' : ''}</h2>
                {role === 'admin' ? (<ul className="menu font-semibold">
                    <li>
                        <NavLink className="py-4 px-2" to="/dashboard/admin_home_page">
                            <span className='text-xl'><FaHome></FaHome></span>
                            Dashboard Home Page</NavLink>
                    </li>
                    <li>
                        <NavLink className="py-4 px-2" to="/dashboard/profile">
                            <span className='text-xl'><FaUser></FaUser></span>
                            Edit Profile</NavLink>
                    </li>
                    <li>
                        <NavLink className="py-4 px-2" to="/dashboard/all_users">
                            <span className='text-xl'><FaUsers /></span>
                            Manage All Users</NavLink>
                    </li>
                    <li>
                        <NavLink className="py-4 px-2" to="/dashboard/all_blood_donation_requests">
                            <span className='text-xl'><BiSolidDonateBlood /></span>
                            All Blood Donation Requests</NavLink>
                    </li>
                    <li>
                        <NavLink className="py-4 px-2" to="/dashboard/content_management">
                            <span className='text-xl'><MdOutlineContentPasteSearch /></span>
                            Content Management</NavLink>
                    </li>
                </ul>) : role === 'donor' ? (<ul className="menu font-semibold">
                    <li>
                        <NavLink className="py-4 px-2" to="/dashboard/donor_home_page">
                            <span className='text-xl'><FaHome></FaHome></span>
                            Dashboard Home Page</NavLink>
                    </li>
                    <li>
                        <NavLink className="py-4 px-2" to="/dashboard/profile">
                            <span className='text-xl'><FaUser></FaUser></span>
                            Edit Profile</NavLink>
                    </li>
                    <li>
                        <NavLink className="py-4 px-2" to="/dashboard/my_donation_requests">
                            <span className='text-2xl'><BiSolidDonateBlood /></span>
                            My Donation Requests</NavLink>
                    </li>
                    <li>
                        <NavLink className="py-4 px-2" to="/dashboard/create_request">
                            <span className='text-xl'><MdCreateNewFolder /></span>
                            Create Donation Request</NavLink>
                    </li>
                </ul>) : role === 'volunteer' ? (<ul className="menu font-semibold">
                    <li>
                        <NavLink className="py-4 px-2" to="/dashboard/admin_home_page">
                            <span className='text-xl'><FaHome></FaHome></span>
                            Dashboard Home Page</NavLink>
                    </li>
                    <li>
                        <NavLink className="py-4 px-2" to="/dashboard/profile">
                            <span className='text-xl'><FaUser></FaUser></span>
                            Edit Profile</NavLink>
                    </li>
                    <li>
                        <NavLink className="py-4 px-2" to="/dashboard/all_donation_requests_volunteer_role">
                            <span className='text-xl'><BiSolidDonateBlood /></span>
                            All Blood Donation Requests</NavLink>
                    </li>
                    <li>
                        <NavLink className="py-4 px-2" to="/dashboard/content_management_volunteer">
                            <span className='text-xl'><MdOutlineContentPasteSearch /></span>
                            Content Management</NavLink>
                    </li>
                </ul>) : <></>}

            </div>

            {/* Dashboard contents  */}
            <div className='w-full lg:w-[80%] lg:ml-[20%] mb-4 lg:mb-0'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;
