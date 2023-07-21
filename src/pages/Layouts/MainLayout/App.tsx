import { Navbar } from "../../../Components/Navbar";
import {  Outlet } from "react-router-dom";
import Footer from "../../../Components/Footer";
import { useAuth } from "../../../hooks/useAuth/useAuth";
import CustomScroll from "../../../Components/CustomScroll";

function Layout(){
  useAuth()
  return (
    <>
    <Navbar/>
    <CustomScroll/>
    <Outlet />
    <Footer/>
    </>
  )
}

export default Layout;