import React from 'react'
import { useEffect, useState } from 'react'

const Nav = (props) => {
  let current_page = props.page
  let Sandwish = props.sandwish
  let openSandwish = props.sandwishfun
  return (
    <nav className="Main_Nav">
        <ul>
            <li onClick={() => props.next(1)}><a href="#" style={current_page === 1 ? {color:'#b0fffe',textShadow: "0 0 1em #b0fffe"} : {color:'white'}}>HOME</a></li>
            <li onClick={() => props.next(2)}><a href="#" style={current_page === 2 ? {color:'#b0fffe',textShadow: "0 0 1em #b0fffe"} : {color:'white'}}>ABOUT US</a></li>
            <h3 className='Title'>Intellectual <span>Beings</span></h3>
            <li onClick={() => props.next(3)}><a href="#" style={current_page === 3 ? {color:'#b0fffe',textShadow: "0 0 1em #b0fffe"} : {color:'white'}}>JOIN US</a></li>
            <li onClick={() => props.next(4)}><a href="#" style={current_page === 4 ? {color:'#b0fffe',textShadow: "0 0 1em #b0fffe"} : {color:'white'}}>MEMBERS</a></li>
        </ul>
        <div className="Main_Nav_Sandwish" onClick={() => openSandwish(prevStat => !prevStat)}>
          <div className={Sandwish ? 'Main_Nav_Sandwish_Top2' : 'Main_Nav_Sandwish_Top'}></div>
          <div className={Sandwish ? 'Main_Nav_Sandwish_Mid2' : 'Main_Nav_Sandwish_Mid'}></div>
          <div className={Sandwish ? 'Main_Nav_Sandwish_Bot2' : 'Main_Nav_Sandwish_Bot'}></div>
        </div>
    </nav>
  )
}

export default Nav