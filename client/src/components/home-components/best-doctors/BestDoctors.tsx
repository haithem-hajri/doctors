import React, { useEffect, useState } from "react";
import DoctorCard from "../../cards/DoctorCard";
import axios from "axios";
const BestDoctors = () => {
  const [doctors, setDoctors] = useState<object | any>();
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + "/best-doctors")
      .then((res) => {
        setDoctors(res.data);
      })
      .catch((err) => {
        console.log("err:", err);
      });
  }, []);
  return (
    <div className="flex flex-col justify-center max-w-[1200px] m-auto gap-[40px] my-12">
      <div className="flex justify-center  items-center">
        <h1 className="text-[26px] text-center font-semibold rubik text-[#E13856] ">
          Best Doctors
        </h1>
        <button
          className=" border border-solid border-1 border-[#dd2853]
         text-[#dd2853] rounded-lg px-[30px]  ml-auto
          py-[12px] cursor-pointer hover:transform hover:scale-[1.1]
          transition-all	 hover:bg-[#e291a8] rubik"
        >
          All Doctors
        </button>
      </div>
      {doctors?.map((doctor: any) => (
        <DoctorCard key={doctor._id} doctor={doctor} />
      ))}
    </div>
  );
};

export default BestDoctors;
