const HeroProfile = (props: any) => {
  const { doctor } = props;
  return (
    <div className="min-h-[40vh] w-full  bg-[#dd2853] mt-[72px] flex ">
      <div className="max-w-[1200px] m-auto w-full flex items-center ">
        <div className="flex-1 flex flex-col justify-center">
          <img
            className=" object-cover w-[100px] h-[100px] rounded-full bg-white p-1  "
            src={doctor?._doctor?.avatar}
            alt="doctor's name"
          />
          <h1 className="text-[18px] font-semibold rubik text-white mt-4 leading-[16px] ">
            {doctor?.name}
          </h1>
          <p className="text-white text-[14px]  rubik ">
            {doctor?._doctor?.speciality}
          </p>
        </div>
        <button
          className="bg-[#dd2853]
         text-white rounded-lg px-[30px]  border border-solide border-white
          py-[12px] cursor-pointer hover:transform hover:scale-[1.1]
          transition-all	 hover:bg-[#e291a8] rubik"
        >
          Call
        </button>
      </div>
    </div>
  );
};

export default HeroProfile;
