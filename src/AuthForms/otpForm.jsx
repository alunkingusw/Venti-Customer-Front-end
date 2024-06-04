/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

const OtpForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = async (values) => {
    console.log(values);
  }

  return (
    <div className="mx-auto max-w-screen-xl justify-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">Verify Your Account</h1>
        <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt dolores deleniti
          inventore quaerat mollitia?
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
          <p className="text-center text-lg font-medium">OTP code has been sent to ek******.com</p>

          <div>
            <label htmlFor="code" className="sr-only">Verification Code</label>
            <div className="relative">
              <input
                type="text"
                maxLength={6}
                className="w-full items-center rounded-lg border border-gray-200 p-4 pe-12 text-md shadow-sm"
                placeholder="Enter code here"
                {...register("code", {
                  required: "Code is required.",
                  pattern: {
                    value: /^[0-9]{6}$/,
                    message: "Code must be exactly 6 digits."
                  }
                })}
              />
              {errors.code && <span className="text-sm text-red-700">{errors.code.message}</span>}
            </div>
          </div>
          <button
            type="submit"
            className="button w-full px-5 py-3"
          >
            Verify
          </button>
          <p className="text-center text-sm text-gray-500">
            Did not get code?
            <Link to='#' className="underline">Resend</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default OtpForm;
