import React, { useState } from "react";
import image from "../assets/hero2b.png";
import Logo from "../assets/isosales1.png";
import logo2 from "../assets/isosales2.png";
import { Link, useNavigate } from "react-router-dom";
import whatsappNumber from "../utils/whatsappNumber";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { IoArrowBackOutline } from "react-icons/io5";
import axios from "../api/axios";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { Loader } from "@mantine/core";
function SignUp() {
  const navigate = useNavigate();
  const [showPasswor, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const signUp = (data) => {
    return axios.post("/client", data);
  };

  const { mutate: signupMutate, isPending: loadingSignup, error } = useMutation(
    {
      mutationFn: signUp,

      onSuccess: (response) => {
        reset();
        const text = response?.data?.message;
        toast.success(text);
        navigate("/login");
      },
      onError: (err) => {
        const text = err.response.data.message;
        toast.error(text);
      },
    }
  );

  const onSubmitting = async (data) => {
    signupMutate(data);
  };
  const theme = localStorage.getItem("theme");

  return (
    <div className="flex min-h-screen theme ">
      <div className=" w-full flex flex-col md:flex-row bg-white dark:bg-gray-800  overflow-hidden ">
        {/* Left Section - Form */}
        <div className="w-full  md:w-1/2 md:px-8 px-4 flex flex-col justify-start overflow-auto xl:mt-[40px]">
          <div className="flex flex-row justify-between items-center border-b-2 border-b-gray-200 dark:border-b-gray-700 mb-4 ">
            <div>
              <img
                src={theme === "light" ? Logo : logo2}
                alt=""
                className="h-[80px] "
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-right font-semibold text-gray-700 dark:text-gray-100 mt-3 md:mt-0">
                Create account
              </h2>
              <p className="text-secondary md:text-right dark:text-gray-300 ">
                Enter your credentials to create account
              </p>
            </div>
          </div>
          <form
            onSubmit={handleSubmit(onSubmitting)}
            className="border border-gray-200 dark:border-gray-700 shadow-sm rounded-md  p-4 "
          >
            <div className="flex flex-col md:flex-row gap-2">
              <div className="mb-3 w-full">
                <label
                  className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-1"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Fullname"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring focus:ring-green-200 dark:focus:ring-green-700 dark:bg-gray-700 dark:text-gray-300"
                  {...register("name", {
                    required: true,
                  })}
                />
                <p className="text-red-500 text-xs mt-1">
                  {errors.name?.type === "required" && "Name is required"}
                </p>
              </div>
              <div className="mb-3 w-full">
                <label
                  className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-1"
                  htmlFor="name"
                >
                  Phone Number
                </label>
                <input
                  id="name"
                  type="number"
                  placeholder="072 123 245"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring focus:ring-green-200 dark:focus:ring-green-700 dark:bg-gray-700 dark:text-gray-300"
                  {...register("phoneNo", {
                    required: true,
                    pattern: {
                      value: /^0\d{9}$/,
                      message: "Invalid phone number.",
                    },
                  })}
                />
                <p className="text-red-500 text-xs mt-1">
                  {errors.phoneNo?.type === "required" &&
                    "Phone Number is required"}
                  {errors.phoneNo?.type === "pattern" && errors.phoneNo.message}
                </p>
              </div>
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-1"
                htmlFor="email"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="example@gmail.com"
                className="w-full px-4  py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring focus:ring-green-200 dark:focus:ring-green-700 dark:bg-gray-700 dark:text-gray-300"
                {...register("email", {
                  required: true,
                })}
              />
              <p className="text-red-500 text-xs mt-1">
                {errors.email?.type === "required" && "Email is required"}
              </p>
            </div>

            <div className="mb-4 relative">
              <label
                className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-1"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                type={showPasswor ? "text" : "password"}
                placeholder="**********"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring focus:ring-green-200 dark:focus:ring-green-700 dark:bg-gray-700 dark:text-gray-300"
                {...register("password", {
                  required: true,
                })}
              />
              <p className="text-red-500 text-xs mt-1">
                {errors.password?.type === "required" && "Password is required"}
              </p>
              <div className=" absolute right-4 text top-1/2 cursor-pointer ">
                {showPasswor ? (
                  <FaEyeSlash
                    onClick={() => {
                      setShowPassword(false);
                    }}
                  />
                ) : (
                  <FaEye
                    onClick={() => {
                      setShowPassword(true);
                    }}
                  />
                )}
              </div>
            </div>

            <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400 mb-4">
              <div>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="accent-primary"
                    {...register("terms", {
                      required: true,
                    })}
                  />
                  <span className="ml-2">
                    I agree to the{" "}
                    <Link to={"/terms"} className="underline">
                      Terms & conditions
                    </Link>
                  </span>
                </label>
                <p className="text-red-500 text-xs mt-1">
                  {errors.terms?.type === "required" &&
                    "Accept terms and conditions to continue"}
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                disabled={loadingSignup}
                type="submit"
                className="w-[50%] disabled:bg-gray-600 disabled:cursor-not-allowed bg-primary text-white py-2 rounded-lg hover:bg-green-700 transition focus:ring focus:ring-green-300 dark:focus:ring-green-500"
              >
                {loadingSignup ? "Please wait...  " : "Sign up"}
                {loadingSignup && <Loader color="green" size={19} />}
              </button>
            </div>
          </form>

          <div className="mt-6 text-sm text-center">
            Have an account?{" "}
            <Link
              to={"/login"}
              className="text-primary dark:text-green-400 hover:underline"
            >
              Login
            </Link>
          </div>
        </div>

        {/* Right Section - Information */}
        <div className="hidden md:flex w-full md:w-1/2 bg-gradient-to-t  from-[#2d2b4e] to-[#135f69] dark:from-[#131220] dark:to-[#120e3a]  text-white p-8 justify-center">
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-center ">
              Welcome, to Isosales POS
            </h2>
            <p className="text-center pb-10 ">
              Create an account, our team will reach out with onboarding details
            </p>
            <img src={image} alt="Dashboard Preview" className="" />
            <p className="text-center mb-4 mt-5">
              Manage you bar/ restaurant with modern and seamless POS. Great to
              have you here!
            </p>
            <div className="flex gap-3 items-center justify-center">
              <p>Need help? we are one call away </p>
              <div>
                <a
                  href={`tel:${whatsappNumber()}`}
                  className="px-6 py-3 bg-light text-primary border border-dark rounded-md  "
                >
                  Call Now{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          navigate("/");
        }}
        className=" px-4 py-2 flex items-center gap-2 rounded-md text-primary underline absolute bottom-5 left-4 "
      >
        <IoArrowBackOutline />
        <span>Home</span>
      </button>
    </div>
  );
}

export default SignUp;
