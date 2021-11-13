import Stack from "./Stacks"

const Skills = () => {
    return(
        <div className="flex flex-wrap w-screen justify-around items-center mt-8 p-4">
            <Stack title="HTML CSS JS" url="/images/htmlcssjs.png" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur perspiciatis qui itaque eaque eligendi a quo id nam, eveniet numquam quaerat officia architecto quis possimus expedita est quod incidunt maxime."/>
            <Stack title="NextJS" url="/images/nextjs.png" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur perspiciatis qui itaque eaque eligendi a quo id nam, eveniet numquam quaerat officia architecto quis possimus expedita est quod incidunt maxime."/>
            <Stack title="NodeJS" url="/images/nodejs.png" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur perspiciatis qui itaque eaque eligendi a quo id nam, eveniet numquam quaerat officia architecto quis possimus expedita est quod incidunt maxime."/>
        </div>
    )
}

export default Skills