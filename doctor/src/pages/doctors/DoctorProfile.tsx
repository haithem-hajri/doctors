import React, { useEffect, useState } from "react";
import HeroProfile from "../../components/doctors-component/HeroProfile";
import Tab from "../../components/doctors-component/Tab";
import About from "../../components/doctors-component/About";
import Reviews from "../../components/doctors-component/Reviews";
import Address from "../../components/doctors-component/Address";
import { useParams } from "react-router-dom";
import axios from "axios";
const DoctorProfile = () => {
 const {id} = useParams()
 const [doctor , setDoctor] = useState<any>()
useEffect(()=>{
  axios
  .get(process.env.REACT_APP_API_URL + "/doctor/"+id)
  .then((res) => {
    setDoctor(res.data);
  })
  .catch((err) => {
    console.log("err:", err);
  });
},[id])
  //about - adress - reviews
  const [tab, setTab] = React.useState<string>("about");
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <HeroProfile  doctor={doctor}/>
      <Tab setState={setTab} state={tab} />
      <div className="max-w-[1200px] m-auto min-h-[50vh] mt-[25px]">
        {tab === "about" ? (
          <About doctor={doctor}/>
        ) : tab === "address" ? (
          <Address  doctor={doctor}/>
        ) : (
          tab === "reviews" && <Reviews />
        )}
      </div>
    </div>
  );
};

export default DoctorProfile;
