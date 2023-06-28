import { useState } from "react";
import { Link } from "react-router-dom"
import { ReactComponent as MenuSvg } from "./logo.svg";
interface NavItemType{
  tittle: string;
  linkTo: string;
  icon?: string;
  children?: string;
}

function NavItem(props: NavItemType) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item cursor-pointer hover:text-red-600 transition duration-150 ease-out hover:ease-in">
      <Link to={props.linkTo} className="icon-button" onClick={() => setOpen(!open)}>
        {props.tittle}
        {props.icon}
      </Link>

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
            <img className=" justify-self-end cursor-pointer" src={('/src/assets/Group 310.png')} alt="" />
            <MenuSvg />
          </ul>
        </div>
      </nav>
    )
}
  
export {Nav, NavItem}  