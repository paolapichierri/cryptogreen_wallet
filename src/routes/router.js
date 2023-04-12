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
import WalletSend from "@pages/Wallet/Send";
import WalletReceive from "@pages/Wallet/Receive";
import WalletMovements from "@pages/Wallet/Movements";
//Market
import Market from "@pages/Market/Home";
import MarketBuy from "@pages/Market/Buy";
import MarketSell from "@pages/Market/Sell";
//Profile
import Profile from "@pages/Profile/Home";
import ProfileEditUserData from "@pages/Profile/EditUserData";
import ProfileEditPassword from "@pages/Profile/EditPassword";

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
            },
            {
                path: '/wallet/send',
                element: <WalletSend/>
            },
            {
                path: '/wallet/receive',
                element: <WalletReceive/>
            },
            {
                path: '/wallet/movements',
                element: <WalletMovements/>
            }
        ]
    },
    {
        path: '/market',
        element: <Root/>,
        children: [
            {
                path: '/market',
                element: <Market/>,
            },
            {
                path: '/market/buy',
                element: <MarketBuy/>
            },
            {
                path: '/market/sell',
                element: <MarketSell/>
            }
        ]
    },
    {
        path: '/profile',
        element: <Root/>,
        children: [
            {
                path: '/profile',
                element: <Profile/>,
            },
            {
                path: '/profile/edit-user-data',
                element: <ProfileEditUserData/>,
            },
            {
                path: '/profile/edit-password',
                element: <ProfileEditPassword/>,
            }
        ]
    }
]);

export default router;