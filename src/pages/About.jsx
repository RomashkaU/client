import React from 'react'

//import link
import { Link } from 'react-router-dom';

// import images
import Sprinter from '../img/about/sprinter.png'

// import icons
import {FaGlobeAmericas, FaTools, FaCode, FaBolt, FaDollarSign, FaShieldAlt, FaSmile} from 'react-icons/fa'

 //import motion
 import {motion} from 'framer-motion';
 //import transition
 import { transition1 } from '../transitions';
 //variant
import { fadeIn } from '../variants';

import { useInView } from 'react-intersection-observer';





const About = () => {
   const [ref, inView] = useInView({
      triggerOnce: true, // Анімація запуститься лише один раз
    });

  return (
   <div>
      <section className='section'>
      {/* Background */}
      <div className='relative '>
         <div className='bg-about h-[500px] w-full flex items-center relative bg-no-repeat bg-cover bg-center'>
         <motion.div
              initial={{ opacity: 0, y: '-50%' }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className="text-white text-center lg:text-left w-full absolute transform lg:pl-20 "
            >
              <h1 className='h1'>
               ABOUT US
              </h1>
            </motion.div>
         </div>
      </div>
      </section>

      {/* Секція з фото */}
      <motion.section className='section'>
         <div className="container mx-auto h-full relative">
            <div className='flex-col h-full items-center justify-start text-center pt-14 '>
               {/* Text */}

                  {/* text & img wrapper */}
                  <div className='flex flex-col justify-center'>
                     {/* text */}
                     <motion.div
                     variants={fadeIn('right', 0.3)}
                     initial="hidden"
                     whileInView={"show"}
                     viewport={{once: true, amount: 0.3}}
                     className='w-full pt-28 pb-14 lg:pt-0 
                      lg:pl-5 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start lg:text-left'>
                        <h1 className='h1 text-black'>
                           GET TO KNOW <br />
                           <span className="text-green-900 ">AVE-TRANS</span>
                        </h1>
                        <p className=' m-3 max-w-sm '>
                        Welcome to <span className='text-green-900 font-bold'>AVE-TRANS</span>, 
                        a place where precision and logistics excellence 
                        together create seamless supply chain solutions. We are thrilled to have 
                        you here with us and are excited to show you just how committed we are to 
                        providing top-of-the-line transportation services.
                        </p>
                        <p className='m-3 max-w-sm'>
                        As a family-owned enterprise located in the heart of Dallas, TX, 
                        <span className='text-green-900 font-bold'> AVE-TRANS </span> 
                        has been dedicated to providing exceptional transportation services since 2015. 
                        Our team is passionate about creating a future where we transcend our customers' 
                        expectations and deliver freight with modernization, mobility, simplicity, and 
                        speed. We are confident that with our dedicated team, advanced technology, and 
                        strategic partnerships, your cargo will move efficiently, reliably, and on time.
                        </p>
                     </motion.div>

                     {/* image */}
                     <motion.div
                     ref={ref}
                     initial={{ opacity: 0, scale: 0.75 }}
                     animate={inView ? { opacity: 1, scale: 0.75 } : {}}
                     exit={{ opacity: 0, scale: 0.5 }}
                     transition={transition1}
                     className='flex justify-end max-h-max lg:scale-50'
                  >
                     <div className='relative lg:left-96 overflow-hidden'>
                     <motion.img
                        className=''
                        src={Sprinter}
                        alt=""
                     />
                     </div>
                  </motion.div>
                  </div>
               </div>
            </div>
         </motion.section>

         <motion.section className='section'>
         <div className="text-center my-8 pr-5 pl-5 md:pr-20 md:pl-20 pb-16">
            <motion.h2 
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true, amount: 0.3}}
            className="text-4xl font-bold mb-8">WHY WORK WITH US?</motion.h2>

            {/* Окремий квадрат */}
            <motion.div 
            variants={fadeIn('right', 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true, amount: 0.3}}
            className="p-4 bg-white rounded-md shadow-md mb-6 border">
               <div className="flex items-center justify-center mb-2 text-green-800">
                  <FaGlobeAmericas  className="text-4xl mr-4" />
                  <h3 className="text-xl font-bold mb-2">Cross-Border Services</h3>
               </div>
               <p>
               We are thrilled to offer our top-notch logistics services not only in the US
               but also in Canada and Mexico. Our team of experts has in-depth knowledge and
               experience in handling the complexities of international trade regulations,
               customs procedures, and documentation, making sure that your cross-border logistics
               are seamless and hassle-free. With our well-tailored services, we strive to minimize
               delays and enhance supply chain reliability, providing you with a smooth and efficient experience.
               Trust us to handle your cross-border logistics needs with utmost care and professionalism.
               </p>
            </motion.div>

            {/* Трійки по 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {/* 1 */}
               <motion.div 
               variants={fadeIn('right', 0.5)}
               initial="hidden"
               whileInView={"show"}
               viewport={{once: true, amount: 0.3}}
               className="p-4 bg-white rounded-md shadow-md border">
               <div className="flex items-center justify-center mb-2 text-green-800">
                  <FaTools className="text-4xl mr-4" />
                  <h3 className="text-xl font-bold">Tailored Solutions for Diverse Needs</h3>
               </div>
               <p>
                  We are aware of the different logistics requirements of customers.
                  We offer individualised solutions to fulfil these requirements whether
                  it be specialised handling, time-sensitive deliveries, or one-of-a-kind requirements
                  that are peculiar to international trade.
               </p>
               </motion.div>
               {/* 2 */}
               <motion.div 
               variants={fadeIn('right', 0.6)}
               initial="hidden"
               whileInView={"show"}
               viewport={{once: true, amount: 0.3}}
               className="p-4 bg-white rounded-md shadow-md border">
               <div className="flex items-center justify-center mb-2 text-green-800">
                  <FaBolt  className="text-4xl mr-4" />
                  <h3 className="text-xl font-bold mb-2">Swiftness</h3>
               </div>
               <p>
               Processing orders quickly, delivering them on schedule, and minimising transportation times are our top priorities. Our logistic service is remarkable because it meets and exceeds your expectations and is a direct outcome of our agility, which in turn increases customer happiness, improves inventory management, and gives us a competitive advantage in the market.               </p>
               </motion.div>
               {/* 3 */}
               <motion.div 
               variants={fadeIn('right', 0.7)}
               initial="hidden"
               whileInView={"show"}
               viewport={{once: true, amount: 0.3}}
               className="p-4 bg-white rounded-md shadow-md border">
               <div className="flex items-center justify-center mb-2 text-green-800">
                  <FaCode  className="text-4xl mr-4" />
                  <h3 className="text-xl font-bold mb-2">Cutting-edge Technology and Tracking</h3>
               </div>
               <p>
               <span className='text-green-900 font-bold'>AVE-TRANS</span> Employs advanced logistics technology, to provide real-time tracking, visibility, and transparency throughout the supply chain. Clients benefit from accurate monitoring of shipments, leading to enhanced control, reduced risks, and improved overall efficiency in logistics operations.               </p>
               </motion.div>
               {/* 4 */}
               <motion.div 
               variants={fadeIn('right', 0.8)}
               initial="hidden"
               whileInView={"show"}
               viewport={{once: true, amount: 0.3}}
               className="p-4 bg-white rounded-md shadow-md border">
               <div className="flex items-center justify-center mb-2 text-green-800">
                  <FaDollarSign  className="text-4xl mr-4" />
                  <h3 className="text-xl font-bold">Affordability</h3>
               </div>
               <p>
               Our logistics services are one of a kind because they are offered at prices that are affordable. This is made possible by our streamlined procedures, efficient route planning, and efficient utilisation of resources. We prioritise cost effectiveness over service quality in the highly competitive industry of logistics, and we provide our customers with solutions that are dependable and accessible at prices that are affordable.               </p>
               </motion.div>
               {/* 5 */}
               <motion.div 
               variants={fadeIn('right', 0.9)}
               initial="hidden"
               whileInView={"show"}
               viewport={{once: true, amount: 0.3}}
               className="p-4 bg-white rounded-md shadow-md border">
               <div className="flex items-center justify-center mb-2 text-green-800">
                  <FaShieldAlt className="text-4xl mr-4" />
                  <h3 className="text-xl font-bold">Risk Mitigation</h3>
               </div>
               <p>
               We keep our logistic services as risk free as possible through Strong risk assessment methods, cutting-edge tracking technology, and anticipatory contingency planning Our logistics operations are made more reliable and resilient by always monitoring  and responding to possible obstacles like weather delays, changes in routes, or unforeseen incidents. This way, we can assure our clients that there will be minimal disruptions and maximum reliability.               </p>
               </motion.div>   
               {/* 6 */}
               <motion.div 
               variants={fadeIn('right', 1)}
               initial="hidden"
               whileInView={"show"}
               viewport={{once: true, amount: 0.3}}
               className="p-4 bg-white rounded-md shadow-md border">
               <div className="flex items-center justify-center mb-2 text-green-800">
                  <FaSmile  className="text-4xl mr-4" />
                  <h3 className="text-xl font-bold">Excellent Customer Service</h3>
               </div>
               <p>
               Our logistics services prioritize customer satisfaction through a combination of cutting-edge technology, efficient processes, and a commitment to minimizing risks. On a regular basis, we provide first-rate customer service by guaranteeing on-time delivery through the seamless integration of cutting-edge tracking technology and preemptive contingency planning.                </p>
               </motion.div>   

            </div>
         </div>
         </motion.section>
   </div>
  )
}

export default About