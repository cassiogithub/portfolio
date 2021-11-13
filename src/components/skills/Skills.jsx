import Stack from "./Stacks"

const Skills = () => {
    return(
        <section id="Skills">
        <div className="flex flex-wrap w-screen justify-around items-center mt-8 py-28">
            <Stack title="HTML CSS JS" url="/images/htmlcssjs.png" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur perspiciatis qui itaque eaque eligendi a quo id nam, eveniet numquam quaerat officia architecto quis possimus expedita est quod incidunt maxime."/>
            <Stack title="NextJS" url="/images/nextjs.png" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur perspiciatis qui itaque eaque eligendi a quo id nam, eveniet numquam quaerat officia architecto quis possimus expedita est quod incidunt maxime."/>
            <Stack title="Tailwind CSS" url="/images/tailwindcss.png" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur perspiciatis qui itaque eaque eligendi a quo id nam, eveniet numquam quaerat officia architecto quis possimus expedita est quod incidunt maxime."/>
            <Stack title="Bootstrap" url="/images/bootstrap.png" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur perspiciatis qui itaque eaque eligendi a quo id nam, eveniet numquam quaerat officia architecto quis possimus expedita est quod incidunt maxime."/>
        </div>
        </section>
    )
}

export default Skills