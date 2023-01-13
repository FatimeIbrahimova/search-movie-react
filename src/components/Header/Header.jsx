import React from 'react'
import img from "../../images/img.jpg"
import "./style.css"



const Header = () => {
  return (
    <div className='wrapper' style={{position:'relative'}}>
      <img style={{position:"relative"}} src={img} alt="img"/>
        <div className='header-desc'>
        <h1>Dada Book Searching App</h1>
        <div>
        <input type="text" placeholder='Find Book'/>
        <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        </div>
    </div>
  )
}

export default Header
