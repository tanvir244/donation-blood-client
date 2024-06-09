import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const DonorHomePage = () => {
    const { user } = useAuth();
    const [myRequests, setMyRequests] = useState([]);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        axiosSecure(`/my_donation_requests/${user.email}`)
            .then(res => {
                console.log(res.data);
                setMyRequests(res.data);
            })
    }, [axiosSecure, user.email])

    // let's update donor status to done
    const changeStatusDone = id => {
        console.log(id);
        axiosSecure.patch(`/change_status_done/${id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Status Changes to Done",
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    // let's update donor status to cancel
    const changeStatusCancel = id => {
        console.log(id);
        axiosSecure.patch(`/change_status_cancel/${id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Status Changes to Cancel",
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <div className="my-12">
            <h1 className="text-4xl text-green-700 font-bold text-center">Hello, {user.displayName}! Welcome !</h1>
            <div className="w-[90%] md:w-max-6xl mx-auto my-8">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="">
                                <th>#</th>
                                <th>Recipient Name</th>
                                <th>Division</th>
                                <th>District</th>
                                <th>Upazila</th>
                                <th>Donation Date</th>
                                <th>Donation Time</th>
                                <th className="text-center">Status</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myRequests.map((request, index) => <tr
                                    key={index}
                                >
                                    <th>{index + 1}</th>
                                    <td>{request.recipient_name}</td>
                                    <td>{request.division}</td>
                                    <td>{request.district}</td>
                                    <td>{request.upazila}</td>
                                    <td>{request.donation_date}</td>
                                    <td>{request.donation_time}</td>
                                    <td className="text-center">
                                        {request.donation_status === 'inprogress' ? (
                                            <> {/* Wrap elements in a fragment */}
                                                <div className="flex gap-1">
                                                    <Link key="done-button">
                                                        <button
                                                            onClick={() => changeStatusDone(request._id)}
                                                            className="btn btn-sm bg-green-600 text-white"
                                                        >
                                                            Done
                                                        </button>
                                                    </Link>
                                                    <Link key="cancel-button">
                                                        <button
                                                            onClick={() => changeStatusCancel(request._id)}
                                                            className="btn btn-sm bg-yellow-400 text-black"
                                                        >
                                                            Cancel
                                                        </button>
                                                    </Link>
                                                </div>
                                            </>
                                        ) : (
                                            <span
                                                className={`bg-[#F8C3B9] ${request.donation_status === 'done' ? 'bg-green-600' : ''} ${request.donation_status === 'cancel' ? 'bg-yellow-400' : ''} ${request.donation_status === 'done' ? 'text-white' : ''} ${request.donation_status === 'pending' ? 'text-red-600' : ''} ${request.donation_status === 'inprogress' ? 'text-white' : ''} ${request.donation_status === 'cancel' ? 'text-black' : ''} py-2 px-4 rounded-2xl font-bold`}
                                            >
                                                {request.donation_status}
                                            </span>
                                        )}
                                    </td>

                                    <td>
                                        <Link to={`/requests_details/${request._id}`}><button className="btn bg-green-600 text-white">View Details</button></Link>
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

export default DonorHomePage;