import React from 'react'
import './Modal.scss'
import crossmodal from '../assets/crossmodal.svg'

const Modal = ({setShowModal}) => {
    


  return (
    <div>
        <div className='modal-overlay bg-modal'>
            <div className='modal-wrapper' aria-modal aria-hidden tabIndex={-1} role='dialog'>
                <div className='modal-header flex justify-end py-4 px-4'>
                    <img src={crossmodal} alt="fermer" className='cursor-pointer' onClick={() => setShowModal(false)}/>
                </div>
                <div className='h-full flex flex-col mt-6 items-center text-xl font-serif2'>
                    <p>
                        Merci ! 
                    </p> 
                    <p className='my-2'>
                        Votre message a bien été envoyé.
                    </p>
                    <p>
                        Je vous répondrai dans les plus brefs délais.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal