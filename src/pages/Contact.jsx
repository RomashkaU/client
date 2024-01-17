import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com'
import {
   FaTelegram,
   FaWhatsapp,
   FaViber,
} from 'react-icons/fa'
import {BsTelephone} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
// import language changer
import { useTranslation } from 'react-i18next';
 //import motion
 import {motion} from 'framer-motion';
 //variant
 import { fadeIn } from '../variants';



const Contact = () => {
   const { t } = useTranslation();
   const form = useRef();
   const [isFormSubmitted, setIsFormSubmitted] = useState(false);
   const [socialMedia, setSocialMedia] = useState('');

   const sendEmail = (e) => {
      e.preventDefault();

      if (!e.target.name.value || !e.target.phone.value) {
         alert("Please fill in the required fields: name and phone.");
         return;
      }

      emailjs.sendForm('service_kbm7bvx', 'template_xms8h8a', form.current, 'Fl54wO0NrR6EB9aFu')
        .then((result) => {
            console.log(result.text);
            setIsFormSubmitted(true);
            form.current.reset(); // Очищаем поля формы
        }, (error) => {
            console.log(error.text);
        });
   };
   


  

  const handleSocialMediaChange = (event) => {
   setSocialMedia(event.target.value);
 };




  return (
   <div>
      <section className='section'>
         {/* Background */}
         <div className='relative pt-[px]'>
            <div className='bg-contact h-[600px] w-full flex items-center relative bg-no-repeat bg-cover bg-right lg:bg-'>
               <motion.div
               variants={fadeIn('right', 0.2)}
               initial="hidden"
               animate="show"
               viewport={{once: false, amount: 0.5}}
               className="text-white text-center lg:text-left w-full absolute transform lg:pl-20"
               >
               <h1 className='h1'>
                  CONTACT
               </h1>
               </motion.div>
            </div>
         </div>
      </section>


      <section className='section bg-white pb-20'>
       <div className='bg-maping h-[900px] w-full flex items-center relative bg-no-repeat bg-cover bg-right lg:bg-center'>
         <div className="container mx-auto h-full">
            <div className='flex flex-col lg:flex-row h-full items-center justify-start gap-x-8 text-center lg:text-left '>
            {/* Text on the left */}
            <motion.div 
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true, amount: 0.3}}
            className='lg:flex-1 px-4 lg:pl-20'>
               <h1 className='h1 text-gradient2 mb-4 pt-10 lg:pt-0 '>AVE-TRANS</h1>
               <p className='mb-4 text-2xl '>Contacts</p>
               <p className='mb-4'>Still have questions?</p>
               <div className='flex mb-4 hover:text-black/60'>
                  <div className='pr-2 text-xl'>
                     <BsTelephone /> 
                  </div>
                  <a href="tel:+12249556912">+1 (224)-955-6912</a>
               </div>
               <div className='flex mb-6 hover:text-black/60'>
                  <div className='pr-2 text-xl'>
                     <AiOutlineMail /> 
                  </div>
                  <a href="mailto:Admin@ave-trans.com">Admin@ave-trans.com</a>
               </div>
               <a href="https://wa.me/?" target='_blank'>
                  <button className='button lg:ml-0'>
                  Call us (WhatsApp)
                  </button>
               </a>
            </motion.div>

               {/* Form on the right */}
               <motion.div 
               variants={fadeIn('left', 0.3)}
               initial="hidden"
               whileInView={"show"}
               viewport={{once: true, amount: 0.3}}
               className='lg:flex-1 pt-10  px-4 lg:pr-10 mt-10 lg:mt-0 rounded p-6 shadow-2xl'>
                  <h1 className='h1 text-gradient3'>Connect with us</h1>
                  <p className='mb-12'>Write your details and we will contact you</p>
                  {/* Form */}
                  <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-y-4'>
                     <input
                        className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
                        type="text"
                        name='name'
                        placeholder='Name'
                     />
                     <div className='flex gap-x-10'>
                        <input
                           className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
                           type="tel"
                           name='phone'
                           placeholder='Phone'
                        />
                        <input
                           className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
                           type="email"
                           name='email'
                           placeholder="mail"
                        />
                  </div>

                  {/* Коментарии */}
                  <input
                     className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
                     type="text"
                     name='message'
                     placeholder='Comments'
                  />

                  {isFormSubmitted ? (
                     <p className="text-green-900">Thank you! Your message has been sent</p>
                  ) : (
                     <button type='submit' onClick={() => {}} className='btn-grad mb-[30px] mx-auto lg:mx-0 self-start'>Send</button>
                  )}               
                  </form>
               </motion.div>
            </div>
         </div>
         </div>
      </section>
      <section className='section '>
         <div className='maps '>
            <iframe
               title="My Google Map"
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3340.552144259199!2d-96.70836612486242!3d33.14712856498059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c168abd1d5379%3A0x365bf7103ff0758b!2s6800%20Bermuda%20Ave%2C%20McKinney%2C%20TX%2075070%2C%20USA!5e0!3m2!1sen!2sua!4v1705422016095!5m2!1sen!2sua"
               width="100%"
               height="450"
               style={{ border: 0 }}
               allowFullScreen=""
               loading="lazy"
               referrerPolicy="no-referrer-when-downgrade"
               hl="en"
            />
      </div>
      </section>
    </div>
  );
};

export default Contact;
