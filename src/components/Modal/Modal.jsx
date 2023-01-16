import React from 'react'


const Modal = ({open,data,setOpen}) => {
   
  return (
    <div className={open ? "active" :""}>
        <button onClick={()=>setOpen(false)}>X</button>
        <div className='img'>
            <img src={data?.volumeInfo?.imageLinks?.thumbnail} alt="img" />
        </div>
        <div>
            <h3>{data?.volumeInfo?.title}</h3>
            <p>{data?.volumeInfo?.description}</p>
        </div>
    </div>
  )
}

export default Modal