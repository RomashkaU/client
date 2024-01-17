import React from 'react'

//import link
import { Link } from 'react-router-dom';

// import images
import Van from '../../img/fleet/straight.png'

 //import motion
import {motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
 //variant
import { fadeIn, fadeVan } from '../../variants';

const slideInFromRight = {
   hidden: { opacity: 0, x: '80%' },
   visible: { opacity: 1, x: 0 },
 };



const StraightTruck = () => {
   const [ref, inView] = useInView({
      triggerOnce: true, // Анімація включиться тільки один раз
 
    });


  return (
   <div className='overflow-hidden'>
      <section className='section'>
      {/* Background */}
      <div className='relative pt-[px]'>
         <div className='bg-fleet4 h-[500px] w-full flex items-center relative bg-no-repeat bg-cover bg-center'>
         <motion.div
              initial={{ opacity: 0, y: '-50%' }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className="text-white text-center lg:text-left w-full absolute transform lg:pl-20 top-1/2"
            >
              <h1 className='h1'>
                STRAIGHT TRUCK
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
                  <div className='flex flex-col'>
                     <h1 className='h1 text-gradient3'> <span className='text-green-900'>Straight</span> Truck</h1>
                  </div>
                  {/* text & img wrapper */}
                  <div className='flex flex-col justify-center pt-10 pb-10'>
                     {/* text */}
                     <motion.div
                     variants={fadeIn('right', 0.5)}
                     initial="hidden"
                     whileInView={"show"}
                     viewport={{once: false, amount: 0.3}}
                     className='w-full pb-14 lg:pt-0 
                       lg:w-auto z-10  flex flex-col justify-center items-center  lg:text-left '>
                        <p className='max-w-2xl '>
                        At <span className='text-green-900 font-bold'>AVE-TRANS</span>, we understand the difficulties that can arise when transporting 
                        less-than-truckload quantities of freight. That's why we're proud to offer 
                        straight trucks that integrate the cab and cargo area, spanning lengths of 22, 
                        24, or 26 feet. These vehicles are an advantageous solution for those looking 
                        to streamline their shipping process, as they address the inefficiencies and 
                        untimeliness often associated with LTL services. Not only do straight trucks 
                        offer expediency, but they can also yield cost-effectiveness when compared to 
                        using a 53-foot trailer. We're confident that our straight trucks are the best
                        option for transporting your freight, and we look forward to helping you with 
                        your transportation needs.

                        </p>
                     </motion.div>

                     <motion.div
                     ref={ref}
                     className='flex  max-h-max lg:scale-50 justify-center relative z-10'
                     initial='hidden'
                     whileInView={"visible"}
                     variants={slideInFromRight}
                     transition={{ duration: 1.1, delay: 1.3 }} 
                     >
                     <div className=''>
                        <motion.img
                           className=''
                           src={Van}
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

export default StraightTruck