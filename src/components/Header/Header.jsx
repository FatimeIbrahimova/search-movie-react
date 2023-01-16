import React, { useContext } from 'react'
import img from "../../images/img.jpg"
import "./style.css"



const Header = ({search,setSearch,handleSubmit}) => {
 
  return (
    <div className='wrapper' style={{position:'relative'}}>
      <img style={{position:"relative"}} src={img} alt="img"/>
        <div className='header-desc'>
        <h1>Dada Book Searching App</h1>
        <form onSubmit={handleSubmit}>
        <input value={search} type="text" onChange={(e)=>setSearch(e.target.value)} placeholder='Find Book'/>
        <i class="fa-solid fa-magnifying-glass"></i>
        </form>
        </div>
    </div>
  )
}

export default Header
