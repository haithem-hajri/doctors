import React from "react";
import { Link } from "react-router-dom";
import FacebookLogo from "../../assets/logo/FacebookLogo";
import GithubLogo from "../../assets/logo/GithubLogo";
import GoogleLogo from "../../assets/logo/GoogleLogo";
import HospitalLogo from "../../assets/logo/HospitalLogo";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
type FormInputs = {
  name: string;
  email: string;
  message: string;
};
const ContactUs = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();
  const [Loading, setLoading] = React.useState<boolean>(false);
  const [Errors, setErrors] = React.useState<any>();
  const onSubmit = (data: object) => {
    setLoading(true);
    axios
      .post(process.env.REACT_APP_API_URL + "/contact-us", data)
      .then((res) => {
        navigate("/");
        setLoading(false);
      })
      .catch((err) => {
        setErrors(err.response.data);
        setLoading(false);
      });
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
              {...register("name", { required: "This is required." })}
              className="  rounded-[4px] min-w-[300px] w-full border p-3 hover:outline-none focus:outline-none hover:border-yellow-500 "
              type="text"
              placeholder="Username or Email id "
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
              className="w-full border rounded-[4px] p-3 hover:outline-none focus:outline-none hover:border-yellow-500"
              placeholder="email"
            />
            {errors.email && (
              <p className="text-[12px] text-red-500">
                {errors?.email?.message}
              </p>
            )}
          </div>
          <div className="mb-5 w-full ">
            <textarea
              {...register("message", { required: "This is required." })}
              placeholder="your message"
              rows={4}
              cols={50}
              className="w-full rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-yellow-500"
            ></textarea>
            {errors.name && (
              <p className="text-[12px] text-red-500">
                {errors?.message?.message}
              </p>
            )}
          </div>
        </div>
        <button
          className="mt-5 w-full border p-2 bg-gradient-to-r from-gray-800 bg-gray-500 text-white rounded-[4px] hover:bg-slate-400 scale-105 duration-300"
          type="submit"
          disabled={Loading}
        >
          {Loading ? "..." : "CONTACT"}
        </button>
        <div className="flex justify-center mt-5 text-sm">
          <p className="text-gray-400">or contact us with</p>
        </div>
        <div className="mt-5 flex justify-center gap-3    ">
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
      </form>
    </div>
  );
};

export default ContactUs;
