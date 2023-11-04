const FormInput = ({ item, setInputObj }) => {
  const onChange = (e) =>setInputObj(prev=>{return{...prev,[e.target.id]:e.target.value}});
  
  return (
    <div className="flex flex-col ">
      <label htmlFor={''} className="mb-2">
        {item?.label} <span className="text-red-500">*</span>
      </label>
      <input
        id={item?.id}
        type={item?.type||'text'}
        className="out outline-none border border-grey-b1 rounded p-3.5"
        placeholder={item?.placeholder}
        onChange={onChange}
      />
      <span className="text-red-500">Please enter your name</span>
    </div>
  );
};

export default FormInput;
