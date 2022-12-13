import React from 'react'
import { useState } from 'react'
import img from '../Images/Discord.png'
import { nanoid } from 'nanoid'
const Cards = (props) => {
  let name = props.username[0].toUpperCase() + props.username.substring(1)
  let data = []
  let order = props.order2

  let roles = props.roles.map(item => {
    let id = nanoid()
    if (item === '996780222890377276'){
      return <h5 style={{color:'Gold'}} key={id}>Owner</h5>
    }
    else if (item === '800972547897294858'){
      return <h5 style={{color:'Red'}} key={id}>Gang</h5>
    }
    else if (item === '730982083115089966'){
      return <h5 style={{color:'#b60953'}} key={id}>Bot</h5>
    }
    else if (item === '725850602562912256') {
      return <h5 style={{color:'Green'}} key={id}>Intelligent human</h5>
    }
    
  })
 
  return (
    <div className='Main_Members_table_mem' style={{"order":order}}>
      <a href={`https://discord.com/users/discordapp.com/users/${props.id}`} target='_blank'>
        <div className='Main_Members_table_mem_mem2'>
          <img src={props.Profile_p ? props.Profile_p : img} alt="" />
          <h3>{props.nickname} <span>{name} #{props.hashtag}</span></h3>
          <div>{props.hashtag == '9842' && <h5 style={{color:'Purple'}}>Creator of Website</h5>}{roles}</div>
        </div>
      </a>
    </div>
  )
}

export default Cards
