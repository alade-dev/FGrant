import Image from 'next/image'
import React from 'react'
import user from "../../public/assets/Ellipse2.png";
import Link from 'next/link';

const ActiveProposal = () => {
    return (
        <>
            <div className="flex items-start flex-col bg-[#D5DFF2] w-[100%] -ml-4">
                <p className="dashboard-txt flex flex-col text-bold justify-center items-center h-[68px] text-[#131316] text-[20px] leading-[24px]">
                    Active Proposals
                </p>
                <div className="w-[100%] lg:flex justify-between px-4 lg:bg-cover hidden  items-center " style={{ backgroundImage: `url('/images/dashframe.png')` }} >
                    <div className="flex flex-col justify-center  h-[64px] " >
                        <p className=" text-[24px] text-white text-center -mb-2">Welcome, Innovator ✨</p>
                    </div>
                </div>
                <div className="w-[100%] flex flex-col">
                    <div className="flex flex-col lg:mt-[12px] mt-[18px]   gap-y-[12px]">
                        <div className="lg:h-[446px] w-[100%] border-[2px]  lg:px-[30px] lg:py-[20px] justify-between  border-[#00EF8B] p-[8px] ">
                            <div className='flex justify-between '>
                                <div className="space-x-6 flex items-center ">
                                    <Image src={user} alt="" className="lg:h-[120px] mt-1 h-[50px] w-[50px] lg:w-[120px]" />
                                    <div className="flex gap-y-[10px] flex-col">
                                        <h3 className="text-[white] lg:text-[40px] text-[18px] font-semibold">AbdulAzeez Tasleem</h3>
                                        <p className=" text-[#626262] lg:text-[30px] text-[16px] text-center font-semibold ">Blockchain education cohort</p>
                                    </div>
                                </div>
                                <div className='flex flex-col lg:pt-[18px] pt-[6px] gap-y-4'>
                                    <p className=" text-black lg:text-[24px] text-[12px] text-center font-semibold ">$FLOW 500,000</p>
                                    <p className=" text-[#626262] lg:text-[30px] text-[14px] text-center font-semibold ">In review</p>
                                </div>
                            </div>
                            <div className='my-[43px] lg:h-[116px] lg:w-[915px]'>
                                <p className='text-[#303030] lg:text-2xl text-sm'>Don&apos;t wait any longer. Take the first step towards revolutionizing the blockchain industry by getting started with Fantom Grant today. Together, let&apos;s unleash the potential of tomorrow and make your vision a reality.</p>
                            </div>
                            <div className='flex justify-end  items-end'>
                                <Link href="/activeproposal" legacyBehavior passHref>
                                <a className='text-center text-white lg:py-[10px] cursor-pointer p-2 lg:px-[30px] bg-[#00EF8B] text-[20px] lg:text-[30px]'>View</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ActiveProposal