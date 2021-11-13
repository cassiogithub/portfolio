import TheProject from "./TheProject";

const MyProjects = () => {
  return (
    <>
      <section>
        <div className="flex flex-col justify-around items-center mt-2 xxl:mt-72 bg-gray-900 text-white p-4 pb-8">
          <span className="text-xl flex-nowrap">º</span>
            <div className="flex flex-wrap w-full justify-evenly mt-20">
            <TheProject description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur perspiciatis qui itaque eaque eligendi a quo id nam, eveniet numquam quaerat officia architecto quis possimus expedita est quod incidunt maxime." srcImg="/eu.jpg"/>
            <TheProject description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur perspiciatis qui itaque eaque eligendi a quo id nam, eveniet numquam quaerat officia architecto quis possimus expedita est quod incidunt maxime." srcImg="/eu.jpg"/>
            <TheProject description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur perspiciatis qui itaque eaque eligendi a quo id nam, eveniet numquam quaerat officia architecto quis possimus expedita est quod incidunt maxime." srcImg="/eu.jpg"/>
            </div>
        </div>
      </section>
    </>
  );
};

export default MyProjects;
