import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const DonorHomePage = () => {
    const  {user} = useAuth();
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        axiosSecure(`/my_donation_requests/${user.email}`)
        .then(res => {
            console.log(res.data);
        })
    }, [axiosSecure, user.email])


    return (
        <div className="my-12">
            <h1 className="text-4xl text-green-700 font-bold text-center">Hello, {user.displayName}! Welcome !</h1>
            
        </div>
    );
};

export default DonorHomePage;