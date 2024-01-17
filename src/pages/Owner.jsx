import React from 'react'

//import link
import { Link } from 'react-router-dom';

// import images
import Operator from '../img/owner/operator.jpg'

 //import motion
 import {motion} from 'framer-motion';
 //import transition
 import { transition1 } from '../transitions';
 //variant
import { fadeIn } from '../variants';

import { useInView } from 'react-intersection-observer';

import FormOwner from '../components/FormOwner'




const Owner = () => {
   const [ref, inView] = useInView({
      triggerOnce: true, // Анімація запуститься лише один раз
    });

  return (
   <div>
      <section className='section'>
      {/* Background */}
      <div className='relative pt-[px]'>
         <div className='bg-owner h-[500px] w-full flex items-center relative bg-no-repeat bg-cover bg-center'>
         <motion.div
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            animate="show"
            viewport={{once: false, amount: 0.5}}
            className="text-white text-center lg:text-left w-full absolute transform lg:pl-20"
            >
            <h1 className='h1'>
               OWNER OPERATORS
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
               <div className='flex flex-col items-center justify-center'>
                  <motion.h1 
                  variants={fadeIn('right', 0.6)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{once: true, amount: 0.5}}
                  className='h1 text-gradient3'> FOR <span className='text-green-900'>OWNER</span> OPERATORS
                  </motion.h1>
                  <motion.p 
                  variants={fadeIn('left', 0.8)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{once: true, amount: 0.5}}
                  className=''>
                     <span className='text-green-900 font-bold'>AVE-TRANS</span> is your trusted transportation partner
                  </motion.p>
                  <motion.p 
                  variants={fadeIn('up', 1)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{once: true, amount: 0.5}}
                  className='m-3 max-w-4xl '> 
                     Are you an ambitious Owner Operator eager to boost your earnings? Our company 
                     is thrilled to offer you an incredible 90% take-home pay from the total load gross, 
                     with no sneaky hidden fees to worry about. We're proud to offer both reefer and dry 
                     van options and we always prioritize your freedom by never forcing dispatch.
                  </motion.p>

                  <motion.p 
                  variants={fadeIn('up', 1)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{once: true, amount: 0.5}}
                  className='m-3 max-w-4xl '> 
                     We believe in your worth and want to help you reach the top-tier status you deserve. 
                     Join our dynamic team and let us help you carve out your path to success in the 
                     thriving transportation industry. 
                  </motion.p>

                  <motion.p 
                  variants={fadeIn('up', 1)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{once: true, amount: 0.5}}
                  className='m-3 max-w-4xl '> 
                     Running a business can be tough, but we're here to help! Our goal is to build 
                     a positive and beneficial partnership with our clients and owner-operators. 
                     We're committed to ensuring everyone involved is happy and thriving. Let's succeed together!
                  </motion.p>

                  <motion.p 
                  variants={fadeIn('up', 1)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{once: true, amount: 0.5}}
                  className='m-3 max-w-4xl text-xl'> 
                     Take that crucial step towards your bright future today!
                  </motion.p>
               </div>
                  {/* Form & img wrapper */}
               <div className='flex flex-col justify-center pt-14 lg:pt-36 xxl:pt-24 pb-10 lg:pb-32'>
                     {/* Form */}
                     <motion.div
                     variants={fadeIn('right', 0.3)}
                     initial="hidden"
                     whileInView={"show"}
                     viewport={{once: true, amount: 0.5}}
                     className='w-full lg:pt-0 
                      lg:pl-5 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start lg:text-left lg:left-14'>
                        <FormOwner />
                     </motion.div>

                     {/* image */}
                     <motion.div
                        variants={fadeIn('left', 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{once: true, amount: 0.5}}
                        className='flex lg:justify-end  justify-center pt-14'>
                        <div className='relative overflow-hidden '>
                        <motion.img
                           className='xxl:max-h-[360px] max-h-[240px]'
                           src={Operator}
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

export default Owner