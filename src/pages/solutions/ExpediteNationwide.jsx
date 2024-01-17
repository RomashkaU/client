import React from 'react'

//import link
import { Link } from 'react-router-dom';

// import images
import Expidition from '../../img/solution/expidition.jpg'

 //import motion
 import {motion} from 'framer-motion';
 //import transition
 import { transition1 } from '../../transitions';
 //variant
import { fadeIn } from '../../variants';

import { useInView } from 'react-intersection-observer';





const ExpediteNationwide = () => {
  return (
   <div>
      <section className='section'>
      {/* Background */}
      <div className='relative pt-[px]'>
         <div className='bg-solution1 h-[500px] w-full flex items-center relative bg-no-repeat bg-cover bg-center'>
         <motion.div
            initial={{ opacity: 0, y: '-50%' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="text-white text-center lg:text-left w-full absolute transform lg:pl-20 "
            >
            <h1 className='h1'>
             EXPEDITE NATIONWIDE
            </h1>
         </motion.div>
         </div>
      </div>
      </section>

      {/* Секція з фото */}
      <motion.section className='section'>
         <div className="container mx-auto h-full relative">
            <div className='flex-col h-full items-center justify-start text-center pt-14 pb-8'>
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
                           <span className="text-green-900 ">Expedite Nationwide</span>
                        </h1>
                        <p className=' m-3 md:max-w-xl lg:max-w-sm xl:max-w-md xxl:max-w-xl'>
                        A freight shipping strategy known as expedited shipping guarantees that your
                         shipment reaches its destination more quickly than with standard transit periods.
                          Trucks transporting accelerated products rarely make pit stops in order to hasten
                        the procedure. Expedited freight goes straight from pickup to delivery. We prove
                        this service so that you can receive your shipment in the quickest way possible
                        To transport even the most unusual and difficult commodities, we work with the best
                         drivers. Whatever your industry is, you can rely on us to have the knowledge required
                          to deliver your commodities in a safe and efficient manner.
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
                           src={Expidition}
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

export default ExpediteNationwide