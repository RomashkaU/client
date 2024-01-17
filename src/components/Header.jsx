import React, {useState} from 'react'

// import components
import MobileNav from './MobileNav' 
import Socials from './Socials';

// import logo
import LogoWhite from '../img/white_logo.png'
import { motion } from 'framer-motion';


// import language changer
import ExampleComponent from './ExampleComponent';
import { useTranslation } from 'react-i18next';

// import icons
import { MdOutlineKeyboardArrowDown } from "react-icons/md";




//import link
import { Link } from 'react-router-dom';


const Solutions = ({ links }) => {
   return (
      <div className="absolute ">
      <div className='bg-black/70 w-52 space-y-3 p-2 mt-7'>
        <div className="bg-white h-[1px] w-20 mt-[-5px]"></div> {/* Біла полоска */}
        {links.map((link) => (
          <Link key={link.to} to={link.to} className="text-white hover:text-white/50 hover:underline block">
            {link.label}
          </Link>
        ))}
      </div>
    </div>
   );
 };

const Fleet = ({ links }) => {
   return (
     <div className="absolute ">
      <div className='bg-black/70 w-40 space-y-2 p-2 mt-7'>
      <div className="bg-white h-[1px] w-12 mt-[-5px]"></div> {/* Біла полоска */}
       {links.map((link) => (
         <Link key={link.to} to={link.to} className="text-white hover:text-white/50 hover:underline block">
           {link.label}
         </Link>
       ))}
       </div>
     </div>
   );
 };

const Header = () => {
   const [isSolutionsHovered, setSolutionsHovered] = useState(false);
   const [isFleetHovered, setFleetHovered] = useState(false);
   const { t } = useTranslation();

  return (
   <header className='bg-green-900/70 fixed w-full px-[30px] lg:px-[80px] z-30 h-[60px] lg:h-[80px] flex items-center '>
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
      {/*Logo*/}
      <Link to={'/'} className='w-[200px] pt-4'>
      <motion.div initial={{ x: -100 }} animate={{ x: 0 }} whileHover={{ x: -10 }}>
         <img src={LogoWhite} alt="" />
      </motion.div>
      </Link>

      {/*nav - initially hidden - show on desktop mode*/}
      <nav className='hidden lg:flex gap-x-12 font-semibold'>
         <Link 
            to={'/'} 
            className='text-[#ffffff] hover:text-black/70 transition'
         >
            HOME
         </Link>
         <Link
            to={'/about'}
            className='text-[#ffffff] hover:text-black/70 transition'
         >
            ABOUT
         </Link>

         <div
            className="text-[#ffffff] hover:text-black/70 transition flex "
            onMouseEnter={() => setSolutionsHovered(true)}
            onMouseLeave={() => setSolutionsHovered(false)}
          >
            <span className="cursor-pointer">SOLUTIONS</span>
            <div className='hidden xl:block'>
               <MdOutlineKeyboardArrowDown style={{ fontSize: '24px' }}/>
            </div>
            {isSolutionsHovered && (
              <Solutions
                links={[
                  { to: '/expedite-nationwide', label: 'EXPEDITE NATIONWIDE' },
                  { to: '/cross-border', label: 'CROSS BORDER' },
                  { to: '/last-mile', label: 'LAST MILE' },
                  { to: '/dispatch', label: '24/7 DISPATCH' },
                  // Додайте інші підвкладки за необхідністю
                ]}
              />
            )}
          </div>

          <div
            className="text-[#ffffff] hover:text-black/70 transition flex "
            onMouseEnter={() => setFleetHovered(true)}
            onMouseLeave={() => setFleetHovered(false)}
          >
            <span className="cursor-pointer">FLEET</span>
            <div className='hidden xl:block'>
               <MdOutlineKeyboardArrowDown style={{ fontSize: '24px' }}/>
            </div>
            {isFleetHovered && (
              <Fleet
                links={[
                  { to: '/sprinter', label: 'SPRINTER VAN' },
                  { to: '/cargo', label: 'CARGO VAN' },
                  { to: '/box-truck', label: 'BOX TRUCK' },
                  { to: '/straight-truck', label: 'STRAIGHT TRUCK' },
                  { to: '/dry-van', label: 'DRY VAN' },
                  { to: '/reefer-van', label: 'REEFER VAN' },
                  // Додайте інші підвкладки за необхідністю
                ]}
              />
            )}
          </div>

         <Link
            to={'/owner-operators'}
            className='text-[#ffffff] hover:text-black/70 transition'
         >
            OWNER OPERATORS
         </Link>
         <Link
            to={'/contact'}
            className='text-[#ffffff] hover:text-black/70 transition'
         >
            CONTACT
         </Link>
      </nav>
      </div>

      {/*mobile nav*/}
      <MobileNav />
   </header>
  )
}

export default Header