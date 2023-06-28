import { Outlet } from "react-router-dom";

const AuthLayout = () => {
    return(
        <>
        <div className="flex justify-center items-center m-28 rounded-3xl">
            <Outlet/>
        </div>
        </>
    );
}

export default AuthLayout;