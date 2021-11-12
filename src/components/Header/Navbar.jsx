import NavItem from "./NavItem";
const Navbar = (props) => {
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap p-6">
        <div className={`w-full flex lg:flex lg:items-center lg:w-auto ${props.hidden}`}>
          <NavItem value="Sobre" link="#" />
          <NavItem value="Projetos" link="#" />
          <NavItem value="Conhecimentos" link="#" />
          <NavItem value="Contato" link="#" />
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
