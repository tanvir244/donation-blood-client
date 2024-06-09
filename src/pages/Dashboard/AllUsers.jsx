import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAllUsers from "../../hooks/useAllUsers";

const AllUsers = () => {
    const [allUsers, refetch] = useAllUsers();
    const [allUsersData, setAllUsersData] = useState(allUsers);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        setAllUsersData(allUsers);
    }, [allUsers])

    const handleBlock = id => {
        axiosSecure.patch(`/update_status_by_admin/${id}`)
            .then(res => {
                console.log(res.data);
                if(res.data.modifiedCount > 0){
                    // refetch data
                    refetch();
                }
            })
    }
    const handleActive = id => {
        axiosSecure.patch(`/update_status_by_admin_active/${id}`)
        .then(res => {
            console.log(res.data);
            if(res.data.modifiedCount > 0){
                // refetch data
                refetch();
            }
        })
    }

    const handleVolanteer = id => {
        axiosSecure.patch(`/make_status_volunteer/${id}`)
        .then(res => {
            console.log(res.data);
            if(res.data.modifiedCount > 0){
                // refetch data
                refetch();
            }
        })
    }
    const handleAdmin = id => {
        axiosSecure.patch(`/make_status_admin/${id}`)
        .then(res => {
            console.log(res.data);
            if(res.data.modifiedCount > 0){
                // refetch data
                refetch();
            }
        })
    }

    return (
        <div className="my-12">
            <h1 className="text-4xl text-green-700 font-bold text-center">My Donation Requests</h1>
            {/* <div className="dropdown dropdown-bottom dropdown-end w-[90%] flex justify-end">
                <div tabIndex={0} role="button" className="btn m-1 text-white bg-[#ff0000]">Select Status</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-[#ff0000] text-white font-semibold rounded-box w-52">
                    <li onClick={() => sortStatus('all')}><a>All</a></li>
                    <li onClick={() => sortStatus('pending')}><a>Pending</a></li>
                    <li onClick={() => sortStatus('inprogress')}><a>Inprogress</a></li>
                    <li onClick={() => sortStatus('done')}><a>Done</a></li>
                    <li onClick={() => sortStatus('cancel')}><a>Canceled</a></li>
                </ul>
            </div> */}
            <div className="w-[90%] md:w-max-6xl mx-auto my-8">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="">
                                <th>#</th>
                                <th>Profile</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Status</th>
                                <th>Unblock</th>
                                <th>Block</th>
                                <th>Make Volunteer</th>
                                <th>Make Admin</th>
                                <th className="text-center">Status</th>
                                <th>Details</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allUsersData.map((request, index) => <tr
                                    key={index}
                                >
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={request.profile} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="w-24">{request.name}</td>
                                    <td>{request.email}</td>
                                    <td>{request.role}</td>
                                    <td>{request.status}</td>
                                    <td>
                                        <button onClick={() => handleActive(request._id)} className="btn btn-sm bg-green-600 text-white" disabled={request.status === 'active'}>Unblock</button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleBlock(request._id)} className="btn btn-sm bg-red-600 text-white" disabled={request.status === 'blocked'}>Block</button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleVolanteer(request._id)} className="btn btn-sm bg-[#023047] text-white" disabled={request.role === 'volunteer'}>Volunteer</button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleAdmin(request._id)} className="btn btn-sm bg-red-600 text-white" disabled={request.role === 'admin'}>Admin</button>
                                    </td>
                                    <td>
                                        <Link to={`/requests_details/${request._id}`}><button className="btn bg-green-600 text-white w-28">View Details</button></Link>
                                    </td>
                                    <td>
                                        <Link to={`/update_request/${request._id}`}><button className="btn bg-[#006ee9] text-white w-28">Edit</button></Link>
                                    </td>
                                    <td>
                                        <button
                                            // onClick={() => handleDelete(request._id)} 
                                            className="btn bg-[#ff0000] text-white w-28">Delete</button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;