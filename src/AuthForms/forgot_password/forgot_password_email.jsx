/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import EndPoints from '../../Api/baseUrl/endPoints';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Success, Error } from '../../components/toasts';

const Forgot_password_email = () => {
    const { register, handleSubmit, formState: { touchedFields, isDirty, isValid, dirtyFields, isSubmitted, errors }, watch } = useForm();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)

    const onSubmit = async (values) => {
        setLoading(true)
        try {
            const { data } = await EndPoints.Auth.forgot_password(values);
            if (data.message === null) { throw Error('An Error occured') }
            else {
                Success(data.message);
                navigate('/directive');
            }
        } catch (error) {
            Error(error.response.data.message)
            console.log(errors)
        } finally {
            setLoading(false)
        }
    }
    return (
        <div className="mx-auto max-w-screen-xl justify-center px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg">
                <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">Forgot Password</h1>

                <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt dolores deleniti
                    inventore quaerat mollitia?
                </p>
                <form onSubmit={handleSubmit(onSubmit)} className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
                    <p className="text-center text-lg font-medium">Enter your Email Address </p>
                    <div>
                        <label htmlFor="email" className="sr-only">Email</label>
                        <div className="relative">
                            <input
                                type="email"
                                className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter email or phone number"
                                {...register("email", {
                                    required: true,
                                    pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
                                })}
                            />
                        </div>
                        {errors.emailOrPhone && errors.emailOrPhone.type === "required" && (
                            <span className="text-sm text-red-700">Email or Phone is required.</span>
                        )}
                        {errors.email && errors.email.type === "pattern" && (
                            <span className="text-sm text-red-700">Enter correct email format.</span>
                        )}
                    </div>
                    {!loading ? (
                        <button
                            type="submit"
                            className="button w-full px-5 py-3"
                        >
                            Submit
                        </button>
                    ) : (
                        <button className='button w-full'>
                            <div className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-gray-400 rounded-full" role="status" aria-label="loading">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </button>
                    )}
                </form>
            </div>
        </div>
    )
}
export default Forgot_password_email;