
import React, { useContext, useEffect, useState } from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Modal from '../../components/Modal/Modal'
import MyCard from '../../components/MyCard'

import "./style.css"


const Home = ({ data, setData, setOpen, detail, setDetail, open }) => {
  // const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const URL = `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyBcm1TtATdpWRAhRD_i6CgbDm2zfOEQPwc`

  const getData = async (e) => {
    e.preventDefault()
    // return await axios.get(URL)
    //   .then((resp) => setData(resp.items))
    const response = await fetch(URL).then((res) => res.json());
    setData(response.items)
  }
  console.log(data);
  // useEffect(() => {
  //   getData()
  // }, [])
  return (
    <div>
      <Header
        handleSubmit={getData}
        setSearch={setSearch}
        search={search}
      />
      <div className='container'>
        <div className='row'>
          {data.map((item, index) => {
            return <div className='col-3'><MyCard key={index}
              data={item}
              setOpen={setOpen}
              setDetail={setDetail}
            /></div>
          })}
        </div>
        {/* <Modal setOpen={setOpen} item={detail} open={open}/> */}
      </div>

      <div>
        <h1 className='empty-section'>Nothing <br></br>to <br></br> Show?!</h1>
      </div>
      <Footer />
    </div>
  )
}

export default Home
