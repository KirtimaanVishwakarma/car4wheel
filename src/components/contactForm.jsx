import React from 'react';
import { Button, Form, Input, Space } from 'antd';
import TextArea from 'antd/es/input/TextArea';
const SubmitButton = ({ form }) => {
  const [submittable, setSubmittable] = React.useState(false);

  // Watch all values
  const values = Form.useWatch([], form);
  React.useEffect(() => {
    form
      .validateFields({
        validateOnly: true,
      })
      .then(
        () => {
          setSubmittable(true);
        },
        () => {
          setSubmittable(false);
        }
      );
  }, [values]);
  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      Submit
    </Button>
  );
};
const ContactForm = () => {
  const handleMobileNumberChange = (e) => {
    let input = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    if (input.length > 10) {
      input = input.slice(0, 10); // Restrict to 10 digits
    }
    form.setFieldsValue({ mobileNumber: input });
  };
  const [form] = Form.useForm();
  return (
    <Form form={form} name="validateOnly" layout="vertical" autoComplete="off">
      <Form.Item
        // name="name"
        // label="Full Name"
        // rules={[
        //   {
        //     required: true,
        //   },
        // ]}
        // className="mb-2 "
    
      >
        <Input className="rounded p-3" />
      </Form.Item>
      
      <div className="flex justify-between gap-4">
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              type: 'email',
              message: 'Please enter a valid email address',
            },
          ]}
          className="w-full"
        >
          <Input
            type="email"
            placeholder="Enter your email"
            className="rounded p-3"
          />
        </Form.Item>

        <Form.Item
          name="mobileNumber"
          label="Contact No."
          rules={[
            {
              required: true,
            },
          ]}
          className="w-full"
        >
          <Input onChange={handleMobileNumberChange} className="rounded p-3" />
        </Form.Item>
      </div>
      <Form.Item
        name="name"
        label="Subject"
        rules={[
          {
            required: true,
          },
        ]}
        className="mb-2 "
      >
        <Input className="rounded p-3" />
      </Form.Item>
{/* 
      <Form.Item
        name="name"
        label="Message"
        rules={[
          {
            required: true,
          },
        ]}
        className="mb-2 "
      >
        <TextArea rows={4} />
      </Form.Item> */}
      <div className="flex flex-col ">
        <label htmlFor={''} className="mb-2">
          name <span className='text-red-500'>*</span>
        </label>
        <textarea rows={4} 
          className="out outline-none border border-grey-b1 rounded p-3.5"
        />
        <span className="text-red-500">Please enter your name</span>
      </div>
      <Form.Item>
        <Button htmlType="submit" className="px-4 h-12">
          Submit Form
        </Button>
      </Form.Item>
    </Form>
  );
};
export default ContactForm;
