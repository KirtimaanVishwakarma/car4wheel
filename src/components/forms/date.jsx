import { DatePicker } from 'antd'
import React from 'react'

const Date = () => {
    const onChange = (date, dateString) => {
        console.log(date, dateString);
      };
  return (
    <DatePicker onChange={onChange} />
  )
}

export default Date