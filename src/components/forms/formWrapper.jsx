import React from 'react';
import FormTextArea from '../../components/forms/textArea';
import FormInput from '../../components/forms/input';
import FormSelect from './select';
const FormWrapper = ({ formObj,setInputObj}) => {
  return (
    <div className="grid grid-cols-6 gap-3 w-full">
      {formObj.map((ele) => {
        if (ele?.type === 'textarea') {
          return (
            <div
              key={ele?.id}
              className={
                ele.span === 'one'
                  ? 'col-span-2'
                  : ele.span === 'two'
                  ? 'col-span-3'
                  : 'col-span-6'
              }
            >
              <FormTextArea item={ele} />
            </div>
          );
        }
        if (ele?.type === 'select') {
          return (
            <div
              key={ele?.id}
              className={
                ele.span === 'one'
                  ? 'col-span-2'
                  : ele.span === 'two'
                  ? 'col-span-3'
                  : 'col-span-6'
              }
            >
              <FormSelect item={ele} />
            </div>
          );
        }
        return (
          <span
            key={ele?.id}
            className={
              ele.span === 'one'
                ? 'col-span-2'
                : ele.span === 'two'
                ? 'col-span-3'
                : 'col-span-6'
            }
          >
            <FormInput item={ele} setInputObj={setInputObj}/>
          </span>
        );
      })}
    </div>
  );
};

export default FormWrapper;
