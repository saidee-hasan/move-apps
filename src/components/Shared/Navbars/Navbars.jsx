
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import Logo from "../../../assets/icon/logo.png"


export function Navbars() {
  return (
    <Navbar  className="bg-green-500  fixed w-full top-0 z-50">
      <NavbarBrand href="/">
        <img src={Logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
      
      </NavbarBrand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
   
        <NavbarLink className="hover:bg-black rounded-md "><a  href="" className="text-white  text-xl md:hover:text-gray-300 ">Moves</a>  </NavbarLink>
        <NavbarLink className="hover:bg-black rounded-md "><a  href="/" className="text-white  text-xl md:hover:text-gray-300 ">Course</a>  </NavbarLink>
        <NavbarLink className="hover:bg-black rounded-md "><a  href="" className="text-white  text-xl md:hover:text-gray-300 ">Master Card</a>  </NavbarLink>
        <NavbarLink className="hover:bg-black rounded-md "><a  href="" className="text-white  text-xl md:hover:text-gray-300 ">Windows</a>  </NavbarLink>

      </NavbarCollapse>
    </Navbar>
  );
}
