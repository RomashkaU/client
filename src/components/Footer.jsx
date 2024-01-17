import React from 'react'
import Socials from '../components/Socials'
import { FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

//import link
import { Link } from 'react-router-dom';

import Logo from '../img/green_logo.png'
 //import motion
 import {motion} from 'framer-motion';
 //variant
import { fadeIn } from '../variants';




const Footer = () => {

  return (
   <div className='section overflow-hidden'>
      <motion.section
         variants={fadeIn('right', 0.3)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once: false, amount: 0.4}} className=" relative bg-green-700 py-8 mb-16 ">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center relative">
         <p className="xs:text-xl text-white/80  mb-4  lg:pr-64 text-center relative z-10">
            Still have questions? Call <a href="tel:+12249556912">+1 (224)-955-6912</a>
         </p>
         <a
            href="tel:+12249556912"
            className="btn-grad w-52 relative z-10 "
         >
            Call Now
         </a>
         <span className=" xl:bg-white block absolute right-0 top-0 w-1/3 xl:w-1/4 h-full transform rotate-45 "></span>
      </div>
      </motion.section>

      <footer className="pb-5 ">
         <div className="container mx-auto">
         <ul className='flex flex-col ml-14 mr-14 lg:flex-row lg:items-center justify-between '>
            <li className='max-w-[200px]  pb-5'>
               <img src={Logo} alt="" />
            </li>
            <li className='flex hover:text-black/40 pb-3'>
               <div className='pr-2 text-xl'>
                  <FaPhone /> 
               </div>
               <a href="tel:+12249556912">+1 (224)-955-6912</a>
            </li>
            <li className="flex pb-3 hover:text-black/40">
               <div className='pr-2 text-xl'>
                  <IoMdMail /> 
               </div>
               <a href="mailto:Admin@ave-trans.com">Admin@ave-trans.com</a>
            </li>
            <li className='flex pb-3 hover:text-black/40'>
                  <div className='pr-2 text-xl'>
                     <FaLocationDot /> 
                  </div>

               <a href="https://www.google.com/maps?q=6800+BERMUDA+AVE,+MCKINNEY,+TX+75070" target="_blank">
                  <p>
                     6800 BERMUDA AVE <br />
                     MCKINNEY, TX 75070
                  </p>
               </a>
            </li>
         </ul>
         </div>
      </footer>
   
      <div className="bg-black/90 text-white text-center">
         <div className="p-3 flex items-center justify-center">
            <Socials />
         </div>
         {/* Риска */}
         <hr className=" border-gray-600 " />
         <p className='p-2'>Copyright © 2023</p>
      </div>
   </div>
  )
}

export default Footer