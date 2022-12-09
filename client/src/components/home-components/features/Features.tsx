import React from "react";
import FeatureCard from "../../cards/FeatureCard";
import { SpecialityOptions } from "../../../helper/SpecialityData";
const Features = () => {
  return (
    <div className="flex items-center gap-[40px] justify-center flex-wrap">
      {
        SpecialityOptions.map((specialty:any)=>(
          <FeatureCard key={specialty.value} specialty={specialty} />
        )
         
        )
      }
    </div>
  );
};

export default Features;
