import React from "react";

const About = (props:any) => {
  const {doctor} = props;
  return (
    <div>
      <p className="max-w-[600px] font-[16px] rubik">
        {doctor?._doctor?.about}
      </p>
    </div>
  );
};

export default About;
