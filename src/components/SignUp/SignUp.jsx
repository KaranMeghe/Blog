import React, { useState } from "react";
import { Input, Button } from "../index";
import authService from "../../appWrite/auth";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../redux/slices/authSlice";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const create = async (data) => {
    setError("");
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const userData = await authService.getCurrentUser();

        if (userData) dispatch(login(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="flex items-center justify-center w-full">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Don&apos;t Have any account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign in
          </Link>
        </p>
        {error && <p className="text-red-500 text-center mt-8">{error}</p>}

        <form onSubmit={handleSubmit(create)} classNamen="mt-8">
          <div className="space-y-5">
            <Input
              label="Name :"
              placeholder="Enter your name"
              type="name"
              {...register("name", { required: true })}
            />

            <Input
              label="Email :"
              placeholder="Enter your email"
              type="email"
              {...register("email", { required: true })}
            />

            <Input
              label="Password :"
              placeholder="Enter your password"
              type="password"
              {...register("password", { required: true })}
            />

            <Button type="submit" className="w-full">
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
