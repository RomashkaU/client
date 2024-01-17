import React from 'react';
import {FaPhone} from 'react-icons/fa'
//import icons
import {
   FaInstagram,
   FaTelegram,
   FaWhatsapp,
   FaViber,
} from 'react-icons/fa'

const Socials = () => {
  return (
    <div className=''>
      <div className='flex hover:text-white/60 pb-3 text-sm'>
         <div className='pr-2'>
            <FaPhone /> 
         </div>
            <a href="tel:+12249556912">+1 (224)-955-6912</a>
         </div>
    </div>
  )
}

export default Socials