const NavItem = (props) => {
    return (
        <div className="text-base lg:flex-grow">
            <a
              href={props.link}
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-black hover:opacity-90 mr-4"
            >
             {props.value}
            </a>
        </div>
    )
}
export default NavItem