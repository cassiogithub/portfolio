import Stack from "./Stacks"

const Skills = () => {
    return(
        <section id="Skills">
        <div className="flex flex-wrap w-screen justify-around items-center mt-8 py-28">
            <Stack 
            title="HTML CSS JS" 
            url="/images/htmlcssjs.png" 
            description="A base de tudo, HTML5 CSS3 e JavaScript, foi com essas linguagens que aprendi os fundamentos de uma pagina web,
            com elas comecei meus estudos em Novembro de 2020 também na plataforma Udemy, em 2 cursos, Desenvolvimento Web com o professor
            Jamilton Damasceno, onde masterizei o conteudo com projetos do próprio curso e logo dei sequencia ao curso de JavaScript Moderno com o 
            professor Leonardo Leitão da plataforma COD3R também dentro da plataforma Udemy."/>
            <Stack title="NextJS" url="/images/nextjs.png" description="O NextJS, depois de uma breve introdução ao ReactJS que obtive dentro do curso lecionado pelo professor Leonardo Leitão,
Comecei a ter curiosidade por esse framework de React, me chamando atenção pelo sistema de modules.css e principalmente pela renderização
no back-end, então comprei um curso do mesmo professor, e desenvolvi este portfólio, e vejo que a ferramenta tem um grande potencial e muito a me agregar profissionalmente."/>
           
            <Stack title="Tailwind CSS" url="/images/tailwindcss.png" 
            description="Ah o TailwindCSS, uma ferramenta nova que me chamou atenção pela praticidade de estilos, onde aninhado com o NextJS se torna um ótimo framework,
            fazendo com que a sua maior fraqueza que é a sujeira no código, se torne sua aliada com o sistema de modulos do NextJS e ReactJS, 
            aninhadas me trouxe uma grande melhora em produtividade e facilidade ao trabalhar com componentes, este portfólio foi desenvolvido com este framework CSS."/>
           
            <Stack title="Bootstrap" url="/images/bootstrap.png" 
            description="O Bootstrap foi o framework de estilo que busquei conhecimento, o seu sistema de 12 colunas e linhas, é muito útil para responsividade, 
            e de uma excelete agilidade no desenvolvimento, usei bootstrap em muitos dos meus projetos pessoais, o spotify clone foi um deles,
            sua fraqueza são os modulos prontos, porém essa fraqueza pode ser driblada com facilidade ao sobrescrever os atributos das classes pré definidas."/>
        </div>
        </section>
    )
}

export default Skills