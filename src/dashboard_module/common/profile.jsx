/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { TbTableFilled } from "react-icons/tb";
import { FaWindowRestore, FaCircleUser, FaPhone } from "react-icons/fa6";
import { IoPencil } from "react-icons/io5";
import { RiMailFill } from "react-icons/ri";
import EndPoints from '../../Api/baseUrl/endPoints';
import { Success, Error } from '../../components/toasts';

const Profile = () => {
    const [previewImage, setPreviewImage] = useState(null);
    const [currentDiv, setCurrentDiv] = useState('posts');
    const [divs, setDivs] = useState('profile');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState([]);

    const fetch_user = async () => {
        try {
            const { data } = await EndPoints.profile.fetch_user_profile()
            if (data.status != 200) {
                throw new Error('An Error occurred!')
            }
            setUser(data)
        } catch (error) {
            Error(error.response.data.error || 'Profile doesnot exist!')
        }
    }

    useEffect(() => {
        fetch_user()
    }, [])

    const handleFileInputChange = async (event) => {
        const file = event.target.files[0];
        if (file) {
            if (!file.type.startsWith('image/')) {
                setError('Please select a valid image file');
                setPreviewImage(null);
                return;
            }
            setError('');
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result);
            };
            reader.readAsDataURL(file);

            // Automatically submit the image to the backend
            await uploadImage(file);
        } else {
            setPreviewImage(null);
        }
    };

    const uploadImage = async (file) => {
        const formData = new FormData();
        formData.append('image', file);
        setLoading(true);

        try {
            const { data } = await EndPoints.profile.update_profile({
                profilePicture: formData,
            });

            if (data.status != 200) {
                throw new Error('Image upload failed');
            }
            Success(data.message)
        } catch (error) {
            setError('Error uploading image');
        } finally {
            setLoading(false);
        }
    };

    const handleClick = () => {
        document.getElementById('fileInput').click();
    };
    return (
        <>
            <main className="h-[calc(100vh-5rem)] px-4 flex flex-col items-center">
                {divs === 'profile' && (
                    <div className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-clip-border rounded-2xl bg-light/30 draggable ">
                        <div className="px-9 pt-9 flex-auto min-h-[70px] pb-0 bg-transparent">
                            <div className="flex flex-wrap mb-6 xl:flex-nowrap items-center">
                                <div className="mb-5 mr-5">
                                    <div className="relative inline-block shrink-0 rounded-2xl">
                                        {previewImage ? (
                                            <img
                                                className="inline-block shrink-0 rounded-full w-[80px] h-[80px] lg:w-[160px] lg:h-[160px]"
                                                src={previewImage}
                                                alt="Preview"
                                            />
                                        ) : (
                                            <FaCircleUser
                                                className="inline-block shrink-0 rounded-full w-20 h-20 lg:w-40 lg:h-40"
                                            />
                                        )}
                                        <input
                                            type="file"
                                            accept="image/jpeg,image/png,image/jpg"
                                            id="fileInput"
                                            className="hidden"
                                            onChange={handleFileInputChange}
                                        />
                                        <button
                                            type="button"
                                            onClick={handleClick}
                                            className="absolute bottom-2 right-2 z-10 bg-gray-300 dark:bg-gray-700 rounded-full p-1 h-6 w-6 lg:h-8 lg:w-8 flex items-center justify-center"
                                        >
                                            <IoPencil className="h-full w-full" />
                                        </button>
                                        {error && (
                                            <p className="absolute bottom-0 z-10 left-0 text-red-500 text-xs mt-2">{error}</p>
                                        )}
                                        <div className="group/tooltip relative"></div>
                                    </div>
                                </div>
                                <div className="grow">
                                    <div className="flex flex-wrap items-start justify-between mb-2">
                                        <div className="flex flex-col">
                                            <div className="flex items-center mb-2">
                                                <p className="text-secondary-inverse hover:text-primary transition-colors duration-200 ease-in-out font-semibold text-[1.5rem] mr-1">
                                                    {user.username}
                                                </p>
                                            </div>
                                            <div className="flex flex-wrap pr-2 mb-4 font-medium">
                                                <p className="flex items-center mb-2 mr-5 hover:text-primary">
                                                    <span className="mr-1">
                                                        <FaPhone className="w-5 h-5" />
                                                    </span> {user.phoneNumber}
                                                </p>
                                                <p className="flex items-center mb-2 mr-5 text-secondary-dark hover:text-primary">
                                                    <span className="mr-1">
                                                        <RiMailFill className="w-5 h-5" />
                                                    </span>{user.email}
                                                </p>
                                            </div>

                                        </div>
                                        <div className="flex flex-wrap my-auto">
                                            <Link
                                                to='/edit-profile'
                                                className="inline-block px-6 py-3 mr-3 bg-gray-300 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-base font-medium leading-normal text-center align-middle transition-colors duration-150 ease-in-out border-0 shadow-none cursor-pointer rounded-2xl text-muted bg-light border-light hover:bg-light-dark active:bg-light-dark focus:bg-light-dark ">
                                                Edit Profile
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-6 mx-6 mt-6 text-center border-t border-gray-200 dark:border-gray-700/50">
                                    <div>
                                        <div className="w-full px-6">
                                            <p className="mb-4 font-light leading-relaxed text-gray-600 dark:text-gray-400">
                                                {user.bio || ''}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            <hr className="w-full h-px border-neutral-200" />
                            <div className="hidden sm:flex group flex-wrap items-center justify-center text-[1.15rem] font-semibold list-none border-b-2 border-transparent border-solid">
                                <Link onClick={() => setCurrentDiv('posts')}
                                    className="flex items-center mt-2 -mb-[2px]">
                                    <TbTableFilled className='mr-2' />
                                    <span
                                        aria-controls="summary"
                                        className="py-5 mr-10 sm:mr-3 lg:mr-10 transition-colors duration-200 ease-in-out border-b-2 border-transparent group-[.active-summary]:border-primary group-[.active-summary]:text-primary text-muted hover:border-primary"
                                    >
                                        Posts
                                    </span>
                                </Link>
                                <Link onClick={() => setCurrentDiv('saved')}
                                    className="flex items-center mt-2 -mb-[2px]">
                                    <FaWindowRestore className='mr-2' />
                                    <span
                                        aria-controls="assignments"
                                        className="py-5 mr-1 sm:mr-3 lg:mr-10 transition-colors duration-200 ease-in-out border-b-2 border-transparent group-[.active-assignments]:border-primary group-[.active-assignments]:text-primary text-muted hover:border-primary"
                                    >
                                        Saved
                                    </span>
                                </Link>
                            </div>

                            <div className=" sm:hidden group flex flex-wrap items-center justify-center text-[1.15rem] font-semibold list-none border-b-2 border-transparent border-solid active-assignments">
                                <Link onClick={() => setCurrentDiv('posts')}
                                    className="flex items-center mt-2 -mb-[2px]">
                                    <TbTableFilled className='mr-2' />
                                    <span
                                        aria-controls="summary"
                                        className="py-5 mr-10 sm:mr-3 lg:mr-10 transition-colors duration-200 ease-in-out border-b-2 border-transparent group-[.active-summary]:border-primary group-[.active-summary]:text-primary text-muted hover:border-primary">
                                        Posts
                                    </span>
                                </Link>

                                <Link onClick={() => setCurrentDiv('saved')}
                                    className="flex items-center mt-2 -mb-[2px]">
                                    <FaWindowRestore className='mr-2' />
                                    <span aria-controls="assignments"
                                        className="py-5 mr-1 sm:mr-3 lg:mr-10 transition-colors duration-200 ease-in-out border-b-2 border-transparent group-[.active-assignments]:border-primary group-[.active-assignments]:text-primary text-muted hover:border-primary">
                                        Saved
                                    </span>
                                </Link>
                            </div>
                            <div>
                                <hr className="w-full h-px border-neutral-200" />
                                {currentDiv === 'posts' && (
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        <div>
                                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="" />
                                        </div>
                                        <div>
                                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="" />
                                        </div>
                                        <div>
                                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt="" />
                                        </div>
                                        <div>
                                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt="" />
                                        </div>
                                        <div>
                                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt="" />
                                        </div>
                                        <div>
                                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" alt="" />
                                        </div>
                                        <div>
                                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg" alt="" />
                                        </div>
                                        <div>
                                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg" alt="" />
                                        </div>
                                        <div>
                                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg" alt="" />
                                        </div>
                                        <div>
                                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg" alt="" />
                                        </div>
                                        <div>
                                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg" alt="" />
                                        </div>
                                        <div>
                                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg" alt="" />
                                        </div>
                                    </div>
                                )}
                                {currentDiv === 'saved' && (
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        <div>
                                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="" />
                                        </div>
                                        <div>
                                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="" />
                                        </div>
                                        <div>
                                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt="" />
                                        </div>
                                        <div>
                                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt="" />
                                        </div>
                                        <div>
                                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt="" />
                                        </div>
                                        <div>
                                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" alt="" />
                                        </div>
                                        <div>
                                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg" alt="" />
                                        </div>
                                        <div>
                                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg" alt="" />
                                        </div>
                                        <div>
                                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg" alt="" />
                                        </div>
                                        <div>
                                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg" alt="" />
                                        </div>
                                        <div>
                                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg" alt="" />
                                        </div>
                                        <div>
                                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg" alt="" />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
                {/* {divs === 'edit_profile' && (
                    <div>
                        <button
                            onClick={() => setDivs('profile')}
                            className='flex items-center ml-0'>
                            <IoIosArrowBack className='h-6 w-6' />
                            <p className='font-bold hover:underline '>Back</p>
                        </button>
                        <Edit_profile />
                    </div>
                )} */}
            </main>
        </>
    )
}

export default Profile;