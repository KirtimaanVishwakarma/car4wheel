import { Select } from 'antd';
const { Option } = Select;

const FormSelect = ({item,setInputObj}) => {
  const handleOptionChange = (e) => {
    setInputObj(prev=>{return{...prev,[item.id]:e}});
  };

  return (
    <div className="flex flex-col">
    <label htmlFor={''} className="mb-2">
      {item?.label} <span className='text-red-500'>*</span>
    </label>
      <Select placeholder={item?.placeholder} value={item?.value} name={item.id} onChange={handleOptionChange} className="h-12 w-full">
      <Option disabled>
            {item?.placeholder}
          </Option>
        {item?.options?.map((ele, i) => (
          <Option key={i} value={ele?.value}>
            {ele?.label}
          </Option>
        ))}
      </Select>
     </div>
  );
};

export default FormSelect;
