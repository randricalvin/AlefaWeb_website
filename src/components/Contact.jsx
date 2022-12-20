import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import trait_marquage from '../assets/trait_marquage.svg'
import './Contact.scss'
import Modal from './Modal'

const Contact = () => {
  const [showModal, setShowModal] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gd5i47d', 'template_ez5i6rn', e.target, 'sxfWim9O4aQa5hsXP')
      .then((result) => {
          setShowModal(true)
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      e.target.reset();    
  };



  return (
    <div className='flex-col w-5/6 mx-auto' id="contact">
      <div className='flex flex-col items-center'>
          <span className='text-3xl font-bold font-serif text-[#7B52FB] pt-8 uppercase'>
            Contactez-moi
          </span>
          <img src={trait_marquage} alt="trait marquage" className='w-1/4'/>
        </div>
        <p className='my-12 font-serif2 text-service w-full'>
          Vous avez un projet en tête ? N'hésitez pas à me contacter, je vous répondrai<span className='font-bold'> dans les plus brefs délais.</span> 
        </p>
        
    <form className='input-form font-serif2' onSubmit={sendEmail}>
        <div className='name-input flex flex-row'>
            <input className='w-1/2 mr-5 border bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#7B52FB] focus:shadow-lg' type="text" placeholder="Prénom" name="from_name" required/>
            <input className='w-1/2 border bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#7B52FB] focus:shadow-lg' type="text" placeholder="Nom" name="from_name" required/>
        </div>
        <div className='flex flex-row'>
          <input className='w-1/2 mr-5 my-5 border bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#7B52FB] focus:shadow-lg' type="email" placeholder="Email" name="email" required/>
          <input className='w-1/2 my-5 border bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#7B52FB] focus:shadow-lg' type="tel" placeholder="Téléphone" name="phone" />
        </div>
        <textarea className='w-full h-40 resize-none border bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#7B52FB] focus:shadow-lg' type='message' placeholder='Message' name="message" required/>
        <div className='page-contact-button flex justify-center my-5'>
          <button type="submit" className="text-white bg-[#fd7d28] hover:bg-[#FF6501] hover:transition duration-300 ease-in-out font-bold rounded-full text-sm px-5 py-3 inline-flex justify-center text-center uppercase" value="Send Message">Envoyer
          </button>
        </div>
        {/* on affiche le modal si showModal est true */}
        {showModal && <Modal setShowModal={setShowModal}/>}
    </form>
</div>
  );
};


export default Contact