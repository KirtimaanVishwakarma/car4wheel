import React from "react";
import FormTextArea from "../../components/forms/textArea";
import FormInput from "../../components/forms/input";
import FormSelect from "./select";
import FileUpload from "./fileUpload";
import MultiInput from "./multiInput";
import Date from "./date";
const FormWrapper = ({
  formObj,
  setInputObj,
  setFile,
  setArrayValue,
  arrayValue,
}) => {
  return (
    <div className="grid grid-cols-6 gap-3 w-full">
      {formObj.map((ele) => {
        if (ele?.type === "textarea") {
          return (
            <div
              key={ele?.id}
              className={
                ele.span === "one"
                  ? "col-span-2"
                  : ele.span === "two"
                  ? "col-span-3"
                  : "col-span-6"
              }
            >
              <FormTextArea item={ele} setInputObj={setInputObj} />
            </div>
          );
        }
        if (ele?.type === "select") {
          return (
            <div
              key={ele?.id}
              className={
                ele.span === "one"
                  ? "col-span-2"
                  : ele.span === "two"
                  ? "col-span-3"
                  : "col-span-6"
              }
            >
              <FormSelect item={ele} setInputObj={setInputObj} />
            </div>
          );
        }
        if (ele?.type === "multiInput") {
          return (
            <div
              key={ele?.id}
              className={
                ele.span === "one"
                  ? "col-span-2"
                  : ele.span === "two"
                  ? "col-span-3"
                  : "col-span-6"
              }
            >
              <MultiInput
                item={ele}
                value={arrayValue}
                setValue={setArrayValue}
              />
            </div>
          );
        }
        if (ele?.type === "file") {
          return (
            <div
              key={ele?.id}
              className={
                ele.span === "one"
                  ? "col-span-2"
                  : ele.span === "two"
                  ? "col-span-3"
                  : "col-span-6"
              }
            >
              <FileUpload item={ele} setFile={setFile} />
            </div>
          );
        }

        if (ele?.type === "date") {
          return (
            <div
              key={ele?.id}
              className={
                ele.span === "one"
                  ? "col-span-2"
                  : ele.span === "two"
                  ? "col-span-3"
                  : "col-span-6"
              }
            >
              <Date item={ele} setInputObj={setInputObj} />
            </div>
          );
        }
        return (
          <span
            key={ele?.id}
            className={
              ele.span === "one"
                ? "col-span-2"
                : ele.span === "two"
                ? "col-span-3"
                : "col-span-6"
            }
          >
            <FormInput item={ele} setInputObj={setInputObj} />
          </span>
        );
      })}
    </div>
  );
};

export default FormWrapper;
