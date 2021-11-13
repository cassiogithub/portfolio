import Submit from "./BtnSubmit";
import Input from "./Input";
import TextArea from "./TextArea";
const Form = () => {
    return(
        <div className="mb-3 pt-0 xs:p-0 w-11/12 sm:p-10 flex flex-wrap justify-center items-center" data-aos="fade-left">
        <form action="">
          <div className="flex justify-between flex-wrap min-w-full">
            <Input holder="Nome"/>
            <Input holder="Sobrenome"/>
          </div>
          <div className="flex justify- flex-row flex-wrap min-w-full">
            <Input holder="Email"/>
          </div>
          <div>
              <TextArea holder="Me deixe uma messagem"/>
          </div>
          <Submit />
        </form>
      </div>
    )
}

export default Form