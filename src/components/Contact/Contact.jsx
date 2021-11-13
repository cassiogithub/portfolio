
import Form from "./form/Form";

const Contact = () => {
  return (
    <section>
      <div className="py-5 max-w-screen flex flex-col justify-center items-center lg:-my-16 xs:mx-3 min-h-screen ">
          <h2 className="text-3xl text-gray-600 
          font-bold
          text-shadow
           my-3">
            Entre em contato
          </h2>
       <Form/>
      </div>
    </section>
  );
};

export default Contact;
