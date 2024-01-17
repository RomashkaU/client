import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { CgMenuRight } from 'react-icons/cg';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const menuVariants = {
   hidden: {
      x: '100%'
   },
   show: {
      x: 0,
      transition: {
         ease: [0.6, 0.01, -.05, 0.9],
      },
   },
};

const MobileNav = () => {
   const { t } = useTranslation();
   const [openMenu, setOpenMenu] = useState(false);
   const [showSolutionsSubMenu, setShowSolutionsSubMenu] = useState(false);
   const [showFleetSubMenu, setShowFleetSubMenu] = useState(false);

   const openSolutionsSubMenu = () => {
      setShowSolutionsSubMenu(true);
   };

   const closeSolutionsSubMenu = () => {
      setShowSolutionsSubMenu(false);
   };
   const closeSolutionsSubMenuAndExit = () => {
      setShowSolutionsSubMenu(false);
      setOpenMenu(false);
   };

   const openFleetSubMenu = () => {
      setShowFleetSubMenu(true);
   };

   const closeFleetSubMenu = () => {
      setShowFleetSubMenu(false);
   };
   const closeFleetSubMenuAndExit = () => {
      setShowFleetSubMenu(false);
      setOpenMenu(false);
   };

   const handleBack = () => {
      if (showSolutionsSubMenu) {
         // If the Solutions submenu is open, close it
         closeSolutionsSubMenu();
      } else if (showFleetSubMenu) {
         // If the Fleet submenu is open, close it
         closeFleetSubMenu();
      } else {
         // If no submenu is open, close the menu
         setOpenMenu(false);
      }
   };

   return (
      <nav className='text-primary lg:hidden'>
         <div
            onClick={() => setOpenMenu(true)}
            className='text-3xl text-white/60 cursor-pointer'>
            <CgMenuRight />
         </div>
         <motion.div
            variants={menuVariants}
            initial='hidden'
            animate={openMenu ? 'show' : ''}
            className='bg-white bg-cover shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20 '>
            <div onClick={handleBack} className='text-4xl absolute z-30 left-4 top-14 text-primary cursor-pointer'>
               {showSolutionsSubMenu || showFleetSubMenu ? (
                  <MdKeyboardArrowLeft />
               ) : (
                  <IoMdClose />
               )}
            </div>

            {showSolutionsSubMenu ? (
               // Submenu content for "Solutions"
               <ul className='h-full flex flex-col justify-center items-center gap-y-8 text-black font-primary font-blood text-3xl'>
                  <li className='hover:text-green-800'>
                     <Link to='/expedite-nationwide' onClick={closeSolutionsSubMenuAndExit}>Expedite Nationwide</Link>
                  </li>
                  <li className='hover:text-green-800'>
                     <Link to='/cross-border' onClick={closeSolutionsSubMenuAndExit}>Cross Border</Link>
                  </li>
                  <li className=''>
                     <Link to='/last-mile' onClick={closeSolutionsSubMenuAndExit}>Last mile</Link>
                  </li>
                  <li className='hover:text-green-800'>
                     <Link to='/dispatch' onClick={closeSolutionsSubMenuAndExit}>24/7 Dispatch</Link>
                  </li>
               </ul>
            ) : showFleetSubMenu ? (
               // Submenu content for "Fleet"
               <ul className='h-full flex flex-col justify-center items-center gap-y-8 text-black font-primary font-blood text-3xl'>
                  <li className='hover:text-green-800'>
                     <Link to='/sprinter' onClick={closeFleetSubMenuAndExit}>Sprinter Van</Link>
                  </li>
                  <li className='hover:text-green-800'>
                     <Link to='/cargo' onClick={closeFleetSubMenuAndExit}>Cargo Van</Link>
                  </li>
                  <li className='hover:text-green-800'>
                     <Link to='/box-truck' onClick={closeFleetSubMenuAndExit}>Box Truck</Link>
                  </li>
                  <li className='hover:text-green-800'>
                     <Link to='/straight-truck' onClick={closeFleetSubMenuAndExit}>Straight Truck</Link>
                  </li>
                  <li className='hover:text-green-800'>
                     <Link to='/dry-van' onClick={closeFleetSubMenuAndExit}>Dry Van</Link>
                  </li>
                  <li className='hover:text-green-800'>
                     <Link to='/reefer-van' onClick={closeFleetSubMenuAndExit}>Reefer Van</Link>
                  </li>
               </ul>
            ) : (
               // Main menu content
               <ul className='h-full flex flex-col justify-center items-center gap-y-8 text-black font-primary font-blood text-3xl'>
                  <li className='hover:text-green-800'>
                     <Link to='/' onClick={() => setOpenMenu(false)}>Home</Link>
                  </li>
                  <li className='hover:text-green-800'>
                     <Link to='/about' onClick={() => setOpenMenu(false)}>About</Link>
                  </li>
                  <li className='flex items-center hover:text-green-800'>
                     <Link onClick={openSolutionsSubMenu}>Solutions</Link>
                     <MdKeyboardArrowRight />
                  </li>
                  <li className='flex items-center hover:text-green-800'>
                     <Link onClick={openFleetSubMenu}>Fleet</Link>
                     <MdKeyboardArrowRight />
                  </li>
                  <li className='hover:text-green-800'>
                     <Link to='/owner-operators' onClick={() => setOpenMenu(false)}>Owner Operators</Link>
                  </li>
                  <li className='hover:text-green-800'>
                     <Link to='/contact' onClick={() => setOpenMenu(false)}>Contact</Link>
                  </li>
               </ul>
            )}
         </motion.div>
      </nav>
   );
};

export default MobileNav;