/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { IoPencil } from "react-icons/io5";

const Edit_profile = () => {
    const [changePassword, setChangePassword] = useState(false);
    const [changeEmail, setChangeEmail] = useState(false);
    const [changeName, setChangeName] = useState(false);
    const [changePhone, setChangePhone] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const edit_password = () => {
        setChangePassword(true);
    }
    const edit_email = () => {
        setChangeEmail(true)
    }
    const edit_name = () => {
        setChangeName(true)
    }
    const edit_phone = () => {
        setChangePhone(true)
    }
    const close_edit_password = () => {
        setChangePassword(false);
    }

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const toggleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    }
    return (
        <div>
            <div className="mx-4 min-h-screen max-w-screen-xl sm:mx-4 xl:mx-auto">
                <h1 className="border-b py-6 px-6 text-4xl font-semibold">Edit Profile</h1>
                <div className="grid grid-cols-8 pt-3 sm:grid-cols-10">
                    <div className="col-span-8 overflow-hidden rounded-xl sm:px-8 ">
                        <div className="pt-4">
                            <h1 className="py-2 text-2xl font-semibold">Profile settings</h1>
                        </div>
                        <hr className="mt-4 mb-8" />
                        <p className="py-2 text-xl font-semibold">Name</p>
                        {!changeName ? (
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                <p className="">Your profile name is <strong>user123535363633</strong></p>
                                <button
                                    onClick={edit_name}
                                    className="inline-flex text-sm font-semibold text-blue-600 underline decoration-2">
                                    <span><IoPencil /></span>Edit</button>
                            </div>
                        ) : (
                            <div className="items-center space-y-3 ">
                                <div>
                                    <label htmlFor="name" className="sr-only">Profile Name</label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            className="w-full rounded-lg text-black border border-gray-700 p-2 pe-12 text-sm shadow-sm"
                                        // {...register("confirm_password", {
                                        //   required: true,
                                        //   validate: value => value === watch('password') || "Passwords do not match"
                                        // })}
                                        />
                                    </div>
                                    {/* {errors.confirm_password && <p className="text-red-500 text-sm mt-1">{errors.confirm_password.message}</p>} */}
                                </div>
                                <div className="flex space-x-4 mt-4">
                                    <button className="button rounded-lg">Save Name</button>
                                    <button
                                        onClick={() => setChangeName(false)}
                                        className="button rounded-lg">Cancel</button>
                                </div>
                            </div>
                        )}

                        <hr className="mt-4 mb-8" />
                        <p className="py-2 text-xl font-semibold">Email Address</p>
                        {!changeEmail ? (
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                <p className="">Your email address is <strong>john.doe@company.com</strong></p>
                                <button
                                    onClick={edit_email}
                                    className="inline-flex text-sm font-semibold text-blue-600 underline decoration-2">
                                    <span><IoPencil /></span>Edit</button>
                            </div>
                        ) : (
                            <div className="items-center space-y-3 ">
                                <div>
                                    <label htmlFor="email" className="sr-only">Email Address</label>
                                    <div className="relative">
                                        <input
                                            type="email"
                                            className="w-full rounded-lg border text-black border-gray-700 p-2 pe-12 text-sm shadow-sm"
                                        // {...register("confirm_password", {
                                        //   required: true,
                                        //   validate: value => value === watch('password') || "Passwords do not match"
                                        // })}
                                        />
                                    </div>
                                    {/* {errors.confirm_password && <p className="text-red-500 text-sm mt-1">{errors.confirm_password.message}</p>} */}
                                </div>
                                <div className="flex space-x-4 mt-4">
                                    <button className="button rounded-lg">Save Email</button>
                                    <button
                                        onClick={() => setChangeEmail(false)}
                                        className="button rounded-lg">Cancel</button>
                                </div>
                            </div>
                        )}
                        <hr className="mt-4 mb-8" />
                        <p className="py-2 text-xl font-semibold">Phone Number</p>
                        {!changePhone ? (
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                <p className="">Your phone number is <strong>+254757657268</strong></p>
                                <button
                                onClick={edit_phone}
                                    className="inline-flex text-sm font-semibold text-blue-600 underline decoration-2">
                                    <span><IoPencil /></span>Edit</button>
                            </div>
                        ) : (
                            <div className="items-center space-y-3 ">
                            <div>
                                <label htmlFor="name" className="sr-only">Phone Number</label>
                                <div className="relative">
                                    <input
                                        type="tel"
                                        className="w-full rounded-lg border text-black font-medium border-gray-700 p-2 pe-12 text-sm shadow-sm"
                                    // {...register("confirm_password", {
                                    //   required: true,
                                    //   validate: value => value === watch('password') || "Passwords do not match"
                                    // })}
                                    />
                                </div>
                                {/* {errors.confirm_password && <p className="text-red-500 text-sm mt-1">{errors.confirm_password.message}</p>} */}
                            </div>
                            <div className="flex space-x-4 mt-4">
                                <button className="button rounded-lg">Save Phone</button>
                                <button
                                    onClick={() => setChangePhone(false)}
                                    className="button rounded-lg">Cancel</button>
                            </div>
                        </div>
                        )}

                        <hr className="mt-4 mb-8" />
                        <p className="py-2 text-xl font-semibold">Password</p>
                        {!changePassword ? (
                            <>
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                    <p className="">Password <strong> *******</strong></p>
                                    <button
                                        onClick={edit_password}
                                        className="inline-flex text-sm font-semibold text-blue-600 underline decoration-2">
                                        <span className=''><IoPencil /></span>Edit</button>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="items-center space-y-3 ">
                                    <div>
                                        <label htmlFor="Old_password" className="">Old Password</label>
                                        <div className="relative">
                                            <input
                                                type={showConfirmPassword ? "text" : "password"}
                                                className="w-full rounded-lg border text-black border-gray-700 p-2 pe-12 text-sm shadow-sm"
                                            // {...register("confirm_password", {
                                            //   required: true,
                                            //   validate: value => value === watch('password') || "Passwords do not match"
                                            // })}
                                            />
                                            <button
                                                type="button"
                                                onClick={toggleShowConfirmPassword}
                                                className="absolute inset-y-0 end-0 grid place-content-center px-4"
                                            >
                                                {showConfirmPassword ? (
                                                    <FaRegEye className="text-gray-600" />
                                                ) : (
                                                    <FaRegEyeSlash className="text-gray-600" />
                                                )}
                                            </button>
                                        </div>
                                        {/* {errors.confirm_password && <p className="text-red-500 text-sm mt-1">{errors.confirm_password.message}</p>} */}
                                    </div>
                                    <div>
                                        <label htmlFor="new_password" className="">New Password</label>
                                        <div className="relative">
                                            <input
                                                type={toggleShowPassword ? "text" : "password"}
                                                className="w-full rounded-lg border border-gray-700 p-2 text-black pe-12 text-sm shadow-sm"
                                            // {...register("confirm_password", {
                                            //   required: true,
                                            //   validate: value => value === watch('password') || "Passwords do not match"
                                            // })}
                                            />
                                            <button
                                                type="button"
                                                onClick={toggleShowPassword}
                                                className="absolute inset-y-0 end-0 grid place-content-center px-4"
                                            >
                                                {toggleShowPassword ? (
                                                    <FaRegEye className="text-gray-600" />
                                                ) : (
                                                    <FaRegEyeSlash className="text-gray-600" />
                                                )}
                                            </button>
                                        </div>
                                        {/* {errors.confirm_password && <p className="text-red-500 text-sm mt-1">{errors.confirm_password.message}</p>} */}
                                    </div>

                                    <div>
                                        <label htmlFor="confirm_password" className="">Confirm Password</label>
                                        <div className="relative">
                                            <input
                                                type={showConfirmPassword ? "text" : "password"}
                                                className="w-full rounded-lg border text-black border-gray-700 p-2 pe-12 text-sm shadow-sm"
                                            // {...register("confirm_password", {
                                            //   required: true,
                                            //   validate: value => value === watch('password') || "Passwords do not match"
                                            // })}
                                            />
                                            <button
                                                type="button"
                                                onClick={toggleShowConfirmPassword}
                                                className="absolute inset-y-0 end-0 grid place-content-center px-4"
                                            >
                                                {showConfirmPassword ? (
                                                    <FaRegEye className="text-gray-600" />
                                                ) : (
                                                    <FaRegEyeSlash className="text-gray-600" />
                                                )}
                                            </button>
                                        </div>
                                        {/* {errors.confirm_password && <p className="text-red-500 text-sm mt-1">{errors.confirm_password.message}</p>} */}
                                    </div>
                                </div>
                                <p className="mt-2">Can&apos;t remember your current password. <a className="text-sm font-semibold text-blue-600 underline decoration-2" href="#">Recover Account</a></p>
                                <div className="flex space-x-4 mt-4">
                                    <button className="button rounded-lg">Save Password</button>
                                    <button
                                        onClick={() => close_edit_password()}
                                        className="button rounded-lg">Cancel</button>
                                </div>

                            </>
                        )}

                        <hr className="mt-4 mb-8" />

                        <div className="mb-10">
                            <p className="py-2 text-xl font-semibold">Delete Account</p>
                            <p className="inline-flex items-center rounded-full bg-rose-100 px-4 py-1 text-rose-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" />
                                </svg>
                                Proceed with caution
                            </p>
                            <p className="mt-2">Make sure you have taken backup of your account in case you ever need to get access to your data. We will completely wipe your data. There is no way to access your account after this action.</p>
                            <button className="ml-auto text-sm font-semibold text-rose-600 underline decoration-2">Continue with deletion</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Edit_profile;