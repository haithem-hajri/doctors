import React from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center min-h-[60vh] gap-[30px]">
      <button
        onClick={() => navigate("/signup/user")}
        className="bg-[#dd2853]
         text-white rounded-lg px-[40px]
          w-[300px]
          py-[16px] cursor-pointer hover:transform hover:scale-[1.1]
          transition-all	 hover:bg-[#e291a8] rubik"
      >
        SignUp As User
      </button>
      <button
        onClick={() => navigate("/signup/doctor")}
        className="bg-[#dd2853]
         text-white rounded-lg px-[40px]
          w-[300px]
          py-[16px] cursor-pointer hover:transform hover:scale-[1.1]
          transition-all	 hover:bg-[#e291a8] rubik"
      >
        SignUp As Doctor
      </button>
    </div>
  );
};

export default Signup;
