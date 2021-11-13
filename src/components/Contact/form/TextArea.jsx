const TextArea = (props) => {
  return (
    <>
      <div className="flex flex-col items-start mx-3">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={props.holder}
      >
        {props.holder}
      </label>
        <textarea
        placeholder={props.holder}
          className="
        my-3
         p-3
        placeholder-gray-400
          text-gray-600
          relative  
          bg-white 
          rounded
          text-sm
          border-b-2  border-l-2 border-gray-400
          outline-none
          resize-none 
          focus:ring-1 focus:ring-gray-600 
          w-full
          h-32
          "
        ></textarea>
      </div>
    </>
  );
};

export default TextArea;
