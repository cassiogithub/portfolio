import "aos/dist/aos.css";
const TheProject = (props) => {
  return (
    <>
      <article>
        <div
          className="flex flex-col justify-center items-center max-w-lg p-4"
          data-aos="zoom-out-down"
          data-aos-duration="500"
        >
          <a href={props.link} > 
          <img
            src={props.srcImg}
            alt={`${props.description}`}
            className="md:w-44 md:h-44 rounded-full xs:w-32 xs:h-32 bg-gray-50 p-2
            transform hover:scale-105 "
            style={props.style}
          />
          </a>
          <div className="flex text-justify mt-4 md:text-base xs:text-sm md:max-w-sm">
            <p>{props.description}</p>
          </div>
        </div>
      </article>
    </>
  );
};
export default TheProject;
