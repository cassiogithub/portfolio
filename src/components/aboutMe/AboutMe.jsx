import Image from 'next/image'
import SocialMedia from "../shared/SocialMedias";
const AboutMe = () => {
  return (
    <>
      <section>
        <div className="flex justify-around mt-20 items-center flex-wrap-reverse">
          <div className="flex flex-col p-2">
            <div className="flex">
              <div className="flex max-w-md items-center flex-col">
                <h1 className="text-4xl self-start mb-2 ml-2 font-mono">Me conheça.</h1>
                <p className="text-gray-900 text-lg text-justify m-2">
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
          <div className="flex max-w-md">
          <img src="/images/myAvatar.svg" alt="" className="circle"/>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
