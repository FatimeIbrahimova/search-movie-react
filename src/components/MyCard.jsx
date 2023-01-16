import React, { useContext } from 'react'

import "./MyCard.css"

const MyCard = ({data,setOpen,setDetail}) => {
  
  const handleClick=()=>{
    setDetail(data)
    setOpen(true)
    console.log("ddg");
  }
  return (
    <>
      <div className='cards'>
        <div className='card-img'>
          <img src={data?.volumeInfo?.imageLinks.thumbnail} alt="img" />
        </div>
        <div className='card-title'>
          <h4>{data?.volumeInfo?.title}</h4>
        </div>
        <div>
          {data?.volumeInfo?.authors}
        </div>
        <a style={{cursor:"pointer"}} onClick={handleClick}>Detail</a>
      </div>
    </>
  )
}

export default MyCard
