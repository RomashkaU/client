import React, {useRef} from 'react'
import Lottie from 'lottie-react'
import animationData from '../animation.json'

//import link
import { Link } from 'react-router-dom';

 //import motion
 import {motion} from 'framer-motion';
 //import transition
 import { transition1 } from '../transitions';
 //variant
import { fadeIn } from '../variants';

import { useInView } from 'react-intersection-observer';






const Home = () => {
   const [ref, inView] = useInView({
      triggerOnce: true, // Анімація запуститься лише один раз
    });


  return (
   <div>
      <section className='section'>
      {/* Background */}
      <div className='relative pt-[px]'>
         <div className='bg-home h-[800px] w-full flex items-center relative bg-no-repeat bg-cover bg-center '>
         <motion.div
              initial={{ opacity: 0, y: '-50%' }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className="text-white text-center w-full absolute top-1/4 transform -translate-y-1/2"
            >
              <h1 className='h2'>
            
              </h1>
            </motion.div>
         </div>
      </div>
      </section>

      {/* Секція з фото */}
      <motion.section 
         className='section'>
               <div className="container mx-auto h-full relative lg:pt-32 pb-10 lg:pb-36">
                  {/* text & img wrapper */}
                  <div className='flex flex-col justify-center'>
                     {/* text */}
                     <motion.div
                     className='w-full pt-28 pb-14  
                      lg:pl-5 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start text-center lg:text-left xl:left-20'>
                        <motion.h1 
                        variants={fadeIn('right', 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{once: true, amount: 0.3}}
                        className='h1 text-black'>
                           WELCOME TO <br /> 
                           <span className='text-green-900'>AVE-TRANS</span>
                        </motion.h1>
                        <motion.p
                        variants={fadeIn('right', 0.6)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{once: true, amount: 0.3}} 
                        className=' m-3 max-w-md text-sm lg:text-base'>
                        The perfect partner for all your transportation needs. <br /> 
                        Our team is committed to providing top-notch service that
                        sets new standards in the US transportation industry. <br />
                        We prioritize efficiency and work tirelessly to optimize
                        routes to ensure timely and cost-effective deliveries. <br />
                        We understand how important your cargo is, and you can
                        trust us to handle it with the utmost care from start to finish. <br />
                        Our unwavering commitment to dependability, flexibility,
                        and effectiveness makes us the ideal choice for all your 
                        shipping requirements. With <span className='text-green-900 font-bold'>AVE-TRANS </span>, you can rest assured 
                        that your transportation needs are in excellent hands!
                        </motion.p>
                        <motion.div
                        variants={fadeIn('right', 0.9)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{once: true, amount: 0.3}}>
                        <Link to={'/contact'} className='btn-grad mb-[30px] mt-[20px] hidden lg:block'>
                           Contact
                        </Link>
                        </motion.div>
                     </motion.div>
                     <div className='flex justify-center lg:justify-end  lg:scale-90'>
                        <div className='relative overflow-hidden xl:right-20'>
                           <Lottie   animationData={animationData} loop={false}/>
                        </div>  
                     </div>
                  </div>
               </div>
            </motion.section>
            <motion.section className='section pb-10 '>
               <div className="container mx-auto h-full relative">
                  <div className='flex-col h-full items-center justify-start text-center pt-14 pb-8'>
                     {/* Text */}
                     <div className='flex flex-col items-center justify-center'>
                        <motion.h1 
                        variants={fadeIn('right', 0.6)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{once: true, amount: 0.5}}
                        className='text-3xl font-bold font-primary'> Mastering Seamless Logistics
                        </motion.h1>
                        <motion.p 
                        variants={fadeIn('up', 1)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{once: true, amount: 0.5}}
                        className='m-3 max-w-2xl '> 
                           Optimize your supply chain with precision and efficiency. 
                           We ensure every aspect of your operations is streamlined for success, 
                           from warehousing to delivery.
                        </motion.p>
                     </div>
                  </div>
               </div>
            </motion.section>

   </div>
  )
}

export default Home