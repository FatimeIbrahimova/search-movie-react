
import { useState } from 'react';
import './App.css';
import Home from './pages/Home/Home';

function App() {
const[search,setSearch]= useState("")
  let URL = `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyBcm1TtATdpWRAhRD_i6CgbDm2zfOEQPwc`
  return (
    <>
   <Home/>
    </>
  );
}

export default App;
