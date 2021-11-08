const SocialMedia = (props) => {
  return (
    <>
      <a href="#" className="">
        <div className="flex flex-col items-center m-2 transform hover:scale-110 motion-reduce:transform-none">
          <i>
            <img
              src={props.src}
              className="w-8 "
              alt={props.socialName}
            />
          </i>
          <span className="text-sm hover:text-lg text-gray-900">{props.socialName}</span>
        </div>
      </a>
    </>
  );
};

export default SocialMedia;
