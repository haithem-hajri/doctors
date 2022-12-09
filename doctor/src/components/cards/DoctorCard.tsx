import React from "react";
import { useNavigate, Link } from "react-router-dom";
// @ts-ignore
import ReactStars from "react-rating-stars-component";
const DoctorCard = (props: any) => {
  const { doctor } = props;
  const navigate = useNavigate();
  return (
    <Link
      to={"/doctors/" + doctor?._id}
      state={ doctor }
      className=" relative flex justify-between items-center p-8 rounded-md shadow-lg min-h-[180px] bg-gray-200 "
    >
      <img
        className="absolute object-cover w-[80px] h-[80px] rounded-full bg-white p-1 left-[-42px] "
        src={doctor?._doctor?.avatar}
        alt="doctor's name"
      />

      <div className="flex flex-col ml-[20px] justify-start flex-1">
        <h2 className="text-[20px] font-semibold rubik text-[#22306a] cursor-pointer ">
          {doctor?.name}
        </h2>
        <p className="text-[14px] font-semibold rubik   ">
          {doctor?._doctor?.speciality}
        </p>
        <p className="max-w-[500px] text-[12px] rubik   	">
          {doctor?._doctor?.about}
        </p>
      </div>
      <div className="items-start justify-start flex flex-col mr-6">
        <div className="flex gap-[6px] items-center ">
          {" "}
          <p className="font-semibold">Rating :</p>
          <ReactStars
            count={5}
            // onChange={ratingChanged}
            size={24}
            value={5}
            edit={false}
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
          />
        </div>
        <div className="flex gap-[6px]">
          <p className="font-semibold">Since :</p>
          <p>2014</p>
        </div>
      </div>
      <button
        onClick={() => navigate("doctors/" + doctor?._id)}
        className="bg-[#dd2853]
         text-white rounded-lg px-[30px] 
          py-[12px] cursor-pointer hover:transform hover:scale-[1.1]
          transition-all	 hover:bg-[#e291a8] rubik"
      >
        Voir plus
      </button>
    </Link>
  );
};

export default DoctorCard;
