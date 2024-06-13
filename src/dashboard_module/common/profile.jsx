/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { TbTableFilled } from "react-icons/tb";
import { FaWindowRestore, FaLocationDot } from "react-icons/fa6";
import { IoPencil } from "react-icons/io5";
import { RiMailFill } from "react-icons/ri";

const Profile = () => {
    const [previewImage, setPreviewImage] = useState(null);
    const [currentDiv, setCurrentDiv] = useState('posts');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

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
            const response = await fetch('https://your-backend-endpoint.com/upload', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Image upload failed');
            }

            const data = await response.json();
            console.log('Upload successful:', data);
            // Handle success response
        } catch (error) {
            console.error('Error uploading image:', error);
            setError('Error uploading image');
        } finally {
            setLoading(false);
        }
    };

    const handleClick = () => {
        document.getElementById('fileInput').click();
    };
    return (
        <div>
            <div className="relative flex flex-col w-full min-w-0 mb-6 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30 draggable">
                <div className="px-9 pt-9 flex-auto min-h-[70px] pb-0 bg-transparent">
                    <div className="flex flex-wrap mb-6 xl:flex-nowrap">
                        <div className="mb-5 mr-5">
                            <div className="relative inline-block shrink-0 rounded-2xl">
                                {previewImage ? (
                                    <img
                                        className="inline-block shrink-0 rounded-full w-[80px] h-[80px] lg:w-[160px] lg:h-[160px]"
                                        src={previewImage}
                                        alt="Preview"
                                    />
                                ) : (
                                    <img
                                        className="inline-block shrink-0 rounded-full w-[80px] h-[80px] lg:w-[160px] lg:h-[160px]"
                                        src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/avatars/avatar1.jpg"
                                        alt="Default"
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
                                    className="absolute bottom-2 right-2 z-10 text-white bg-gray-700 rounded-full p-1 h-6 w-6 lg:h-8 lg:w-8 flex items-center justify-center"
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
                                        <a className="text-secondary-inverse hover:text-primary transition-colors duration-200 ease-in-out font-semibold text-[1.5rem] mr-1" href=""> Alec Jhonson </a>
                                    </div>
                                    <div className="flex flex-wrap pr-2 mb-4 font-medium">
                                        <a className="flex items-center mb-2 mr-5 text-secondary-dark hover:text-primary" href="">
                                            <span className="mr-1">
                                                <FaLocationDot className="w-5 h-5" />
                                            </span> New York, NY </a>
                                        <a className="flex items-center mb-2 mr-5 text-secondary-dark hover:text-primary" href="">
                                            <span className="mr-1">
                                                <RiMailFill className="w-5 h-5" />
                                            </span> contact@example.com </a>
                                    </div>
                                </div>
                                <div className="flex flex-wrap my-auto">
                                    <button
                                        className="inline-block px-6 py-3 mr-3 bg-neutral-100 hover:bg-neutral-200 text-base font-medium leading-normal text-center align-middle transition-colors duration-150 ease-in-out border-0 shadow-none cursor-pointer rounded-2xl text-muted bg-light border-light hover:bg-light-dark active:bg-light-dark focus:bg-light-dark ">
                                        Edit Profile
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-wrap justify-between">
                                <div className="flex flex-wrap items-center">
                                    <a href="" className="mr-3 mb-2 inline-flex items-center justify-center text-secondary-inverse rounded-full bg-neutral-100 hover:bg-neutral-200 transition-all duration-200 ease-in-out px-3 py-1 text-sm font-medium leading-normal"> 320 Following </a>
                                    <a href="" className="mr-3 mb-2 inline-flex items-center justify-center text-secondary-inverse rounded-full bg-neutral-100 hover:bg-neutral-200 transition-all duration-200 ease-in-out px-3 py-1 text-sm font-medium leading-normal"> 2.5k Followers </a>
                                </div>
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
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
        </div>
    )
}

export default Profile;