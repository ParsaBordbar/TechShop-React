import { Navbar } from "../../../Components/Navbar";
import {  Outlet } from "react-router-dom";
import Footer from "../../../Components/Footer";
import CustomScroll from "../../../Components/CustomScroll";
import { useAuth } from "../../../hooks/useAuth/useAuth";


function Layout(){
  useAuth()
  return (
    <>
    <CustomScroll />
    <Navbar/>
    <Outlet />
    <Footer/>
    </>
  )
}

export default Layout;