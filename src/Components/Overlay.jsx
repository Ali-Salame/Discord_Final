import React from 'react'
import { useState } from 'react'

const Overlay = (props) => {

    let current_page = props.page
    let sandwish = props.sandwish
    const [activate, setActivate] = useState(false)
    
    if (sandwish){
      setTimeout(() => {
        setActivate(prev => !prev)
      }, 100)
    }
    
  return (
    <div className='Main_Overlay'>
        <ul className='Main_Overlay_ul'>
            <li className={activate ? 'Main_Overlay_ul_li' : 'Main_Overlay_ul_li0'} onClick={() => {props.next(1); props.sandwishfun(prev => !prev)}} href="#" style={current_page === 1 ? {color:'#b0fffe',textShadow: "0 0 1em #b0fffe"} : {color:'white'}}>HOME</li>
            <li className={activate ? 'Main_Overlay_ul_li' : 'Main_Overlay_ul_li0'} onClick={() => {props.next(2); props.sandwishfun(prev => !prev)}} href="#" style={current_page === 2 ? {color:'#b0fffe',textShadow: "0 0 1em #b0fffe"} : {color:'white'}}>ABOUT US</li>
            <li className={activate ? 'Main_Overlay_ul_li' : 'Main_Overlay_ul_li0'} onClick={() => {props.next(3); props.sandwishfun(prev => !prev)}} href="#" style={current_page === 3 ? {color:'#b0fffe',textShadow: "0 0 1em #b0fffe"} : {color:'white'}}>JOIN US</li>
            <li className={activate ? 'Main_Overlay_ul_li' : 'Main_Overlay_ul_li0'} onClick={() => {props.next(4); props.sandwishfun(prev => !prev)}} href="#" style={current_page === 4 ? {color:'#b0fffe',textShadow: "0 0 1em #b0fffe"} : {color:'white'}}>MEMBERS</li>
        </ul>
    </div>
  )
}

export default Overlay