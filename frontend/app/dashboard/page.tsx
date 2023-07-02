"use client"
import React, { useState } from 'react';
import { Flex, Box, VStack, Text, Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react'
import Sidebar from '@/components/Sidebar';
import MainContent from '@/components/MainContent';


const categories = [
  {
    id: 1,
    name: 'Dashboard'
  },
  {
    id: 2,
    name: 'Active proposals'
  },
  {
    id: 3,
    name: 'Projects'
  },
  {
    id: 4,
    name: 'Campaign'
  },
  {
    id: 5,
    name: 'Profile'
  },
]

const Page = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("home");

  const handleTabChange = (index: any) => {
    setSelectedTab(index);
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (

    <div className='flex flex-row  lg:pt-[28px]'>
      {/*dashboard sidebar*/}
      <Sidebar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} setActiveItem={setActiveItem} activeItem={activeItem}  />
      <MainContent activeItem={activeItem} />
    </div>

  );
};


export default Page;
