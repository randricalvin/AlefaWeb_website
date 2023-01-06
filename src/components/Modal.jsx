import React from 'react'
import './Modal.scss'
import crossmodal from '../assets/crossmodal.svg'

const Modal = ({ setShowModal }) => {
    


  return (
    <div>
        <div className='modal-overlay bg-modal'>
            <div className='modal-wrapper' aria-modal aria-hidden tabIndex={-1} role='dialog'>
                <div className='h-full flex flex-col mt-6 items-center justify-center text-xl font-serif2 text-modal'>
                    <p>
                        Merci ! 
                    </p> 
                    <p className='my-2'>
                        Votre message a bien été envoyé.
                    </p>
                    <p>
                        Je vous répondrai dans les plus brefs délais.
                    </p>
                <div className='modal-header py-4 px-4'>
                    <button 
                    type="submit" 
                    className="button-service text-white bg-[#fd7d28] hover:bg-[#FF6501] hover:transition duration-300 ease-in-out font-bold rounded-full text-sm px-5 py-3 inline-flex justify-center text-center uppercase"
                    onClick={() => setShowModal(false)}
                    >    
                    fermer</button>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal