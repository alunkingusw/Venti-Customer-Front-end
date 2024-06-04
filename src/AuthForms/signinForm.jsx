/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom';
import { useForm } from "react-hook-form";
import { RiEyeFill, RiEyeOffFill } from '@remixicon/react';
import EndPoints from '../Api/baseUrl/endPoints';

const SigninForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, formState: { touchedFields, isDirty, isValid, dirtyFields, isSubmitted, errors }, watch } = useForm();
  const navigate= useNavigate();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  const onSubmit = async (values) => {
    try{
      const {data} = await EndPoints.Auth.login(values)
      console.log(data)
      // navigate('/verification')
    }catch(error){
      console.log(error)
    }
  }

  return (
    <div className="mx-auto max-w-screen-xl justify-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">Welcome Back</h1>

        <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt dolores deleniti
          inventore quaerat mollitia?
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
          <p className="text-center text-lg font-medium">Enter your credentials </p>

          <div>
            <label htmlFor="email" className="sr-only">Email/Phone number</label>
            <div className="relative">
              <input
                type="email"
                className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter email or phone number"
                {...register("text", {
                  required: true,
                  // pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
                })}
              />
              {errors.email && errors.email.type === "required" && (
                <span className="text-sm text-red-700">Email or Phone is required.</span>
              )}
              {/* {errors.email && errors.email.type === "pattern" && (
                <span className="text-sm text-red-700">Email is not valid.</span>
              )} */}
            </div>
          </div>
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter password"
                {...register("password", {
                  required: true,
                  minLength: 6
                })}
              />
              <button
                type="button"
                onClick={toggleShowPassword}
                className="absolute inset-y-0 end-0 grid place-content-center px-4"
              >
                {showPassword ? (
                  <RiEyeOffFill className="text-gray-400" />
                ) : (
                  <RiEyeFill className="text-gray-400" />
                )}
              </button>
              {errors.password && errors.password.type === "required" && (
                <span className="text-sm text-red-700">Password is required.</span>
              )}
              {errors.password && errors.password.type === "minLength" && (
                <span className="text-sm text-red-700">
                  Password should be at-least 6 characters.
                </span>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="button w-full px-5 py-3"
          >
            Sign in
          </button>

          <p className="text-center text-sm text-gray-500">
            No account?
            <Link to='/signup' className="underline">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default SigninForm;