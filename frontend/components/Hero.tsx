/* eslint-disable @next/next/no-img-element */
"use client"
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import money from '../public/assets/money.png'
import file from '../public/assets/file.png'
import people from '../public/assets/people.png'
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';
import greet from '../public/images/greet.png'
import Footer from './Footer'


const features = [
  {
    description:
      "Funding Opportunities: Fantom Grant offers funders the chance to support innovative projects within the Fantom ecosystem, providing financial resources to drive their development, adoption, and success.",
    url: money,
  },
  {
    description:
      "Transparent Evaluation Process: Fantom Grant implements a rigorous and transparent evaluation process to assess project proposals, ensuring that funded projects are aligned with the ecosystem's goals and have the potential to make a significant impact.",
    url: file,
  },
  {
    description:
      " Community Engagement: Fantom Grant encourages community participation through voting and governance mechanisms, allowing stakeholders to have a voice in the funding decisions, project selection, and shaping the future of the Fantom ecosystem.",
    url: people,
  }
]

const Hero = () => {

  const wordContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = wordContainerRef.current;

    let currentIndex = 0;
    const words = ["Discover", "Collaborate", "Propose", "Invest"];
    const duration = 2000; // Duration for each word (in milliseconds)

    const animateWords = () => {
      const currentWord = words[currentIndex];
      const wordElement = container?.querySelector(".scroll-word");

      if (wordElement) {
        wordElement.textContent = currentWord;

        // Animate the word


        setTimeout(() => {
          wordElement.animate(
            [
              { transform: "translateY(100%)", opacity: 0 },
              { transform: "translateY(0%)", opacity: 1 },
            ],
            { duration }
          );
        }, 100);

        setTimeout(() => {
          wordElement.animate(
            [
              { transform: "translateY(0%)", opacity: 1 },
              { transform: "translateY(-100%)", opacity: 0 },
            ],
            { duration }
          );
        }, duration + 100);
      }

      currentIndex = (currentIndex + 1) % words.length;
    };

    // Start the animation
    animateWords();
    const interval = setInterval(animateWords, duration * 2);

    // Clean up the interval when component is unmounted
    return () => clearInterval(interval);
  }, []);

  return (
    <section className='flex flex-col'>
      <div className=' lg:pt-32 lg:pb-8 lg:px-8 lg:bg-cover lg:bg-no-repeat ' style={{ backgroundImage: `url('/images/Frame.png')` }}>
        <div className="mx-auto px-6 pt-[38px] lg:px-8">
          <div className="lg:text-center lg:flex flex flex-col justify-center  lg:flex-col" >
            <motion.h1
              className="text-xs font-bold tracking-tight text-center items-center text-white md:text-xl lg:text-4xl"
              whileHover={{ scale: 1, rotate: 0 }}
            >
              Become a member of a thriving community of trailblazers, where investors fuel the future and innovators bring their ideas to life.
            </motion.h1>
            <div className='text-white  lg:text-[42px] mt-5 font-semibold ' ref={wordContainerRef}>
              <AnimatePresence>
                <motion.span
                  className="scroll-word"
                  initial={{ opacity: 0, translateY: "100%" }}
                  animate={{ opacity: 1, translateY: "0%" }}
                  exit={{ opacity: 0, translateY: "-100%" }}
                  transition={{ duration: 0.5 }}
                  key="scroll-word"
                />
              </AnimatePresence>
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-[5px] lg:text-base leading-8 text-white">
              Unleash your vision to drive success by funding and proposing revolutionary projects today!
            </p>
            <div className="mt-8 lg:flex lg:gap-x-2 hidden sm:justify-center">
              <Link href="/dashboard" legacyBehavior passHref>
                <a className="rounded-md bg-white text-xl px-7 py-5 justify-center cursor-pointer flex font-medium text-[#00EF8B] shadow-sm hover:bg-[#00EF8B] hover:text-white">
                  Get started
                  <span className="text[#00EF8B] hover:text-white ml-2 bg-inherit" aria-hidden="true">
                    &rarr;
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className=' flex flex-col mt-6 mb-[25px] '>
        <div>
          <h4 className='font-semibold mx-auto max-w-6xl text-xs justify-start lg:text-4xl'>Why Fantom Grant </h4>
        </div>
        <div>
          <div className="mx-auto mt-10 max-w-6xl lg:space-y-3  flex-shrink-0 space-y-2 flex flex-col lg:gap-y-4 ">
            <p className='text-[7px] font-semibold lg:font-normal lg:text-base   text-[#303030]'>Welcome to Fantom Grant, the premier platform that connects visionary funders and passionate proposers to catalyze groundbreaking projects within the Fantom ecosystem. Whether you&apos;re seeking funding for your innovative idea or looking to support cutting-edge ventures, Fantom Grant is the gateway to unlock limitless possibilities.
            </p>
            <p className='text-[7px] font-semibold lg:font-normal lg:text-base  text-[#303030]'>Our platform fosters collaboration, transparency, and growth, enabling you to make a lasting impact in the world of blockchain technology.
              Connect with like-minded individuals who share your passion for innovation. With Fantom Grant, you have the power to shape the landscape of blockchain and create a legacy of transformable projects.</p>
            <p className='text-[7px] font-semibold lg:font-normal lg:text-base  text-[#303030]'>
              Don&apos;t wait any longer. Take the first step towards revolutionizing the blockchain industry by getting started with Fantom Grant today. Together, let&apos;s unleash the potential of tomorrow and make your vision a reality.
            </p>
          </div>
        </div>
      </div>
      <div className=' flex mb-[35px] flex-col mt-6'>
        <div className='mb-[50px]'>
          <h4 className='font-semibold mx-auto max-w-6xl text-xs justify-start lg:text-4xl'>How it works</h4>
        </div>
        <div className='flex mx-auto justify-center  pl-[134px] pr-[143px] '>
          <div className=" lg:grid relative left-5 justify-center items-center my-6 flex max-w-6xl lg:grid-cols-1 lg:gap-y-7">
            <div className="max-w-xl  bg-[#00EF8B] ">
              <p className='text-center text-white py-[20px] px-[45.5px] text-base '>
                Project creators submit their proposals to Fantom Grant, outlining their innovative ideas, project scope, timeline, and funding requirements. The proposals undergo a thorough evaluation process by the funder(s) to assess
              </p>
            </div>
            <div className="max-w-xl  bg-[#00EF8B]  ">
              <p className='text-center text-white py-[20px] px-[45.5px] text-base '>
                Once project proposals are approved, funders can participate in the funding allocation process individually or seek partnerships by creating campaigns and stating their desired contribution amount on Fantom Grant.
              </p>
            </div>
            <div className="max-w-xl  bg-[#00EF8B]  ">
              <p className='text-center text-white py-[20px] px-[45.5px] text-base '>
                Funders can explore campaigns on Fantom Grant, partnering to fund promising projects after thorough review of feasibility, business opportunities, and wealth creation.
              </p>
            </div>
          </div>
          <div className="aspect-h-5 border-8 justify-center items-center   border-[#00EF8B] aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <Image
              src={greet}
              alt='image'
              className="h-full w-full  object-cover object-center"
            />
          </div>
        </div>
      </div>
      <div className='mb-[35px]'>
        <div className='mb-[50px]'>
          <h4 className='font-semibold mx-auto max-w-6xl text-xs justify-start lg:text-4xl'>Key features</h4>
        </div>
        <div className="mt-20 mx-auto max-w-6xl ">
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 lg:grid-cols-3 md:gap-x-12 md:gap-y-16">
            {features.map((feature) => (
              <div
                key={feature.description}
                className="flex justify-center items-center flex-row gap-6 sm:flex-row md:flex-col lg:flex-col"
              >
                <div className="flex h-[141px] w-[170px] align-middle items-center justify-center rounded-md bg-[#E2ECFD] text-white sm:shrink-0">
                  <div className="h-[108px] lg:flex flex align-middle items-center justify-center w-[94px]">
                    <Image src={feature.url} className='align-middle items-center justify-center' alt="icon" />
                  </div>
                </div>
                <div className="sm:min-w-0  lg:flex lg:flex-shrink-0 text-center justify-center  sm:flex-1">
                  <p className="mt-2 lg:text-sm text-xs max-h-[168px] max-w-[310px] my-auto text-center justify-center leading-7 text-[#101010]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </section>

  )
}

export default Hero