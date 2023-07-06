"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import logo from '/public/logo.png'

const Navbar = () => {
  const [isScrollingUp, setIsScrollingUp] = useState(false);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsScrollingUp(currentScrollPos < prevScrollPos);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 mb-4 top-0 z-50">
      <nav className={`flex  items-center justify-between p-6 lg:px-[77px] ${isScrollingUp ? "bg-white" : "bg-white"
        }`} aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Flow grant</span>
            <Image
              className="flex-shrink-0"
              src={logo}
              alt="logo"
              width={180}
              height={53}
            />
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#"
            className="rounded-md bg-[#00EF8B] text-xl px-5 py-3 justify-center  font-medium text-black shadow-sm hover:bg-[#07a261]"
          >
            Connect wallet
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar