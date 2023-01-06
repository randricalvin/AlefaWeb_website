import React, { useState, useEffect } from 'react'
import emailjs from 'emailjs-com'
import trait_marquage from '../assets/trait_marquage.svg'
import './Contact.scss'
import Modal from './Modal'
import Aos from 'aos'
import blob5 from '../assets/blob5.svg'

const Contact = () => {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

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
    <section className='justify-start items-center flex flex-col font-serif2 lg:w-5/6 mx-auto content-width' id="contact">
        <div>
          <img src={blob5} alt="blob-animation" className='blob-animation5' />
        </div>
      <div className='flex flex-col items-center'>
          <span className='text-3xl font-bold font-serif text-[#7B52FB] pt-20 uppercase'>
            Contactez-moi
          </span>
          <img src={trait_marquage} alt="trait marquage" className='w-2/3'/>
        </div>
        <p className='lg:my-12 font-serif2 text-service w-full'>
          Vous avez un projet en tête ? N'hésitez pas à me contacter, je vous répondrai<span className='font-bold'> dans les plus brefs délais.</span> 
        </p>
        
    <form data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='input-form font-serif2' onSubmit={sendEmail}>
        <div className='name-input flex lg:flex-row info1'>
            <input className='field lg:w-1/2 lg:mr-5 border bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#7B52FB] focus:shadow-lg' type="text" placeholder="Prénom" name="from_name" required/>
            <input className='field lg:w-1/2 border bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#7B52FB] focus:shadow-lg' type="text" placeholder="Nom" name="from_name" required/>
        </div>
        <div className='flex lg:flex-row info2'>
          <input className='field lg:w-1/2 lg:mr-5 lg:my-5 border bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#7B52FB] focus:shadow-lg' type="email" placeholder="E-mail" name="email" required/>
          <input className='field lg:w-1/2 lg:my-5 border bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#7B52FB] focus:shadow-lg' type="tel" placeholder="Téléphone" name="phone" />
        </div>
        <div>
          {/* adding a select input for the subject of the email */}
          <select className='field w-full lg:mb-5 border bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#7B52FB] focus:shadow-lg' name="subject" required>
            <option value="default" disabled selected hidden>Objet de la demande</option>
            <option value="Demande de devis">Demande de devis</option>
            <option value="Demande de renseignements">Demande de renseignements</option>
            <option value="Autre">Autre</option>
          </select>
        </div>
        <textarea className='w-full h-40 resize-none border bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#7B52FB] focus:shadow-lg' type='message' placeholder='Message' name="message" required/>
        <div className='page-contact-button flex justify-center pt-12 pb-14'>
          <button type="submit" className="button-service lg:w-1/5 text-white bg-[#fd7d28] hover:bg-[#FF6501] hover:transition duration-300 ease-in-out font-bold rounded-full text-sm px-5 py-3 inline-flex justify-center text-center uppercase" value="Send Message">Envoyer
          </button>
        </div>
        {/* on affiche le modal si showModal est true */}
    </form>
        {showModal && <Modal setShowModal={setShowModal}/>}
</section>
  );
};


export default Contact