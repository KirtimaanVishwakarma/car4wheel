import { DatePicker, Form } from "antd";
import React from "react";

const DateInput = ({ item, setInputObj }) => {
  const onChange = (date, dateString) => {
    const dateStr = new Date(dateString).getTime();
    setInputObj((prev) => {
      return { ...prev, [item.id]: dateStr };
    });
  };
  return (
    <div className="flex flex-col ">
      <label htmlFor={""} className="mb-2">
        {item?.label} {item?.required &&<span className='text-red-500'>*</span>}
      </label>
      <DatePicker required= {item?.required && true}
        placeholder={item?.placeholder}
        size={"large"}
        onChange={onChange}
      />
    </div>
  );
};

export default DateInput;
