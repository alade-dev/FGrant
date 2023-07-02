"use client"
import React, { useState, ChangeEvent, FormEvent, MouseEvent } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';



const Profile = () => {

    const [formData, setFormData] = useState<{
        FirstName: string;
        MiddleName: string;
        LastName: string;
        email: string;
        maiden: string;
        country: string;
        state: string;
        address: string;
        phone: string;
        confirmPassword: string;
        password: string;

    }>({

        FirstName: '',
        LastName: '',
        maiden:'',
        MiddleName:'',
        email: '',
        country: '',
        state: '',
        address: '',
        phone: '',
       confirmPassword: '',
        password: '',
    

    });

    const [passwordError, setPasswordError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };


    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const toggleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setPasswordError(true);
            return;
        }

        // Handle form submission logic here
        console.log(formData);
        // Reset the form
        setFormData({
            FirstName: '',
            LastName: '',
            maiden: '',
            MiddleName: '',
            email: '',
            country: '',
            state: '',
            address: '',
            phone: '',
            confirmPassword: '',
            password: '',
        });
        setPasswordError(false);
    };

    return (
        <>
            <div className="flex items-start flex-col bg-white w-[100%] -ml-4">
                <p className="dashboard-txt flex flex-col text-bold justify-center items-center h-[68px] text-[#131316] text-[20px] leading-[24px]">
                    Create profile
                </p>
                <div className="w-[100%] lg:flex justify-between px-4 lg:bg-contain hidden  items-center " style={{ backgroundImage: `url('/images/dashframe.png')` }} >
                    <div className="flex flex-col justify-center  h-[64px] " >
                        <p className=" text-[24px] text-white text-center -mb-2">Welcome, Innovator ✨</p>
                    </div>
                </div>
                <div className="w-[100%]">
                    <div className="flex flex-col lg:mt-[12px] mt-[18px]   gap-y-[12px]">
                        <div className="lg:h-[980px] w-[100%] border-[2px]  lg:px-[30px] lg:py-[20px] justify-between  border-[#4B82EF] p-[8px] ">
                            <h1 className="text-[40px] text-center text-[#146BFF] font-extrabold mb-4">Create profile</h1>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-6">
                                    {/* <label htmlFor="name" className="block mb-1 font-semibold">Name</label> */}
                                    <input
                                        type="text"
                                        id="FirstName"
                                        name="FirstName"
                                        placeholder='First name'
                                        onChange={handleChange}
                                        value={formData.FirstName}
                                        className="border-b-2 border-gray-300 px-4 py-2 outline-none rounded-md w-full"
                                        required
                                    />
                                </div>
                                <div className="mb-6">
                                    {/* <label htmlFor="name" className="block mb-1 font-semibold">Name</label> */}
                                    <input
                                        type="text"
                                        id="MiddleName"
                                        name="MiddleName"
                                        placeholder='Middle name'
                                        onChange={handleChange}
                                        value={formData.MiddleName}
                                        className="border-b-2 border-gray-300 px-4 py-2 outline-none rounded-md w-full"
                                    />
                                </div>
                                <div className="mb-6">
                                    {/* <label htmlFor="name" className="block mb-1 font-semibold">Name</label> */}
                                    <input
                                        type="text"
                                        id="LastName"
                                        name="LastName"
                                        placeholder='Last name'
                                        onChange={handleChange}
                                        value={formData.LastName}
                                        className="border-b-2 border-gray-300 px-4 py-2 outline-none rounded-md w-full"
                                        required
                                    />
                                </div>
                                <div className="mb-6">
                                    {/* <label htmlFor="message" className="block mb-1 font-semibold">Message</label> */}
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder='Email'
                                        className="border-b-2 border-gray-300 px-4 py-2 outline-none rounded-md w-full"
                                        required
                                    />
                                </div>
                                <div className="mb-6">
                                    {/* <label htmlFor="message" className="block mb-1 font-semibold">Message</label> */}
                                    <input
                                        type="text"
                                        id="maiden"
                                        name="maiden"
                                        value={formData.maiden}
                                        onChange={handleChange}
                                        placeholder='Mother’s maiden name'
                                        className="border-b-2 border-gray-300 px-4 py-2 outline-none rounded-md w-full"
                                        required
                                    />
                                </div>
                                <div className="mb-6">
                                    {/* <label htmlFor="message" className="block mb-1 font-semibold">Message</label> */}
                                    <input
                                        type="text"
                                        id="country"
                                        name="country"
                                        value={formData.country}
                                        onChange={handleChange}
                                        placeholder='Country of residence'
                                        className="border-b-2 border-gray-300 px-4 py-2 outline-none rounded-md w-full"
                                        required

                                    />
                                </div>
                                <div className="mb-6">
                                    {/* <label htmlFor="message" className="block mb-1 font-semibold">Message</label> */}
                                    <input
                                        type="text"
                                        id="state"
                                        name="state"
                                        value={formData.state}
                                        onChange={handleChange}
                                        placeholder='State of residence'
                                        className="border-b-2 border-gray-300 px-4 py-2 outline-none rounded-md w-full"
                                        required

                                    />
                                </div>
                                <div className="mb-6">
                                    {/* <label htmlFor="message" className="block mb-1 font-semibold">Message</label> */}
                                    <input
                                        type="text"
                                        id="address"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        placeholder='Address'
                                        className="border-b-2 border-gray-300 px-4 py-2 outline-none rounded-md w-full"
                                        required
                                    />
                                </div>
                                <div className="mb-6">
                                    {/* <label htmlFor="message" className="block mb-1 font-semibold">Message</label> */}
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder='Phone'
                                        className="border-b-2 border-gray-300 px-4 py-2 outline-none rounded-md w-full"
                                        required
                                    />
                                </div>
                                <div className="mb-6">
                                    {/* <label htmlFor="password" className="block mb-1 font-semibold">Password</label> */}
                                    <div className="relative">
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            id="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            placeholder='Password'
                                            className="border-b-2 border-gray-300 px-4 py-2 outline-none rounded-md w-full pr-10"
                                            required
                                        />
                                        <div className="absolute right-0 top-0 mt-3 mr-3">
                                            {showPassword ? (
                                                <AiOutlineEyeInvisible
                                                    className="text-gray-500 cursor-pointer"
                                                    onClick={toggleShowPassword}
                                                />
                                            ) : (
                                                <AiOutlineEye
                                                    className="text-gray-500 cursor-pointer"
                                                    onClick={toggleShowPassword}
                                                />
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    {/* <label htmlFor="confirmPassword" className="block mb-1 font-semibold">Confirm Password</label> */}
                                    <div className="relative">
                                        <input
                                            type={showConfirmPassword ? 'text' : 'password'}
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                            placeholder='Confirm password'
                                            className={`border-b-2 ${passwordError ? 'border-red-500' : 'border-gray-300'} px-4 outline-none py-2 rounded-md w-full pr-10`}
                                            required
                                        />
                                        <div className="absolute right-0 top-0 mt-3 mr-3">
                                            {showConfirmPassword ? (
                                                <AiOutlineEyeInvisible
                                                    className="text-gray-500 cursor-pointer"
                                                    onClick={toggleShowConfirmPassword}
                                                />
                                            ) : (
                                                <AiOutlineEye
                                                    className="text-gray-500 cursor-pointer"
                                                    onClick={toggleShowConfirmPassword}
                                                />
                                            )}
                                        </div>
                                    </div>
                                    {passwordError && <p className="text-red-500 text-sm mt-1">Passwords do not match.</p>}
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

export default Profile