const SocialMedia = (props) => {
  return (
    <>
      <div className="flex flex-col items-center m-2 transform hover:scale-110 motion-reduce:transform-none cursor-pointer">
        <i>
          <a href={props.url}>
            <img src={props.src} className="w-8 " alt={props.socialName} />
          </a>
        </i>
        <span className="text-sm hover:text-lg text-gray-900">
          {props.socialName}
        </span>
      </div>
    </>
  );
};

export default SocialMedia;
