import React from 'react'

const RealisationsList = ({ realisation }) => {
  return (
        <div className='font-serif2 flex md:flex-row w-full bg-red-400'>
            
            {/* card 1 */}
            <div className='flex items-center w-full md:w-1/2'>
                <div class="overflow-hidden shadow-lg bg-green-400">
                    <img class="" src={realisation.image} alt="Mountain"/>
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{realisation.title}</div>
                        <p class="text-gray-700 text-base">
                        {realisation.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default RealisationsList