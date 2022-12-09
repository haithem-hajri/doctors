import React from "react";
import { Link } from "react-router-dom";
import HospitalLogo from "../../../assets/logo/HospitalLogo";
import GithubLogo from "../../../assets/logo/GithubLogo";
import FacebookLogo from "../../../assets/logo/FacebookLogo";
import GoogleLogo from "../../../assets/logo/GoogleLogo";
import { login } from "../../../features/auth/authSlice";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../store";
import { useNavigate } from "react-router-dom";
import { SpinnerRoundFilled } from "spinners-react";
type FormInputs = {
  email: string;
  password: string;
};
const Login = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useSelector((state: any) => state.auth);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();
  const onSubmit = (data: any) => {
    dispatch(login(data, navigate));
  };
  return (
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
              {...register("email", { required: "This is required." })}
              className=" min-w-[300px] rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-yellow-500 "
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
              className=" min-w-[300px] border rounded-[4px] p-3 hover:outline-none focus:outline-none hover:border-yellow-500"
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
          className="mt-5 flex justify-center w-full border p-2 bg-gradient-to-r from-gray-800 bg-gray-500 text-white rounded-[4px] hover:bg-slate-400 scale-105 duration-300"
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
            "SE CONNECTER"
          )}
        </button>
        <div className="flex justify-center mt-5 text-sm">
          <p className="text-gray-400">or login with</p>
        </div>
        <div className="mt-1 flex justify-center gap-3    ">
          <GoogleLogo />
          <GithubLogo />
          <FacebookLogo />
          <Link
            className="bg-gray-400 h-7 w-7 rounded-3xl text-center grayscale cursor-pointer hover:grayscale-0 scale-105 duration-300 "
            to=""
          >
            ...
          </Link>
        </div>
        <div className="flex justify-center mt-5 text-sm">
          <p className="text-gray-400">
            you dont have an account ?{" "}
            <Link to="/signup" className="cursor-pointer hover:underline ">
              SignUp
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
