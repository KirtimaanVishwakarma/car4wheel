import { Select } from 'antd';
const { Option } = Select;
import { useState } from 'react';

const FormSelect = ({item}) => {
//   const [selectedOption, setSelectedOption] = useState('');
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
//   const handleOptionChange = (event) => {
//     setSelectedOption(event.target.value);
//   };

  return (
    <div className="flex flex-col ">
    <label htmlFor={''} className="mb-2">
      {item?.label} <span className='text-red-500'>*</span>
    </label>
      <Select placeholder={item?.placeholder} className="h-12 w-full">
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
