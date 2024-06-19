/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { BsX } from 'react-icons/bs';
import { IoImagesOutline } from 'react-icons/io5';
import Cropper from 'react-easy-crop';
import getCroppedImg from './cropImage';

const Create = ({ closeCreate }) => {
    const [currentDiv, setCurrentDiv] = useState('select');
    const [selectedImage, setSelectedImage] = useState(null);
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [rotation, setRotation] = useState(0)
    const [zoom, setZoom] = useState(1)
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
    const [croppedImage, setCroppedImage] = useState(null)
    const [error, setError] = useState('');

    const onCropComplete = (croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels)
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const fileType = file.type.split('/')[0];
            if (fileType === 'image') {
                setSelectedImage(URL.createObjectURL(file));
                setCurrentDiv('preview');
            } else {
                setError("File format Error");
            }
        }
    };

    const handleNext = async () => {
        try {
            const croppedImage = await getCroppedImg(
                selectedImage,
                croppedAreaPixels,
                rotation
            )
            setCroppedImage(croppedImage)
            setCurrentDiv('final');
        } catch (error) {
            console.error('Error cropping image:', error);
        }
    };

    return (
        <>
            <div className="flex items-center justify-center fixed inset-0 z-50 bg-gray-900 bg-opacity-75">
                <button
                    onClick={closeCreate}
                    type="button"
                    className="text-gray-100 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-4 right-4 dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="default-modal">
                    <BsX className='h-8 w-8' />
                    <span className="sr-only">Close modal</span>
                </button>
                {currentDiv === 'select' && (
                    <div id="default-modal" aria-hidden="true" className="overflow-y-auto overflow-x-hidden flex justify-center items-center w-full h-full">
                        <div className="relative p-10 w-full max-w-xl max-h-full">
                            <div className="relative bg-white rounded-lg shadow-lg dark:bg-gray-800">
                                <div className="flex items-center justify-between p-4 border-b border-gray-200 rounded-t dark:border-gray-600">
                                    <div className="flex-grow text-center">
                                        {!error ? (
                                            <div className="flex-grow text-center">
                                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                                    Create New Post
                                                </h3>
                                            </div>
                                        ) : (
                                            <div className="flex-grow text-center">
                                                <h3 className="text-red-500 text-xl font-semibold dark:text-red-500">{error}</h3>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="p-10 m-10 flex flex-col justify-center items-center">
                                    {selectedImage ? (
                                        <img src={selectedImage} alt="Selected" className="w-full h-auto max-h-96 object-contain mb-4" />
                                    ) : (
                                        <IoImagesOutline className="w-40 h-40 text-gray-500 dark:text-gray-400 mb-10" />
                                    )}
                                    <div className="group mb-8">
                                        <label htmlFor="fileInputDragDrop" className="button cursor-pointer font-medium text-blue-700 dark:text-blue-600">
                                            <input id="fileInputDragDrop" type="file" className="sr-only" aria-describedby="validFileFormats" onChange={handleImageChange} />
                                            {selectedImage ? 'Change Image' : 'Select from device'}
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {currentDiv === 'preview' && (
                    <div id="default-modal" aria-hidden="true" className="overflow-y-auto overflow-x-hidden flex justify-center items-center w-full h-full">
                        <div className="relative p-10 w-full max-w-xl max-h-full">
                            <div className="relative bg-white rounded-lg shadow-lg dark:bg-gray-800">
                                <div className="flex items-center justify-between p-4 border-b border-gray-200 rounded-t dark:border-gray-600">
                                    <div className="flex-grow text-center">
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                            Create New Post
                                        </h3>
                                    </div>
                                    <button
                                        onClick={handleNext}
                                        type="button"
                                        className="text-blue-600 bg-transparent hover:text-blue-900 rounded-lg text-lg dark:hover:bg-blue-600 dark:hover:text-white"
                                        data-modal-hide="default-modal">
                                        <span className="">Next</span>
                                    </button>
                                </div>
                                <div className="p-10 m-10 flex flex-col justify-center items-center">
                                    {selectedImage ? (
                                        <div className="w-full h-96 relative">
                                            <Cropper
                                                image={selectedImage}
                                                crop={crop}
                                                rotation={rotation}
                                                zoom={zoom}
                                                aspect={4 / 3}
                                                onCropChange={setCrop}
                                                onRotationChange={setRotation}
                                                onCropComplete={onCropComplete}
                                                onZoomChange={setZoom}
                                            />
                                        </div>
                                    ) : (
                                        <IoImagesOutline className="w-40 h-40 text-gray-500 dark:text-gray-400 mb-10" />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {currentDiv === 'final' && (
                    <div id="default-modal" aria-hidden="true" className="overflow-y-auto overflow-x-hidden flex justify-center items-center w-full h-full">
                        <div className="relative p-10 w-full max-w-xl max-h-full">
                            <div className="relative bg-white rounded-lg shadow-lg dark:bg-gray-800">
                                <div className="flex items-center justify-between p-4 border-b border-gray-200 rounded-t dark:border-gray-600">
                                    <div className="flex-grow text-center">
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                            Create New Post
                                        </h3>
                                    </div>
                                </div>
                                <div className="p-10 m-10 flex flex-col justify-center items-center">
                                    {croppedImage ? (
                                        <img src={croppedImage} alt="Cropped" />
                                    ) : (
                                        <IoImagesOutline className="w-40 h-40 text-gray-500 dark:text-gray-400 mb-10" />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Create;
