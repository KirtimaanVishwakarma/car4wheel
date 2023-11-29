const FormInput = ({ item, setInputObj }) => {
  const onChange = (e) =>
    setInputObj((prev) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      e.preventDefault();
    }
  };
  return (
    <div className="flex flex-col ">
      <label htmlFor={""} className="mb-2">
        {item?.label}  {item?.required &&<span className='text-red-500'>*</span>}
      </label>
      <input
        id={item?.id}
        required= {item?.required && true}
        min={1}
        onKeyDown={handleKeyDown}
        type={item?.type || "text"}
        className="out outline-none border border-grey-b1 rounded p-3.5"
        placeholder={item?.placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default FormInput;
