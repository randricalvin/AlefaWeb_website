import React from 'react'
import './Arrow.scss'

const Arrow = () => {
  return (
    <div className='flex justify-center'>
        <svg width="52" height="131" viewBox="0 0 52 131" fill="none" xmlns="http://www.w3.org/2000/svg" className='animate-bounce arrow'>
            <path d="M25.679 26.442C31.578 26.442 36.361 31.225 36.361 37.124V56.962C36.361 62.861 31.578 67.642 25.679 67.642C19.78 67.642 14.997 62.861 14.997 56.962V37.124C14.997 31.225 19.78 26.442 25.679 26.442Z" stroke="#1B1559" stroke-width="2"/>
                <g opacity="0.684298">
                    <path d="M14.234 97.062L25.679 108.506L37.124 97.062" stroke="#1B1559" stroke-width="2"/>
                </g>
                <g opacity="0.315702">
                    <path d="M14 80L25.445 91.444L36.89 80" stroke="#1B1559" stroke-width="2"/>
                </g>
            <path d="M25.679 46.5062V50.5572" stroke="#1B1559" stroke-width="2"/>
        </svg>
    </div>
  )
}

export default Arrow