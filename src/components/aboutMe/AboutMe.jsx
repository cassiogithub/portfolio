import SocialMedia from "../shared/SocialMedias";
const AboutMe = () => {
  return (
    <>
      <section>
        <div className="flex justify-around mt-20 items-center flex-wrap-reverse">
          <div
            className="flex flex-col p-2"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="flex">
              <div className="flex max-w-md items-center flex-col">
                <h1 className="text-4xl self-start mb-2 ml-2 font-mono">
                  Me conheça.
                </h1>
                <p className="text-gray-900 text-lg text-justify m-2 xs:text-sm xs:mt-2">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Consequuntur perspiciatis qui itaque eaque eligendi a quo id
                  nam, eveniet numquam quaerat officia architecto quis possimus
                  expedita est quod incidunt maxime.
                </p>
              </div>
            </div>

            <div className="flex align-center justify-center mt-3">
              <SocialMedia src="/images/fbIcon.svg" socialName="Facebook" />
              <SocialMedia src="/images/githubIcon.svg" socialName="GitHub" />
              <SocialMedia
                src="/images/linkedinIcon.svg"
                socialName="LinkedIn"
              />
              <SocialMedia src="/images/twitterIcon.svg" socialName="Twitter" />
            </div>
          </div>
          {/* DIREITA */}
          <div className="sm:flex" data-aos="fade-left">
          <img
                src="/images/myAvatar.svg"
                className="w-full xl:max-w-md lg:max-w-sm md:w-96 sm:w-64 sm:rounded-full sm:border-2 md:border-0 md:rounded xs:w-52 xs:rounded-full"
                alt="Eu"
              />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
