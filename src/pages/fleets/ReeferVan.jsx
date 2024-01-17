import React from 'react'

//import link
import { Link } from 'react-router-dom';

// import images
import Van from '../../img/fleet/reefervan.png'

 //import motion
import {motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
 //variant
import { fadeIn, fadeVan } from '../../variants';

const slideInFromRight = {
   hidden: { opacity: 0, x: '80%' },
   visible: { opacity: 1, x: 0 },
 };



const ReeferVan = () => {
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
                REEFER VAN
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
                     <h1 className='h1 text-gradient3'> <span className='text-green-900'>Reefer</span> Van</h1>
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
                        Welcome to the world of next-level cargo transportation with our Reefer Vans! We are thrilled to offer you 
                        a top-of-the-line solution that is designed to preserve perishables with the utmost precision. Whether you're 
                        shipping pharmaceuticals or fresh produce, our vans take care of your delicate goods and ensure their safe arrival 
                        in perfect condition. 
                        </p>

                        <p className='m-3 max-w-2xl '>
                        With cutting-edge refrigeration technology, our Reefer Vans provide precise temperature control, so you can trust us 
                        with your perishable goods. We have years of experience in cold chain logistics and have catered to various industries. 
                        Our team understands the importance of maintaining the cold chain, and we take every precaution to keep your shipment 
                        at the proper temperature. 
                        </p>

                        <p className='m-3 max-w-2xl '>
                        Our Reefer Vans are suitable for trips of any length, and we guarantee that our refrigeration systems are trustworthy. 
                        Our vans are constructed with sturdiness and provide dependability with every mile traveled. You can rest assured knowing 
                        that your shipment is in good hands, and unpredictable weather conditions won't affect your delivery. Choose our Reefer Vans 
                        today and experience a hassle-free journey for your perishable goods!
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

export default ReeferVan