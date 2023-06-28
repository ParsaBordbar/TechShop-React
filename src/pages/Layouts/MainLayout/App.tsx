import { DropdownMenu, Nav,NavItem, DropdownItem } from "../../../Components/Navbar";
import { Link, Outlet } from "react-router-dom";
import Footer from "../../../Components/Footer";

function Layout(){
  return (
    <>
    <Nav>
      <Link to="/"><NavItem tittle="Home" /></Link>
      
      <NavItem tittle="Phones">
      <DropdownMenu>
          <DropdownItem title="iPhone" linkTo="phone"/>
          <DropdownItem title="Samsung"/>
      </DropdownMenu>
      </NavItem>
      <NavItem tittle="Keyboards" linkTo="/phone">
        <DropdownMenu>
          <DropdownItem title="Membarian"/>
          <DropdownItem title="Mechanical"/>
        </DropdownMenu>
      </NavItem>
      <NavItem tittle="SMT" linkTo="/phone"/>
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