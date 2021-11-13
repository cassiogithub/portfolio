import "aos/dist/aos.css";
const Stack = (props) => {
  return (
    <article>
      <div
        className="flex flex-col justify-center items-center max-w-lg p-2 m-2"
        data-aos="zoom-out-down"
        data-aos-duration="500"
      >
        <div className="flex flex-col justify-center items-center h-36 mb-2">
          <h2 className="text-xl p-1 font-semibold font-mono sr-only">
            {props.title}
          </h2>
          <img src={props.url} alt={props.title} className="w-60" />
        </div>
        <div className="">
          <div className="flex flex-col md:max-w-sm">
            <p className="break-words font-sans text-bold mt-4 text-lg xs:text-sm">
              {props.description}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Stack;
