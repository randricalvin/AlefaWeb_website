import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import realisations from '../data/realisations'

const RealisationDetail = () => {
    const { id } = useParams()
    const [realisation, setRealisation] = useState(realisations[id])
  
    console.log(id)



  return (
    <div>
        <h1>
            {realisation.title}
        </h1>
    </div>
  )
}

export default RealisationDetail