import NavItem from "./NavItem";
const Navbar = (props) => {
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap p-6">
        <div className={`w-full flex lg:flex lg:items-center lg:w-auto ${props.hidden}`}>
          <NavItem value="Sobre" link="/#AboutMe" />
          <NavItem value="Projetos" link="/#Projects" />
          <NavItem value="Conhecimentos" link="/#Skills" />
          <NavItem value="Contato" link="/contact" />
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
