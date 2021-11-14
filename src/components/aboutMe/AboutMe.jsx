import SocialGroup from "../shared/SocialMediasGroup";
const AboutMe = () => {
  return (
    <>
      <section id="AboutMe">
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
                <p className="text-gray-900 text-justify m-2 md:text-lg xs:text-sm xs:mt-2">
                  Sou Cássio, tenho 25 anos, estou fazendo um curso técnico
                  em informática, comecei a estudar programação  em novembro de
                  2020, sempre usei a plataforma Udemy para estudos, hoje estou
                  buscando com este portfólio me apresentar e dar entrada na
                  área de programação, mesmo como estagiário , espero que tenham
                  uma boa experiência com esta aplicação!  
                </p>
              </div>
            </div>
            <SocialGroup />
          </div>
          {/* DIREITA */}
          <div className="sm:flex" data-aos="fade-left">
            <img
              src="/images/myAvatar.svg"
              className="w-full xl:max-w-sm lg:max-w-sm md:w-96 sm:w-64 sm:rounded-full sm:border-2 md:border-0 md:rounded xs:w-52 xs:rounded-full"
              alt="Cássio Rodrigues"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
