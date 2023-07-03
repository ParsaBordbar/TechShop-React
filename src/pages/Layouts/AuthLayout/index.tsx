import { Outlet } from "react-router-dom";
import AuthPage from "../../dashboard/user/auth/index" 
import { Navbar } from "../../../Components/Navbar";


const AuthLayout = () => {
    return(
        <>
            <Navbar/>
            <AuthPage />
            <Outlet/>
        </>
    );
}

export default AuthLayout;