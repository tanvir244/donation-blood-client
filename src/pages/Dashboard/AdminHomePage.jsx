import { useEffect, useState } from "react";
import { FaUsers } from "react-icons/fa";
import { MdBloodtype } from "react-icons/md";
import { RiFundsBoxFill } from "react-icons/ri";
import { axiosSecure } from "../../hooks/useAxiosSecure";

const AdminHomePage = () => {
    const [totalUser, setTotalUser] = useState([]);
    const [totalRequest, setTotalRequest] = useState([]);

    useEffect(() => {
        axiosSecure('/user_data')
        .then(res => {
            setTotalUser(res.data.length);
            // setTotalRequest(res.data.)
        })

        axiosSecure('/all_donation_requests')
        .then(res => {
            setTotalRequest(res.data.length);
        })

    }, [])

    return (
        <div className="py-8 bg-[#dad7cd] min-h-[100vh]">
            <div className="w-[92%] mx-auto flex justify-center items-center bg-[#001427] py-28 rounded-xl mb-6">
                <h2 className="text-white text-4xl md:text-5xl font-bold text-center">Hello, Tanvir ! Welcome !</h2>
            </div>
            <div className="w-[92%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="py-12 px-8 bg-[#64cec1] text-center rounded-xl">
                    <div className="w-[65px] mx-auto text-6xl mb-3"><FaUsers /></div>
                    <h1 className="text-4xl font-bold mb-2">Total Donors</h1>
                    <h1 className="text-4xl font-bold">{totalUser}</h1>
                </div>
                <div className="py-12 px-8 bg-[#ffc686] text-center rounded-xl">
                    <div className="w-[65px] mx-auto text-6xl mb-3"><RiFundsBoxFill /></div>
                    <h1 className="text-4xl font-bold mb-2">Total Funding</h1>
                    <h1 className="text-4xl font-bold">520</h1>
                </div>
            </div>
            <div className="w-[92%] md:w-[570px] mx-auto py-12 px-8 bg-[#403d39] text-center text-white rounded-xl mt-6">
                <div className="w-[65px] mx-auto text-7xl mb-4"><MdBloodtype /></div>
                <h1 className="text-4xl font-bold mb-3">Total Blood Donation Request</h1>
                <h1 className="text-4xl font-bold">{totalRequest}</h1>
            </div>
        </div>
    );
};

export default AdminHomePage;