import { Link } from "react-router-dom"

const Nav = () => {
    return (
      <nav className = 'sticky top-0 z-10 shadow-lg'>
        <div className='flex gap-x-96 make-it-primary text-slate-50 h-12 p-2.5'>
          <ul className="flex gap-6 font-semibold ms-32">
            <li className="cursor-pointer hover:text-red-600 transition duration-150 ease-out hover:ease-in"><Link to ='/'>Home</Link></li>
            <li className="cursor-pointer hover:text-red-600 transition duration-150 ease-out hover:ease-in"><Link to='/phone'>Phone</Link></li>
            <li className="cursor-pointer hover:text-red-600 transition duration-150 ease-out hover:ease-in">KEYBORD</li>
            <li className="cursor-pointer hover:text-red-600 transition duration-150 ease-out hover:ease-in">MONITOR</li>
            <li className="cursor-pointer hover:text-red-600 transition duration-150 ease-out hover:ease-in">LAPTOP</li>
            <li className="cursor-pointer hover:text-red-600 transition duration-150 ease-out hover:ease-in">PC</li>
            <li className="cursor-pointer hover:text-red-600 transition duration-150 ease-out hover:ease-in">DEALS</li>
          </ul>
          
          <ul className="flex">
            <img className="ms-96 justify-self-end cursor-pointer" src={('/src/assets/Group 310.png')} alt="" />
            <img className="justify-self-end cursor-pointer " src={('/src/assets/Group 85.png')} alt="" />
          </ul>
        </div>
      </nav>
    )
}
  
export {Nav}  