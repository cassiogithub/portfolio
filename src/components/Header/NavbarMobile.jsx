import { AiOutlineClose } from "react-icons/ai";
import { GoThreeBars } from "react-icons/go";
import { useState } from "react";

const NavbarMobile = (props) => {
  const [barOpen, setBarOpen] = useState(false);
  return (
    <div
      className="lg:hidden"
      onClick={(e) => {
        setBarOpen(!barOpen)
       return props.isOpen( barOpen)
      }}
    >
      {barOpen ? <AiOutlineClose size={40} /> : <GoThreeBars size={40} />}
    </div>
  );
};

export default NavbarMobile
