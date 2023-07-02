"use client"
import React, { useState, ChangeEvent, FormEvent, MouseEvent } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';



const SubmitProposal: React.FC = () => {

    const [formData, setFormData] = useState<{
        name: string;
        email: string;
         file: File | null;
        description: string;
        message: string;
        website: string;
        socialmedia: string;
        location: string;
     
         }>({

        name: '',
        description: '',
        message: '',
        email: '',
        website: '',
        location: '',
        socialmedia: '',
        file: null
    });

    const [passwordError, setPasswordError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [fileError, setFileError] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);


    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (e.target.name === 'files') {
            const fileInput = e.target as HTMLInputElement;
            const file = fileInput.files?.[0] || null;
            const fileWithinSizeLimit = file && file.size <= 2 * 1024 * 1024;

            if (fileWithinSizeLimit) {
                setFileError(false);
                setSelectedFile(file);
                setFormData({
                    ...formData,
                    file: file
                });
            } else {
                setFileError(true);
            }
        } else {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
        }
    };

    const handleDeleteFile = () => {
        setSelectedFile(null);
    };


    // const toggleShowPassword = () => {
    //     setShowPassword(!showPassword);
    // };

    // const toggleShowConfirmPassword = () => {
    //     setShowConfirmPassword(!showConfirmPassword);
    // };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
      
        
        // Handle form submission logic here
        console.log(formData);
        // Reset the form
        setFormData({
            name: '',
            description: '',
            message: '',
            email: '',
            website: '',
            location: '',
            socialmedia: '',
            file: null

        });
        setPasswordError(false);
    };

    return (
        <>
            <div className="flex items-start flex-col bg-white w-[100%] -ml-4">
                <p className="dashboard-txt flex flex-col text-bold justify-center items-center h-[68px] text-[#131316] text-[20px] leading-[24px]">
                    Submit Proposal
                </p>
                <div className="w-[100%] lg:flex justify-between px-4 lg:bg-contain hidden  items-center " style={{ backgroundImage: `url('/images/dashframe.png')` }} >
                    <div className="flex flex-col justify-center  h-[64px] " >
                        <p className=" text-[24px] text-white text-center -mb-2">Welcome, Innovator ✨</p>
                    </div>
                </div>
                <div className="w-[100%]">
                    <div className="flex flex-col lg:mt-[12px] mt-[18px]   gap-y-[12px]">
                        <div className="lg:h-[980px] w-[100%] border-[2px]  lg:px-[30px] lg:py-[20px] justify-between  border-[#4B82EF] p-[8px] ">
                            <h1 className="text-[40px] text-center text-[#146BFF] font-extrabold mb-4">Submit proposal</h1>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-6">
                                    {/* <label htmlFor="name" className="block mb-1 font-semibold">Name</label> */}
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder='Project name'
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="border-b-2 border-gray-300 px-4 py-2 outline-none rounded-md w-full"
                                        required
                                    />
                                </div>
                                <div className="mb-6">
                                    {/* <label htmlFor="email" className="block mb-1 font-semibold">Email</label> */}
                                    <textarea
                                        id="description"
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        placeholder='Project cover description'
                                        className="border-b-2 border-gray-300 h-[97px] bg-[#DEE4F0] px-4 py-2 outline-none rounded-md w-full"
                                        required
                                        maxLength={50}
                                    ></textarea>
                                </div>
                                <div className="mb-6">
                                    {/* <label htmlFor="message" className="block mb-1 font-semibold">Message</label> */}
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="border-b-2 border-gray-300 h-[194px] px-4 bg-[#DEE4F0] py-2 outline-none rounded-md w-full"
                                        maxLength={2000}
                                        placeholder='Project description'
                                        required
                                    ></textarea>
                                </div>
                                <div className="mb-6">
                                    {/* <label htmlFor="message" className="block mb-1 font-semibold">Message</label> */}
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder='Project email'
                                        className="border-b-2 border-gray-300 px-4 py-2 outline-none rounded-md w-full"
                                        required
                                    />
                                </div>
                                <div className="mb-6">
                                    {/* <label htmlFor="message" className="block mb-1 font-semibold">Message</label> */}
                                    <input
                                        type="url"
                                        id="website"
                                        name="website"
                                        value={formData.website}
                                        onChange={handleChange}
                                        placeholder='Project website'
                                        className="border-b-2 border-gray-300 px-4 py-2 outline-none rounded-md w-full"
                                        required

                                    />
                                </div>
                                <div className="mb-6">
                                    {/* <label htmlFor="message" className="block mb-1 font-semibold">Message</label> */}
                                    <input
                                        type="text"
                                        id="socialmedia"
                                        name="socialmedia"
                                        value={formData.socialmedia}
                                        onChange={handleChange}
                                        placeholder='Project social media handle'
                                        className="border-b-2 border-gray-300 px-4 py-2 outline-none rounded-md w-full"
                                        required

                                    />
                                </div>
                                <div className="mb-6">
                                    {/* <label htmlFor="message" className="block mb-1 font-semibold">Message</label> */}
                                    <input
                                        type="text"
                                        id="location"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        placeholder='Project location'
                                        className="border-b-2 border-gray-300 px-4 py-2 outline-none rounded-md w-full"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="file" className=" text-[#6B717B] mb-1 flex justify-end items-end font-semibold">Upload supporting document (Max 2MB, Only support .jpg, .jpeg, .png, .pdf)</label>
                                    {selectedFile ? (
                                        <div className="flex items-center">
                                            <span className="mr-2">{selectedFile.name}</span>
                                            <button
                                                type="button"
                                                className="text-red-500 focus:outline-none"
                                                onClick={() => setFormData({ ...formData, file: null })}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="w-4 h-4"
                                                    onClick={handleDeleteFile}
                                                >
                                                    <line x1="18" y1="6" x2="6" y2="18" />
                                                    <line x1="6" y1="6" x2="18" y2="18" />
                                                </svg>
                                            </button>
                                        </div>
                                    ) : (
                                        <input
                                            type="file"
                                            id="file"
                                            name="files"
                                            onChange={handleChange}
                                            className="border-b-2 border-gray-300 px-4 py-2 rounded-md w-full"
                                            accept=".jpg, .jpeg, .png, .pdf"
                                            required
                                        />
                                    )}
                                    {fileError && <p className="text-red-500 text-sm mt-1">Invalid file or file size exceeded.</p>}
                                </div>
            
                                
                                <div className='flex items-center mt-[50px] mb-[30px] justify-center'>
                                    <button
                                        type="submit"
                                        className="bg-blue-500 hover:bg-blue-600  text-white font-semibold py-3 px-8 rounded-sm"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SubmitProposal