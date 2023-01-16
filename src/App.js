
import { useState } from 'react';
import './App.css';
import Modal from './components/Modal/Modal';
// import Modal from './components/Modal/Modal';
import Home from './pages/Home/Home';

function App() {
  const [data, setData] = useState([]);
  const [detail, setDetail] = useState(null);
  const [open, setOpen] = useState(false);

  // const[search,setSearch]= useState("")
  //   let URL = `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyBcm1TtATdpWRAhRD_i6CgbDm2zfOEQPwc`
  return (
    <>
      <Home data={data} setData={setData} setDetail={setDetail} setOpen={setOpen} />
    </>
  );
}

export default App;
