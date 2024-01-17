import React from 'react'

//import link
import { Link } from 'react-router-dom';

// import images
import Border from '../../img/solution/dispatch.jpg'

 //import motion
 import {motion} from 'framer-motion';
 //import transition
 import { transition1 } from '../../transitions';
 //variant
import { fadeIn } from '../../variants';






const Dispatch = () => {
  return (
   <div>
      <section className='section'>
      {/* Background */}
      <div className='relative pt-[px]'>
         <div className='bg-solution4 h-[500px] w-full flex items-center relative bg-no-repeat bg-cover bg-center'>
         <motion.div
            initial={{ opacity: 0, y: '-50%' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="text-white text-center lg:text-left w-full absolute transform lg:pl-20 "
            >
            <h1 className='h1'>
             24/7 DISPATCH
            </h1>
         </motion.div>
         </div>
      </div>
      </section>

      {/* Секція з фото */}
      <motion.section className='section'>
         <div className="container mx-auto h-full relative">
            <div className='flex-col h-full items-center justify-start text-center pt-14 lg:pt-0 pb-8'>
               {/* Text */}

                  {/* text & img wrapper */}
                  <div className='flex flex-col justify-center'>
                     {/* text */}
                     <motion.div
                     variants={fadeIn('right', 0.3)}
                     initial="hidden"
                     whileInView={"show"}
                     viewport={{once: false, amount: 0.3}}
                     className='w-full
                      lg:pl-5 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start text-left'>
                        <h1 className='h1 text-black'>
                           <span className="text-green-900 ">24/7 Dispatch Service</span>
                        </h1>
                        <p className=' m-3 md:max-w-xl lg:max-w-sm xl:max-w-md xxl:max-w-xl'>
                        Our dispatch specialists work around the clock to ensure an uninterrupted service. 
                        Collaborating with top-tier shippers and brokers, we meticulously source suitable 
                        loads throughout the continental US, contributing to the success of your business. 
                        Upon presenting a load, we make information regarding the anticipated travel time and 
                        designated regions available to you.  We are committed to exploring flexible options 
                        to accommodate your shipping needs. We are dedicated to finding flexible choices that 
                        meet your individual needs, whether you need expedited or prolonged travel.
                        </p>
                     </motion.div>

                     {/* image */}
                     <motion.div
                        initial={{ scale: 0}}
                        animate={{scale: 0.75}}
                        exit={{scale: 0}}
                        transition={transition1} 
                        className='flex justify-end max-h-max lg:scale-75'>
                        <div className='relative lg:left-96 overflow-hidden '>
                        <motion.img
                           className='lg:scale-75'
                           src={Border}
                           alt=""
                        />
                        </div>
                     </motion.div>
                  </div>
               </div>
            </div>
         </motion.section>
   </div>
  )
}

export default Dispatch