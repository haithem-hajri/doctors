import React from "react";
import HospitalLogo from "../../../assets/logo/HospitalLogo";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
//import { useDispatch } from "react-redux";
import { signup } from "../../../features/auth/authSlice";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../store";
import { SpinnerRoundFilled } from "spinners-react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
type FormInputs = {
  name: string;
  email: string;
  password: string;
};
const UserSignup = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isLoading } = useSelector((state: any) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();
  
  const onSubmit = (data: any) => {
    dispatch(signup(data, navigate));
  };
  return (
    <>
      <ToastContainer theme="light" />
      <div className="flex items-center justify-center h-screen">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="min-w-fit flex-col border bg-white px-6 py-14 shadow-md rounded-[4px] "
        >
          <div className="mb-8 flex justify-center items-center gap-[10px]">
            <HospitalLogo />
            <h1 className="text-[18px] font-semibold rubik text-[#dd2853]">
              Doctors
            </h1>
          </div>
          <div className="flex flex-col text-sm rounded-md">
            <div className="mb-5 w-full ">
              <input
                {...register("name", { required: "This is required." })}
                className="mb-5 min-w-[300px] rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-yellow-500 "
                type="text"
                placeholder="Username "
              />
              {errors.name && (
                <p className="text-[12px]  text-red-500">
                  {errors?.name?.message}
                </p>
              )}
            </div>
            <div className="mb-5 w-full ">
              <input
                {...register("email", { required: "This is required." })}
                className="mb-5 min-w-[300px] rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-yellow-500 "
                type="text"
                placeholder="Email"
              />
              {errors.email && (
                <p className="text-[12px] text-red-500">
                  {errors?.email?.message}
                </p>
              )}
            </div>
            <div className="mb-5 w-full ">
              <input
                {...register("password", { required: "This is required." })}
                className="mb-5 min-w-[300px] border rounded-[4px] p-3 hover:outline-none focus:outline-none hover:border-yellow-500"
                type="password"
                placeholder="Password"
              />
              {errors.password && (
                <p className="text-[12px] text-red-500">
                  {errors?.password?.message}
                </p>
              )}
            </div>
          </div>
          <button
            className="mt-5 w-full  flex justify-center border p-2 bg-gradient-to-r from-gray-800 bg-gray-500 text-white rounded-[4px] hover:bg-slate-400 scale-105 duration-300"
            type="submit"
            disabled={isLoading}
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
            className="flex justify-center mt-5 text-sm cursor-pointer underline text-gray-500"
          >
            go back
          </span>
        </form>
      </div>
    </>
  );
};

export default UserSignup;
