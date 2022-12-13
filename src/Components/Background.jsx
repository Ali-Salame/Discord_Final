import React from 'react'
import Video from '../Images/background.mp4'
import Image from '../Images/zebby1.png'

const Background = () => {
  return (
    <div className='Main_Container'>
      <video className='Main_Container_background' autoPlay loop muted>
        <source autoPlay src={Video} type="video/mp4" />
      </video>
    </div>
  )
}

export default Background