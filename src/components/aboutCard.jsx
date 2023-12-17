import React from "react";

export const AboutCard = ({ label1, label2, phrase }) => {
  return (
    <div className="w-full h-full p-8 py-10 shadow shadow-blue-b1 rounded-lg flex flex-col">
      <div className="flex justify-start gap-6 mb-3">
        <img
          src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/icon/affordable.svg"
          alt="AboutCardImg"
        />
        <div className="flex gap-2 items-center font-bold text-2xl">
          <span className="text-blue-400">{label1}</span> <span> {label2}</span>
        </div>
      </div>

      <div className="text-gray-500 font-light">{phrase}</div>
    </div>
  );
};
export default AboutCard;
