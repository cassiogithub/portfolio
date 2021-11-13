import * as Icons  from "react-icons/fa";
const SocialIcon = (props) => {

function FaIcon ({ name }) {
    const IconComponent = Icons[name];
  
    if (!IconComponent) {
      return <Icons.FaBeer />;
    }
  
    return <IconComponent />;
  };
  return (
    <div className="border-2 rounded-full p-1 mr-5 transform hover:scale-110 cursor-pointer">
     <a href={props.url}>
        <FaIcon name={props.name} />
      </a>
    </div>
  )
}

export default SocialIcon
