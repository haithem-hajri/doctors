import React from "react";
import Select from "react-select";
import { BsSearch } from "react-icons/bs";
import { SpecialityOptions } from "../../helper/SpecialityData";
const FiltreBar = (props: any) => {
  const { speciality, setSpeciality, name, setName } = props;

  return (
    <div className="max-w-[1200px] m-auto min-h-[44vh] p-[20px]">
      <h1 className="arvo text-[#22306a] text-[30px] font-normal  mt-[70px] leading-[1.1em] my-8">
        Find local doctors who take your insurance
      </h1>
      <div className="border border-solid border-1 divide-[#22306a] border-[#22306a]  rounded-lg flex gap-[20px] divide-x-2">
        <div className="flex flex-1 items-center gap-[10px] p-3">
          <BsSearch className="text-[30px] text-[#22306a]" />
          <input
            className="border-none p-2 w-full placeholder-text-[22px] placeholder-rubik
             placeholder-[#22306a] placeholder-semibold min-h-[20px] bg-transparent hover:outline-none focus:outline-none"
            type={"text"}
            placeholder="Find a Doctor ..."
            value={name}
            onChange={(e: any) => setName(e.target.value)}
          />
        </div>
        <div className="flex justify-center items-center">
          <Select
            options={SpecialityOptions}
            placeholder={<div className="text-[#22306a]">Select category</div>}
            className="border-none"
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                border: 0,
                boxShadow: "none",
                backgroundColor: "transparent",
                borderColor: state.isFocused ? "transparent" : "transparent",
                width: "100%",
                minWidth: "200px",
              }),
            }}
            value={speciality}
            onChange={(e: any) => setSpeciality(e)}
          />
        </div>
        <div className="">
          <button className=" h-full bg-[#dd2853] text-white cursor-pointer rounded-r-lg p-4">
            <BsSearch className="text-[30px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FiltreBar;

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
