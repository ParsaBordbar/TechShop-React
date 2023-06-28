import { Nav,NavItem } from "../../../Components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../../Components/Footer";

function Layout(){
  return (
    <>
    <Nav>
      <NavItem tittle="Home" linkTo="/"/>
      <NavItem tittle="Phones" linkTo="/phone"/>
      <NavItem tittle="SMT" linkTo="/phone"/>
      <NavItem tittle="Keyboards" linkTo="/phone"/>
      <NavItem tittle="Monitors" linkTo="/phone"/>
      <NavItem tittle="Pc" linkTo="/phone"/>
      <NavItem tittle="Deals" linkTo="/phone"/>
    </Nav>
    <Outlet />
    <Footer/>
    </>
  )
}

export default Layout;