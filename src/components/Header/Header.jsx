import Logo from "./Logo";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <div className="flex justify-around items-center border-b border-gray-800 border-opacity-5 mt-5">
        <Logo />
        <Navbar />
      </div>
    </>
  );
};

export default Header;
