import React from 'react'
import discord from '../Images/Discord.png'

const Join = () => {
  return (
    <div className='Main_Join animate__animated animate__fadeIn animate__slow'>
      <img className='animate__animated animate__pulse animate__infinite animate__slow' src={discord} alt="" />
      <div className='Main_Join_text'>
        <h3><a target="_Blank" href="https://discord.gg/EtfXAqP85z" rel='external'>JOIN US</a></h3>
      </div>
    </div>
  )
}

export default Join