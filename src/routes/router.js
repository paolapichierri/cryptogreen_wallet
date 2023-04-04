import {createBrowserRouter} from "react-router-dom";
import Root from "../pages/Root";
//Welcome
import Welcome from '@pages/Welcome';
//Register
import RegisterAccessData from '@pages/Register/AccessData'
import RegisterUserData from '@pages/Register/UserData'
import RegisterUploadDocuments from '@pages/Register/UploadDocuments'

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
    }
]);

export default router;