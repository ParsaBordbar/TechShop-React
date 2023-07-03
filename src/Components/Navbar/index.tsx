import { useState } from "react";
import { Link } from "react-router-dom"
import { ReactComponent as SearchSVG } from "../../assets/SVGs/searchSVG.svg";
import { ReactComponent as UserSVG } from "../../assets/SVGs/userSVG.svg";


function DropdownItem(props:any) {
  return(
    <Link to = {props.linkTo} className=" hover:text-red-600 transition duration-150 ease-out hover:ease-in">
      {props.title}
      {props.children}
    </Link>
  )
};
function DropdownMenu(props: any) {
    return(
      <div className="dropdown">
        <div className="menu flex flex-col gap-2 absolute w-max pt-2 p-1.5 rounded-xl bg-zinc-800 text-sm">
          {props.children}
        </div>
      </div>
    )
}

function NavItem(props: any) {
  var [open, setOpen] = useState(false);

  return (
    <li className="nav-item cursor-pointer">
      <a className="icon-button  hover:text-red-600 transition duration-150 ease-out hover:ease-in" onClick={() => setOpen(!open)}>
           {props.tittle}
           {props?.icon} 
      </a>
      {open && props.children}
    </li>
  );
}

const Nav = (props:any) => {
    return (
      <nav className = 'sticky top-0 z-10 shadow-lg flex-grow'>
        <div className='flex make-it-primary text-slate-50 h-12 p-2.5 justify-between'>
          <ul className="flex gap-6 font-semibold ms-28">
              {props.children}
          </ul>
        </div>
      </nav>
    )
}


function Navbar(){
  return(
      <Nav>
  <div className="flex gap-x-96">
    <div className="flex gap-4">
    <Link to="/"><NavItem tittle="Home" /></Link>
    <NavItem tittle="Phones">
    <DropdownMenu>
        <DropdownItem title="iPhone" linkTo="/phone"/>
        <DropdownItem title="Samsung"/>
        <DropdownItem title="Honor" linkTo="phone"/>
        <DropdownItem title="Xiami"/>
    </DropdownMenu>
    </NavItem>
    <NavItem tittle="Keyboards">
      <DropdownMenu>
        <DropdownItem title="Membarian"/>
        <DropdownItem title="Mechanical"/>
      </DropdownMenu>
    </NavItem>
    <NavItem tittle="SMT"/>
    <NavItem tittle="Monitors"/>
    <NavItem tittle="Pc"/>
    <NavItem tittle="Deals"/>
    </div>
    <div className="flex gap-1 ms-96 ps-32">
      <NavItem icon = {<SearchSVG linkTo="/phone"/>}/>
      <Link to="/auth" >
        <UserSVG/>
      </Link>
    </div>
  </div>
  </Nav>
  )
}

export {Navbar}  