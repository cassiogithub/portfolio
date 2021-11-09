import AOS from "aos";
import "aos/dist/aos.css";
const TheProject = (props) => {
  return (
    <>
      <article>
        <div
          className="flex flex-col justify-center items-center max-w-xl p-4"
          data-aos="zoom-out-down"
          data-aos-duration="500"
        >
          <img
            src={props.srcImg}
            alt={`${props.description}`}
            className="md:w-44 md:h-44 rounded-full xs:w-32 xs:h-32"
          />
          <div className="flex text-justify mt-4 md:text-base xs:text-sm md:max-w-sm">
            <p>{props.description}</p>
          </div>
        </div>
      </article>
    </>
  );
};
export default TheProject;
