import React from "react";
import HospitalLogo from "../../../assets/logo/HospitalLogo";
import { Link, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import AddAvatar from "../../../components/AddAvatar";
import { SpinnerCircularSplit } from "spinners-react";
import { useSelector } from "react-redux";
import { doctorSignup } from "../../../features/auth/authSlice";
import { useAppDispatch } from "../../../store";
import { SpecialityOptions } from "../../../helper/SpecialityData";
import { SpinnerRoundFilled } from "spinners-react";
import Select from "react-select";
//@ts-ignore
import Modal from "react-modal";
import { toast } from "react-toastify";

type FormInputs = {
  name: string;
  email: string;
  password: string;
  country: string;
  city: string;
  about: string;
  speciality: string;
};
const DoctorSignup = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormInputs>();
  const [modalIsOpen, setIsOpen] = React.useState<boolean>(false);
  const [image, setImage] = React.useState<string>();
  const { isLoading } = useSelector((state: any) => state.auth);
  const user = useSelector((state: any) => state.auth.user);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const notify = () => toast.error("you must add photo !");
  const onSubmit = (data: any) => {
    if (!image) {
      notify();
    } else {
      dispatch(doctorSignup({ ...data, avatar: image }, navigate));
    }
  };
  return (
    <>
      <div className="flex items-center justify-center  ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="min-w-fit flex-col border bg-white px-6 py-14 shadow-md rounded-[4px] mt-[65px] "
        >
          <div className="mb-8 flex justify-center items-center gap-[10px]">
            <HospitalLogo />
            <h1 className="text-[18px] font-semibold rubik text-[#dd2853]">
              Doctors
            </h1>
          </div>
          <div className="px-6 flex flex-col justify-start items-center  gap-4 w-full mb-5 ">
            <img
              className=" w-20 h-20 rounded-full"
              src={
                image
                  ? image
                  : "https://media.istockphoto.com/id/1201514204/vector/person-gray-photo-placeholder-man.jpg?s=612x612&w=0&k=20&c=a-fxeEPpMhBWhYhlwUWKGx1g0YOC80tPGxBYsRy4m-U="
              }
              alt="me"
            />
            <button
              onClick={openModal}
              className=" border border-solid border-[#dd2853] text-[#dd2853] px-4 py-1 rounded-md font-semibold cursor-pointer  "
            >
              add photo
            </button>
          </div>
          <div className="flex flex-col text-sm rounded-md gap-[40px]">
            <div className="flex  justify-center items-center gap-[20px]">
              <div className=" w-full   ">
                <input
                  {...register("name", { required: "This is required." })}
                  className=" min-w-[300px] rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-yellow-500 "
                  type="text"
                  placeholder="Username "
                />
                {errors.name && (
                  <p className="text-[12px]   text-red-500">
                    {errors?.name?.message}
                  </p>
                )}
              </div>
              <div className=" w-full  ">
                <input
                  {...register("email", { required: "This is required." })}
                  className=" min-w-[300px] rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-yellow-500 "
                  type="text"
                  placeholder="Email"
                />
                {errors.email && (
                  <p className="text-[12px]  text-red-500">
                    {errors?.email?.message}
                  </p>
                )}
              </div>
            </div>
            {/********************************************************************/}
            <div className="flex justify-center items-center gap-[20px] ">
              <div className=" w-full ">
                <input
                  {...register("password", { required: "This is required." })}
                  className=" min-w-[300px] border rounded-[4px] p-3 hover:outline-none focus:outline-none hover:border-yellow-500"
                  type="password"
                  placeholder="Password"
                />
                {errors.password && (
                  <p className="text-[12px]  text-red-500">
                    {errors?.password?.message}
                  </p>
                )}
              </div>
              <div className=" w-full mb-5 ">
                <Controller
                  name="speciality"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Select
                      className="   "
                      styles={colourStyles}
                      options={SpecialityOptions}
                      onChange={(value: any) => {
                        onChange(value.value);
                      }}
                    />
                  )}
                />
                {errors.speciality && (
                  <p className="text-[12px]  text-red-500">
                    {errors?.speciality?.message}
                  </p>
                )}
              </div>
            </div>
            {/********************************************************************/}
            <div className="flex justify-between items-center  gap-[20px] ">
              <div className=" w-full ">
                <input
                  {...register("country", { required: "This is required." })}
                  className=" min-w-[300px] rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-yellow-500 "
                  type="text"
                  placeholder="country "
                />
                {errors.country && (
                  <p className="text-[12px]  text-red-500">
                    {errors?.country?.message}
                  </p>
                )}
              </div>
              <div className=" w-full ">
                <input
                  {...register("city", { required: "This is required." })}
                  className=" min-w-[300px] rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-yellow-500 "
                  type="text"
                  placeholder="city "
                />
                {errors.city && (
                  <p className="text-[12px]  text-red-500">
                    {errors?.city?.message}
                  </p>
                )}
              </div>
            </div>
            {/********************************************************************/}
            <div className="mb-5 w-full  ">
              <textarea
                {...register("about", { required: "This is required." })}
                placeholder="about.."
                rows={4}
                cols={50}
                className="mb-5 w-full rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-yellow-500"
              ></textarea>
              {errors.about && (
                <p className="text-[12px]  text-red-500">
                  {errors?.about?.message}
                </p>
              )}
            </div>
          </div>
          <button
            disabled={isLoading}
            className="mt-5 w-full flex justify-center border p-2 bg-gradient-to-r from-gray-800 bg-gray-500 text-white rounded-[4px] hover:bg-slate-400 scale-105 duration-300"
            type="submit"
          >
            {isLoading ? (
              <SpinnerRoundFilled
                size={20}
                thickness={100}
                speed={100}
                color="rgba(172, 57, 102, 1)"
              />
            ) : (
              "SUBMIT"
            )}
          </button>
          <div className="flex justify-center mt-5 text-sm">
            <p className="text-gray-400">
              you have an account ?{" "}
              <Link to="/login" className="cursor-pointer hover:underline ">
                SignUp
              </Link>
            </p>
          </div>
          <span
            onClick={() => navigate(-1)}
            className="flex justify-center mt-5 text-sm cursor-pointer  underline text-gray-500"
          >
            go back
          </span>
        </form>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <AddAvatar setIsOpen={setIsOpen} setDoctorImage={setImage} />
      </Modal>
    </>
  );
};

export default DoctorSignup;

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    minWidth: "500px",
    minHeight: "50vh",
    zIndex: "99999",
    maxHeight: "90vh",
    padding: 0,
  },
};
Modal.defaultStyles.overlay.backgroundColor = "rgba(0,0,0,0.75)";
Modal.defaultStyles.overlay.zIndex = "9999";

const colourStyles = {
  control: (styles: any) => ({
    ...styles,
    backgroundColor: "white",
    padding: "3px",
    border: "1px solid #e5e7eb",
    // paddingTop: "2px",
    // margin: "0",
  }),
  option: (styles: any, { data, isDisabled, isFocused, isSelected }: any) => {
    return {
      ...styles,
      //backgroundColor: isDisabled ? 'red' : 'blue',
      // color: '#FFF',
      // cursor: isDisabled ? 'not-allowed' : 'default',
      // padding: '10px',
    };
  },
};
