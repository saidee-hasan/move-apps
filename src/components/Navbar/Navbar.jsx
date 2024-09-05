
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import Logo from "../../assets/icon/logo.png"

export function Component() {
  return (
    <Navbar  className="bg-black  fixed w-full top-0 z-50">
      <NavbarBrand href="/">
        <img src={Logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
      
      </NavbarBrand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
     
        <NavbarLink active  href="#"><p className="text-white text-xl hover:text-green-500">Moves</p>  </NavbarLink>
        <NavbarLink   href="#"><p className="text-white text-xl hover:text-green-500">Moves</p>  </NavbarLink>
        <NavbarLink   href="#"><p className="text-white text-xl hover:text-green-500">Moves</p>  </NavbarLink>
        <NavbarLink   href="#"><p className="text-white text-xl hover:text-green-500">Moves</p>  </NavbarLink>
      
       
      </NavbarCollapse>
    </Navbar>
  );
}
