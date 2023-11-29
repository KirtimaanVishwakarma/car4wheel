/* eslint-disable react/prop-types */
import TextArea from 'antd/es/input/TextArea';

const FormTextArea = ({item, setInputObj}) => {
  const onChange = (e) =>{setInputObj(prev=>{return{...prev,[e.target.id]:e.target.value}})};
  return (
    <div className="flex flex-col ">
        <label htmlFor={''} className="mb-2">
        {item?.label} {item?.required &&<span className='text-red-500'>*</span>}
        </label>
        <textarea required={item?.required && true} id={item?.id} value={item?.value} onChange={onChange} rows={4} placeholder={item?.placeholder}
          className="out outline-none border border-grey-b1 rounded p-3.5"
        />
      </div>
  )
}

export default FormTextArea