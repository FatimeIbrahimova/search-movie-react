import React from 'react'

const MyCard = ({data}) => {
  return (
    <>
      <div className='cards'>
          <div className='card-img'>
         <h1>gfg</h1>
          </div>
          <div className='card-title'>{data.items.volumeInfo.title}</div>
      </div>
    </>
  )
}

export default MyCard
