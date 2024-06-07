import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const Profile = () => {
    const {user} = useAuth();
    const [userData, setUserData] = useState([]);
    const axiosSecure = useAxiosSecure();
    console.log(user);
    useEffect(() => {
        axiosSecure(`/user_data/${user.email}`)
        .then(res => {
            console.log(res.data);
            setUserData(res.data);
        })
    }, [axiosSecure, user.email])


    return (
        <div>
            <h1>This is {user.email}</h1>
        </div>
    );
};

export default Profile;