import { Nav } from "../../../Components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../../Components/Footer";

function Layout(){
  return (
    <>
    <Nav/>
    <Outlet />
    <Footer/>
    </>
  )
}

export default Layout;