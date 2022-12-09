import React from "react";

const FeatureCard = (props: any) => {
  const { specialty } = props;
  return (
    <div
      className="min-w-[160px] min-h-[210px] rounded-md shadow-lg cursor-pointer
       flex flex-col justify-center items-center group hover:bg-[#E13856] transition duration-100 "
    >
      <div className="rounded-full bg-gray-100 p-4  group-hover:bg-[#D0021B] transition duration-100">
       {specialty.logo}
      </div>

      <h2 className="text-[16px] group-hover:text-white rubik mt-6  text-[#dd2853] transition duration-100">
        {" "}
        {specialty.label.toUpperCase()}{" "}
      </h2>
    </div>
  );
};

export default FeatureCard;
