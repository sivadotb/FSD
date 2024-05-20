import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { createBrowserRouter, RouterProvider, Link, Outlet  } from 'react-router-dom';

import Login from "./Login.jsx";

import AppNav from "./AppNav.jsx";
import Logout from "./Logout.jsx";
import Register from "./Register.jsx";
import ForgotPassword from "./ForgotPassword.jsx";
import Dashboard from "./Dashboard.jsx";

const router = createBrowserRouter([
    {
        path:'/',
        element:<AppNav />,
        children:[
            {
                path:'login',
                element:<Login />
            },
            {
                path:'logout',
                element:<Logout />
            },
            {
                path:'forgot-password',
                element:<ForgotPassword />
            },
            {
                path:'register',
                element:<Register />
            },
            {
                path:'dashboard',
                element:<Dashboard />
            }
        ]
    },
    
])

function Home(){
    return <RouterProvider router={router} />
}

export default Home