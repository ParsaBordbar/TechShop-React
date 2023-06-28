import { useRef, useState } from "react";
import { Link } from "react-router-dom"
import { ReactComponent as Logo } from "../../assets/SVGs/Menu.svg";
import { ReactComponent as SearchSVG } from "../../assets/SVGs/searchSVG.svg";

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
        <div className="menu flex flex-col gap-2 absolute w-max pt-2 p-2.5 rounded-2xl bg-slate-800">
          {props.children}
        </div>
      </div>
    )
}

function NavItem(props: any) {
  const [open, setOpen] = useState(false);

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
          
          <ul className="flex">
            <SearchSVG className=" justify-self-end cursor-pointer" />
            <Logo className="justify-self-end cursor-pointer">
              <DropdownMenu>
              <DropdownItem title="Mechanical"/>
              </DropdownMenu>
            </Logo>
          </ul>
        </div>
      </nav>
    )
}
  
export {Nav, NavItem, DropdownMenu, DropdownItem}  