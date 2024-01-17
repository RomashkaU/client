import React, { useState, useRef } from 'react'
import emailjs from 'emailjs-com'

const FormOwner = () => {
   const form = useRef();
   const [isFormSubmitted, setIsFormSubmitted] = useState(false);

   const sendEmail = (e) => {
      e.preventDefault();

      if (!e.target.firstname.value || !e.target.phone.value) {
         alert("Please fill in the required fields: name and phone");
         return;
      }

      emailjs.sendForm('service_kbm7bvx', 'template_ty8axwm', form.current, 'Fl54wO0NrR6EB9aFu')
        .then((result) => {
            console.log(result.text);
            setIsFormSubmitted(true);
            form.current.reset(); // Очищаем поля формы
        }, (error) => {
            console.log(error.text);
        });
   };
  return (
    <div className='border border-primary/40 rounded p-6 shadow-2xl'>
      <div className=' '>
         <h1 className='h1 text-gradient3'><span className='text-green-900'>JOIN US</span> form</h1>
         {/* Form */}
                  <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-y-2'>
                        <select name='type' className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'>
                           <option>Cargo Van/Sprinter Van</option>
                           <option>Box Truck</option>
                           <option>Straight Truck</option>
                           <option>Dry Van</option>
                           <option>Reefer Van</option>
                        </select>
                     <div className='flex gap-x-10'>
                        <input
                           className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
                           type="text"
                           name='firstname'
                           placeholder='First Name'
                        />
                        <input
                           className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
                           type="text"
                           name='lastname'
                           placeholder='Last Name'
                        />
                     </div>
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
                           placeholder="Email"
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
               </div>
    </div>
  )
}

export default FormOwner