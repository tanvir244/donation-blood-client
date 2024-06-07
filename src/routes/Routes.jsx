import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../layout/Dashboard";
import CreateRequest from "../pages/Dashboard/CreateRequest";
import PendingDonationRequests from "../pages/PendingDonationRequests/PendingDonationRequests";
import RequestViewDetails from "../pages/RequestViewDetails/RequestViewDetails";
import { axiosSecure } from "../hooks/useAxiosSecure";
import Profile from "../pages/Dashboard/Profile";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
          path: '/sign_up',
          element: <SignUp></SignUp>
        },
        {
          path: '/donation_requests',
          element: <PendingDonationRequests></PendingDonationRequests>
        },
        {
          path: '/requests_details/:id',
          element: <RequestViewDetails></RequestViewDetails>,
          loader: ({params}) => axiosSecure(`/requests_details/${params.id}`)
        }
      ]
    },
    {
      path: "/dashboard",
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: '/dashboard/create_request',
          element: <CreateRequest></CreateRequest> 
        },
        {
          path: '/dashboard/profile',
          element: <Profile></Profile>
        }
      ]
    }
  ]);

export default router;