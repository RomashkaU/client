import React from 'react'

//import link
import { Link } from 'react-router-dom';

// import images
import Van from '../../img/fleet/dryvan.png'

 //import motion
import {motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
 //variant
import { fadeIn, fadeVan } from '../../variants';

const slideInFromRight = {
   hidden: { opacity: 0, x: '80%' },
   visible: { opacity: 1, x: 0 },
 };



const DryVan = () => {
   const [ref, inView] = useInView({
      triggerOnce: true, // Анімація включиться тільки один раз
 
    });


  return (
   <div className='overflow-hidden'>
      <section className='section'>
      {/* Background */}
      <div className='relative pt-[px]'>
         <div className='bg-fleet5 h-[500px] w-full flex items-center relative bg-no-repeat bg-cover bg-center'>
         <motion.div
              initial={{ opacity: 0, y: '-50%' }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className="text-white text-center lg:text-left w-full absolute transform lg:pl-20 top-1/2"
            >
              <h1 className='h1'>
                DRY VAN
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
                     <h1 className='h1 text-gradient3'> <span className='text-green-900'>Dry</span> Van</h1>
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
                        <p className=' max-w-2xl '>
                        Dry vans are enclosed cargo containers that are commonly used for transporting goods 
                        on the road. Our trailers are expertly crafted to shield your cargo from any external 
                        factors, including weather conditions, dust, and debris.  There is a wide range of sizes 
                        available for dry vans, allowing for the transportation of various cargo volumes with ease. 
                        They are widely used and adaptable in the shipping and logistics sector, providing a reliable 
                        and durable space for goods during transportation.
                        </p>

                        <p className='m-3 max-w-2xl '>
                        Discover unparalleled quality with our Dry Van shipping service. With our weather-resistant design, 
                        you can trust that your cargo will remain safe and protected no matter the conditions. The interiors of 
                        our Dry Vans are fully customizable, allowing you to tailor the space to your specific needs. Additionally, 
                        our robust locks provide both versatility and security, giving you peace of mind. 
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

export default DryVan