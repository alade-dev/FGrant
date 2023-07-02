"use client"
import React, { useState } from "react";
import wallet from '../public/assets/wallet.png';
import handcash from '../public/assets/handcash.png';
import line from '../public/assets/line.png';
import up from '../public/assets/up.png';
import user from '../public/assets/Ellipse.png';
import copy from '../public/assets/copy.png';
import paste from '../public/assets/paste.png';
import Image from "next/image";
import BarChart from "./BarChart";
import { UserData } from '../Data'
import { ChartData } from "../interface/interface";

const Dashboard: React.FC<ChartData> = ({ labels, datasets }: ChartData) => {
    const [userData, setUserData] = useState<ChartData>({
        labels: UserData.map((data) => data.month),
        datasets: [
            {
                label: "Revenue",
                data: UserData.map((data) => data.userGain),

            },
        ],

    })


    return (
        <>
            <div className="flex items-start flex-col bg-[#D5DFF2] w-[100%] -ml-4">
                <p className="dashboard-txt flex flex-col text-bold justify-center items-center h-[68px] text-[#131316] text-[20px] leading-[24px]">
                    Dashboard
                </p>
                <div className="w-[100%] lg:flex justify-between px-4 lg:bg-contain hidden  items-center " style={{ backgroundImage: `url('/images/dashframe.png')` }} >
                    <div className="flex flex-col justify-center  h-[64px] " >
                        <p className=" text-[24px] text-white text-center -mb-2">Welcome, Innovator ✨</p>
                    </div>
                    {/* <button className="p-5">
                        <span className="text-[#4B82EF]  text-[14px] leading-[22px]">
                            Browse Proposal
                        </span>
                        </button> */}
                </div>
                <div className="w-[100%] flex">
                    <div className="w-[70%] hidden lg:grid grid-cols-2 gap-4">
                        <div className="bg-[#4B82EF]  px-[21px] py-[40px] m-[24px] mb-0  w-[300px] h-[206px] ">
                            <div className="flex items-center">
                                <Image src={wallet} alt="" className="h-[32px]  w-[32px]" />
                                <p className="ml-[20px] text-white text-[14px] font-semibold ">Wallet balance</p>
                                <Image src={line} alt="" className="h-[32px] ml-[74px] w-[32px]" />
                            </div>
                            <div className="flex flex-col mt-[25px] items-center">
                                <p className=" text-white text-[18px] text-center font-semibold ">$FTM 40,689.63</p>
                            </div>
                            <div className="flex items-center ml-[65px] justify-start">
                                <Image src={up} alt="" className="h-[12px]  w-[12px]" />
                                <p className=" text-[#53D258] text-[12px] text-center font-semibold ">+35.74%</p>
                            </div>
                        </div>
                        <div className="bg-white px-[21px] py-[40px] m-[24px] w-[300px] h-[206px] ">
                            <div className="flex items-center">
                                <Image src={handcash} alt="" className="h-[32px]  w-[32px]" />
                                <p className="ml-[12px] text-black text-[14px] font-semibold ">Spent</p>
                                <Image src={line} alt="" className="h-[32px] ml-[134px] w-[32px]" />
                            </div>
                            <div className="flex flex-col mt-[25px] items-center">
                                <p className=" text-black text-[18px] text-center font-semibold ">$FTM 500,000</p>
                            </div>
                            <div className="flex items-center ml-[71px] justify-start">
                                <Image src={up} alt="" className="h-[12px]  w-[12px]" />
                                <p className=" text-[#53D258] text-[12px] text-center font-semibold ">+8.74%</p>
                            </div>
                        </div>
                        <div className="col-span-2 bg-white w-[619px] h-[313px] m-[24px] mt-4 px-[18px] py-[8px]">
                            <h2 className="text-[#4B82EF] text-[24px] font-semibold">Funding history</h2>
                            <div className="flex flex-col mt-[12px] gap-y-[12px]">
                                <div className="h-[75px] w-[584px] border-[2px] flex justify-between  border-[#4B82EF] p-[8px] ">
                                    <div className="space-x-3 flex ">
                                        <Image src={user} alt="" className="h-[32px] mt-1  w-[32px]" />
                                        <div className="flex gap-y-[10px] flex-col">
                                            <h3 className="text-[#4B82EF] text-[16px] font-semibold">AbdulAzeez Tasleem</h3>
                                            <p className=" text-[#626262] text-[14px] text-center font-semibold ">Blockchain education cohort</p>
                                        </div>
                                    </div>
                                    <p className=" text-black text-[18px] text-center font-semibold ">$FTM 500,000</p>
                                </div>
                                <div className="h-[75px] w-[584px] border-[2px] flex justify-between  border-[#4B82EF] p-[8px]">
                                    <div className="space-x-3 flex ">
                                        <Image src={user} alt="" className="h-[32px] mt-1  w-[32px]" />
                                        <div className="flex gap-y-[10px] flex-col">
                                            <h3 className="text-[#4B82EF] text-[16px] font-semibold">AbdulAzeez Tasleem</h3>
                                            <p className=" text-[#626262] text-[14px] text-center font-semibold ">NFT marketplace application </p>
                                        </div>
                                    </div>
                                    <p className=" text-black text-[18px] text-center font-semibold ">$FTM 500,000</p>
                                </div>
                                <div className="h-[75px] w-[584px] border-[2px] flex justify-between  border-[#4B82EF] p-[8px]">
                                    <div className="space-x-3 flex ">
                                        <Image src={user} alt="" className="h-[32px] mt-1  w-[32px]" />
                                        <div className="flex gap-y-[10px] flex-col">
                                            <h3 className="text-[#4B82EF] text-[16px] font-semibold">AbdulAzeez Tasleem</h3>
                                            <p className=" text-[#626262] text-[14px] text-center font-semibold ">Agricultural produce distribution platform
                                            </p>
                                        </div>
                                    </div>
                                    <p className=" text-black text-[18px] text-center font-semibold ">$FTM 500,000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[30%] flex flex-col mx-[18px]  ">
                        <div className="bg-white px-[16px] py-[15px] m-[24px] w-[270px] h-[116px] ">
                            <div className="flex mb-2 justify-center items-center">
                                <h3 className="text-[#2752E7] text-[16px] text-center font-semibold">Deposit</h3>
                            </div>
                            <div className="flex justify-between border-[2px] border-[#4B82EF] p-2  h-[48px] items-center ">
                                <input type="text" className="m-4 ml-0 outline-none " placeholder="0998XXXGDEI584J" />
                                <Image src={copy} alt="" className="h-[20px] cursor-pointer w-[20px]" />
                            </div>

                        </div>
                        <div className="bg-white px-[16px] py-[15px] flex flex-col justify-center items-center  gap-y-4 m-[24px] w-[270px] h-[240px] ">
                            <div className="flex justify-center items-center">
                                <h3 className="text-[#2752E7] text-[16px] text-center font-semibold">Withdraw</h3>
                            </div>
                            <div className="flex justify-between border-[2px] border-[#4B82EF] p-2  h-[48px] items-center ">
                                <input type="text" className="m-4 ml-0 outline-none " placeholder="0998XXXGDEI584J" />
                                <Image src={paste} alt="" className="h-[20px] cursor-pointer w-[20px]" />
                            </div>
                            <div className="flex justify-between border-[2px] border-[#4B82EF] p-2 w-[240px]  h-[48px] items-center ">
                                <input type="number" className="m-4 ml-0 outline-none" placeholder="1.734" />
                            </div>
                            <button className="bg-[#4B82EF]  h-[40px] w-[186px]">
                                <p className="text-white text-[14px] font-semibold ">Withdraw FTM</p>
                            </button>
                        </div>
                        <div className="bg-white flex justify-center items-center m-[24px] w-[270px] h-[122px] ">
                            <div className="flex flex-col gap-y-3 items-center">
                                <h3 className="text-[#2752E7] text-[16px] text-center font-semibold">Current price</h3>
                                <div className="flex flex-col">
                                    <p className=" text-[#A9A9A9] text-center text-[14px] font-semibold ">$FTM</p>
                                    <h3 className="text-black text-[18px] text-center font-semibold">12,133,245.6</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="m-[24px] mb-0 w-[95%] mt-0">
                    <div className="bg-[#4B82EF] flex items-center h-[56px]">
                        <p className="ml-[25px] text-white text-[24px] text-center font-semibold ">Overview</p>
                    </div>
                    <div className="w-[100%]  flex justify-center items-center bg-white">
                        <BarChart chartData={userData} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard