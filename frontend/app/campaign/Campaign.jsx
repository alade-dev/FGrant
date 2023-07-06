"use client";
import Image from "next/image";
import React, { useState } from "react";
import user from "../../public/assets/Ellipse2.png";
import { FiCopy } from "react-icons/fi";
import Link from "next/link";

const Campaign = () => {
  const initialFunds = [
    { type: "number", label: "funding amount", value: "$FLOW 200,000" },
    { type: "text", label: "Funder’s name", value: "Abdulsalam Ibrahim" },
    { type: "email", label: "Contact", value: "example@example.com" },
  ];

  const initialFunds2 = [
    { type: "number", label: "funding amount", value: "$FLOW 100,000" },
    { type: "text", label: "Funder’s name", value: "Abdulsalam Ibrahim" },
    { type: "email", label: "Contact", value: "example@example.com" },
  ];

  const [inputFunds, setInputFunds] = useState(initialFunds);
  const [inputFunds2, setInputFunds2] = useState(initialFunds2);
  const [showNotification, setShowNotification] = useState(false);

  const handleCopyClick = (index) => {
    const fundsToCopy = inputFunds[index].value;
    const funds2ToCopy = inputFunds2[index].value;
    navigator.clipboard.writeText(fundsToCopy);
    navigator.clipboard.writeText(funds2ToCopy);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
  };
  const handleInputChange = (index, value) => {
    setInputFunds((prevInputValues) => {
      const newInputValues = [...prevInputValues];
      newInputValues[index] = value;
      return newInputValues;
    });
    setInputFunds2((prevInputValues) => {
      const newInputValues = [...prevInputValues];
      newInputValues[index] = value;
      return newInputValues;
    });
  };

  return (
    <>
      <div className="flex items-start flex-col bg-white w-[100%] -ml-4">
        <p className="dashboard-txt flex flex-col text-bold justify-center items-center h-[68px] text-[#131316] text-[20px] leading-[24px]">
          Campaigns
        </p>
        <div
          className="w-[100%] lg:flex justify-between px-4 lg:bg-cover hidden  items-center "
          style={{ backgroundImage: `url('/images/dashframe.png')` }}
        >
          <div className="flex flex-col justify-center  h-[64px] ">
            <p className=" text-[24px] text-white text-center -mb-2">
              Welcome, Innovator ✨
            </p>
          </div>
        </div>
        <div className="w-[100%] flex flex-col">
          <div className="flex flex-col lg:mt-[12px] mt-[18px]   gap-y-[12px]">
            <div className="lg:h-[100%] w-[100%] border-[2px]  lg:px-[30px] lg:py-[20px] justify-between  border-[#00EF8B] p-[8px] ">
              <div className="flex justify-between ">
                <div className="space-x-6 flex items-center ">
                  <Image
                    src={user}
                    alt=""
                    className="lg:h-[120px] mt-1 h-[50px] w-[50px] lg:w-[120px]"
                  />
                  <div className="flex gap-y-[10px] flex-col">
                    <h3 className="text-[#00EF8B] lg:text-[40px] text-[18px] font-semibold">
                      AbdulAzeez Tasleem
                    </h3>
                    <p className=" text-[#626262] lg:text-[23px] text-[12px] text-start font-semibold ">
                      Funding $FLOW 300,000 and requesting partnership
                    </p>
                  </div>
                </div>
                <div className="flex flex-col lg:pt-[18px] pt-[6px] gap-y-4">
                  <p className=" text-black lg:text-[24px] text-[12px] text-center font-semibold ">
                    $FLOW 500,000
                  </p>
                  {/* <p className=" text-[#626262] lg:text-[30px] text-[14px] text-center font-semibold ">In review</p> */}
                </div>
              </div>
              <div className="lg:mx-[30px] lg:mt-[43px] mx-0">
                <div className="lg:h-[252px] lg:w-[776px] w-[450px]  mb-[34px] border-[2px] flex mx-auto  border-[#00EF8B] p-[8px] ">
                  <div className="flex flex-col  mx-auto">
                    {inputFunds.map((input, index) => (
                      <div
                        key={index}
                        className=" grid grid-cols-2 lg:w-[80%] w-[100%] lg:items-center gap-x-0 items-center space-y-3  "
                      >
                        <label
                          className=" text-[#6B717B] text-2xl lg:ml-7 lg:mr-10 mt-3 font-semibold text-start"
                          htmlFor={`inputField-${index}`}
                        >
                          {input.label}
                        </label>
                        <div className="flex lg:w-[420px] justify-between  h-[60px]  border-2 border-[#00EF8B]">
                          <input
                            id={`inputField-${index}`}
                            value={input.value}
                            readOnly
                            placeholder={input.value}
                            onChange={(e) =>
                              handleInputChange(index, e.target.value)
                            }
                            className="w-[100%] mx-2 outline-none"
                          />
                          <button
                            className="mx-2"
                            onClick={() => handleCopyClick(index)}
                          >
                            <FiCopy />
                          </button>
                        </div>
                      </div>
                    ))}
                    {showNotification && (
                      <div className=" flex justify-center mx-auto w-[180px] bg-blue-500 text-white px-4 py-2 rounded-md  top-4 right-4">
                        Copied to clipboard!
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="lg:ml-[30px]">
                <h2 className="text-[#626262] text-3xl font-semibold ">
                  Others
                </h2>
              </div>
              <div className="lg:mx-[30px] lg:mt-[43px] mx-0">
                <div className="lg:h-[252px] lg:w-[776px] w-[450px]  mb-[34px] border-[2px] flex mx-auto  border-[#00EF8B] p-[8px] ">
                  <div className="flex flex-col  mx-auto">
                    {inputFunds2.map((input, index) => (
                      <div
                        key={index}
                        className=" grid grid-cols-2 lg:w-[80%] w-[100%] lg:items-center gap-x-0 items-center space-y-3  "
                      >
                        <label
                          className=" text-[#6B717B] text-2xl lg:ml-7 lg:mr-10 mt-3 font-semibold text-start"
                          htmlFor={`inputField-${index}`}
                        >
                          {input.label}
                        </label>
                        <div className="flex lg:w-[420px] justify-between  h-[60px]  border-2 border-[#00EF8B]">
                          <input
                            id={`inputField-${index}`}
                            value={input.value}
                            readOnly
                            placeholder={input.value}
                            onChange={(e) =>
                              handleInputChange(index, e.target.value)
                            }
                            className="w-[100%] mx-2 outline-none"
                          />
                          <button
                            className="mx-2"
                            onClick={() => handleCopyClick(index)}
                          >
                            <FiCopy />
                          </button>
                        </div>
                      </div>
                    ))}
                    {showNotification && (
                      <div className=" flex justify-center mx-auto w-[180px] bg-blue-500 text-white px-4 py-2 rounded-md  top-4 right-4">
                        Copied to clipboard!
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex justify-end  items-end">
                <Link href="/proposal" legacyBehavior passHref>
                  <a className="text-center text-white lg:py-[10px] cursor-pointer p-2 lg:px-[30px] bg-[#00EF8B] text-[20px] lg:text-[30px]">
                    View
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Campaign;
