import React, { useState } from "react";
import image from "../assets/hero2b.png";
import Logo from "../assets/isosales1.png";
import logo2 from "../assets/isosales2.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import whatsappNumber from "../utils/whatsappNumber";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { IoArrowBackOutline } from "react-icons/io5";
import axios from "../api/axios";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { Loader } from "@mantine/core";
import useAuth from "../hooks/useAuth";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showPasswor, setShowPassword] = useState(false);
  const { setAuth, auth, persist, setPersist } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const toDash = location.state?.from?.pathname || "/dashboard/clients";
  const toClient = location.state?.from?.pathname || "/client/overview";

  const login = (loginData) => {
    return axios.post("/auth/login", loginData);
  };

  const { mutate: loginMutate, isPending: loginLoading, error } = useMutation({
    mutationFn: login,
    onSuccess: (response) => {
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      const userId = response?.data?.user_Id;
      const userName = response?.data?.name;
      const email = response?.data?.email;

      setAuth({
        roles,
        accessToken,
        userId,
        userName,
        email,
      });

      localStorage.setItem("userId", JSON.stringify(userId));
      const text = `Welcome back ${userName || ""}`;

      if (roles?.includes("Client")) {
        toast.success(text);
        navigate(toClient, { replace: true });
        reset();
      }
      if (roles?.includes("Admin") || roles?.includes("Manager")) {
        toast.success(text);
        navigate(toDash, { replace: true });
        reset();
      }
    },
    onError: (err) => {
      const text = err?.response.data.message || "something went wrong";

      toast.error(text);
    },
  });

  const onSubmitting = async (data) => {
    loginMutate(data);
  };
  const theme = localStorage.getItem("theme");

  return (
    <div className="flex min-h-screen theme ">
      <div className=" w-full flex flex-col md:flex-row-reverse bg-white dark:bg-gray-800  overflow-hidden ">
        {/* Left Section - Form */}
        <div className="w-full  md:w-1/2 md:px-8 px-4  flex flex-col justify-start overflow-auto xl:mt-[40px]">
          <div className="flex flex-row-reverse justify-between items-center border-b-2 border-b-gray-200 dark:border-b-gray-700 mb-4 ">
            <div>
              <img
                src={theme === "light" ? Logo : logo2}
                alt=""
                className="h-[90px] "
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-start font-semibold text-gray-700 dark:text-gray-100 mt-3 md:mt-0">
                Login
              </h2>
              <p className="text-secondary md:text-start dark:text-gray-300 ">
                Enter your credentials to login.
              </p>
            </div>
          </div>
          <form
            onSubmit={handleSubmit(onSubmitting)}
            className="border border-gray-200 dark:border-gray-700 shadow-sm rounded-md  p-4 "
          >
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
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring focus:ring-green-200 dark:focus:ring-green-700 dark:bg-gray-700 dark:text-gray-300"
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

            <div className="flex justify-center">
              <button
                disabled={loginLoading}
                type="submit"
                className="w-[50%] disabled:bg-gray-600 disabled:cursor-not-allowed bg-primary text-white py-2 rounded-lg hover:bg-green-700 transition focus:ring focus:ring-green-300 dark:focus:ring-green-500"
              >
                {loginLoading ? "Please wait...  " : "Login"}
                {loginLoading && <Loader color="green" size={19} />}
              </button>
            </div>
          </form>

          <div className="mt-6 text-sm text-center">
            Don't have an account?{" "}
            <Link
              to={"/sign-up"}
              className="text-primary dark:text-green-400 hover:underline"
            >
              Sign up
            </Link>
          </div>
        </div>

        {/* Right Section - Information */}
        <div className="hidden md:flex w-full md:w-1/2 bg-gradient-to-t  from-[#2d2b4e] to-[#135f69] dark:from-[#131220] dark:to-[#120e3a]  text-white p-8 justify-center">
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-center ">
              Login, to Isosales POS
            </h2>
            <p className="text-center pb-10 "></p>
            <img src={image} alt="Dashboard Preview" className="" />
            <p className="text-center mb-4 mt-5"></p>
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
        className=" px-4 py-2 flex items-center gap-2 rounded-md text-light underline absolute bottom-5 left-4 "
      >
        <IoArrowBackOutline />
        <span>Home</span>
      </button>
    </div>
  );
}

export default Login;
