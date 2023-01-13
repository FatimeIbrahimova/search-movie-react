import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import MyCard from '../../components/MyCard'


const Home = () => {
  const [data, setData] = useState([]);
  // const[search,setSearch]= useState("")
  const getData = async () => {
    return await axios.get('https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyBcm1TtATdpWRAhRD_i6CgbDm2zfOEQPwc')
      .then((resp) => setData(resp.data))
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div>
      <Header />
     <div className='container'>
       <div className='row'>
       {data.map((item, index) => {
        return <div className='col-3'><MyCard key={index} data={item}/></div>
      })}
       </div>
     </div>
      {/* <MyCard /> */}
      <h1>fg</h1>
      <Footer />
    </div>
  )
}

export default Home
