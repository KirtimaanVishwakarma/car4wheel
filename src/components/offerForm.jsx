import React from 'react';
import { Button, Form, Input, Select } from 'antd';
const { Option } = Select;


const layout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 20,
  },
};

  
export const OfferForm = ({header, placeholder, options}) => {
  const [form] = Form.useForm();
  const onFill = () => {
    form.setFieldsValue({
      brand: 'male',
    });
  };
  return (
    <div className=''>
      <Form form={form} layout="vertical">
        <Form.Item
          name={header}
          label={header}
          rules={[
            {
              required: true,
            },
          ]}
          
        className='font-bold text-lg '>
          <Select placeholder={placeholder} className='h-12'>
            {options.map((item,i)=>(
                <Option key={i} value={item}>{item}</Option>
            ))} 
          

            
          </Select>
        </Form.Item>


      </Form>
    </div>
  );
};
export default OfferForm;
