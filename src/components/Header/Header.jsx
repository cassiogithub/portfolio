import Logo from "./Logo";
import Navbar from "./Navbar";
import NavbarMobile from "./NavbarMobile";
import { useState } from "react";

const Header = (props) => {
  const [open, setOpen] = useState("");

  function isBarOpen(isOpen) {
    setOpen(!isOpen);
  }
  return (
    <>
      <header>
        <div className="flex justify-around items-center border-b border-gray-800 border-opacity-5 mt-5">
          <div className="flex flex-col w-full">
            <div className="flex  justify-around mb-2 ">
              <Logo />
              <Navbar hidden="xs:hidden" />
              <NavbarMobile isOpen={isBarOpen} />
            </div>
            <div className="flex justify-around">{open ? <Navbar /> : '' }</div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
