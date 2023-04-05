import {createBrowserRouter} from "react-router-dom";
import Root from "../pages/Root";
//Welcome
import Welcome from '@pages/Welcome';
//Register
import RegisterAccessData from '@pages/Register/AccessData'
import RegisterUserData from '@pages/Register/UserData'
import RegisterUploadDocuments from '@pages/Register/UploadDocuments'
//Login
import Login from "@pages/Login/Login";
import OTP from "@pages/Login/OTP";
//Wallet
import Wallet from "@pages/Wallet/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Welcome/>,
    },
    {
        path: '/register',
        element: <Root/>,
        children: [
            {
                path: '/register/access-data',
                element: <RegisterAccessData/>
            },
            {
                path: '/register/user-data', 
                element: <RegisterUserData/>
            },
            {
                path: '/register/upload-documents', 
                element: <RegisterUploadDocuments/>
            },
        ]
    },
    {
        path: '/login',
        element: <Root/>,
        children: [
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/login/otp',
                element: <OTP/>
            }
        ]
    },
    {
        path: '/wallet',
        element: <Root/>,
        children: [
            {
                path: '/wallet',
                element: <Wallet/>
            }
        ]
    }
]);

export default router;