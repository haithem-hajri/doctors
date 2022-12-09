import React from "react";

const About = () => {
  return (
    <div className="bg-[#e291a8] h-[80vh] w-full ">
      <div className="max-w-[1200px] flex justify-center items-center m-auto h-full gap-[60px] ">
        <div className="flex flex-col justify-center gap-[20px]">
          <h1 className="text-[40px] font-semibold rubik text-[#22306a] cursor-pointer">
            About Us
          </h1>
          <p className="text-[18px]  font-semibold rubik leading-[1.6em] text-[#22306a] cursor-pointer">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        <img
          className="sm:flex rounded-md  w-[450px] h-auto hidden"
          src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000"
          alt="doc"
        />
      </div>
    </div>
  );
};

export default About;
