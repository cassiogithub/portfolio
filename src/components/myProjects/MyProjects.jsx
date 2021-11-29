import TheProject from "./TheProject";
export default function MyProjects(props)  {
  return (
    <>
      <section id="Projects">
        <div className="flex flex-col justify-around items-center mt-2 xxl:mt-72 bg-gray-900 text-white p-4 pb-32">
          <span className="text-xl flex-nowrap">º</span>
          <div className="flex flex-wrap w-full justify-evenly mt-20">       
          <TheProject
              description="Este portfólio é um dos meus projetos pessoais, tem o intuito de trazer uma boa experiência com front-end
              e ter uma noção mais prática de aplicação, nesta aplicação busquei um design responsivo e minimalista,
              onde tive a minha primeira experiência com TailwindCSS e minha primeira aplicação usando NextJS."
              srcImg="/images/myAvatar.svg"
              link='https://github.com/cassiogithub/portfolio'
            />
            <TheProject
              description="Rocket.Q é um projeto <NLW Together /> da Rocketseat, obtive um grande ganho de experiência e de noção prática com 
              aplicações front-end e uma noção de NodeJS adiquirindo conhecimento básico em interação back-end com front-end.
              Nesta aplicação foi usado HTML, CSS, JS e como frameworks EJS e NodeJS."
              srcImg="/images/rocketqLogo.svg"
              link='https://github.com/cassiogithub/nlw-together'
            />
            <TheProject
              description="Spotify clone foi um projeto desenvolvido no curso de Desenvolvimento Web que realizei dentro da plataforma Udemy lecionado pelo professor
              Jamilton Damasceno, neste projeto obtive conhecimento em Bootstrap e como editar os estilos aplicados pelo framework."
              srcImg="/images/spotify.svg"
              style={{backgroundColor:'#1F2937', border: '1px solid #fff'}}
              link='https://github.com/cassiogithub/web_bases_de_conhecimento/tree/main/spotifyClone'
            />
          </div>
        </div>
      </section>
    </>
  );
};