import NavItem from './NavItem'
const Navbar = () => {
  return (
    <div>
      <nav class="flex items-center justify-between flex-wrap p-6">
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto text-grey-200">
          <NavItem value='Sobre mim' link='#'/>
          <NavItem value='Projetos' link='#'/>
          <NavItem value='Conhecimentos' link='#'/>
          <NavItem value='Contato' link='#'/>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
