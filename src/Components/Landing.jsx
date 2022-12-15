import React from 'react'
import Image from '../Images/zebby1.png'

const Landing = () => {
  return (
    <section className='Main_Land'>
      <div className='Main_Land_Left animate__animated animate__fadeInLeft animate__delay-1s animate__slow'>
        <img src={Image} alt="" />
      </div>
      <div className='Main_Land_Right animate__animated animate__fadeIn animate__delay-1s animate__slow'>
        <q className=''>Intellectual passion drives out sensuality</q>
      </div>
    </section>
  )
}

export default Landing