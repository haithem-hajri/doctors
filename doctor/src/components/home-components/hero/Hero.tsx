import React from "react";

const Hero = () => {
  return (
    <div className="h-[60vh] w-full ">
      <div className="max-w-[1200px] m-auto px-[10%] flex justify-center items-center gap-[30px] flex-col h-full">
        <h1 className="arvo text-[#22306a] text-[50px] font-normal  text-center leading-[1.1em]">
          Nous sommes un studio digital de{" "}
          <strong className="text-[#dd2853]">design</strong> et de{" "}
          <strong className="text-[#dd2853]">création</strong> de produits
          numériques
        </h1>
        <button
          className="bg-[#dd2853]
         text-white rounded-lg px-[40px]
          w-[300px]
          py-[16px] cursor-pointer hover:transform hover:scale-[1.1]
          transition-all	 hover:bg-[#e291a8] rubik"
        >
         En savoir plus
        </button>
      </div>
    </div>
  );
};

export default Hero;
