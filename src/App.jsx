import { useEffect, useState } from 'react'
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Homepage } from './pages/Homepage';
import { Admin } from './pages/Admin';
import { ChefAbout } from './components/ChefAbout';
import { Edit } from './pages/Edit';
import { AddPage } from './pages/AddPage';
 




function App() {
  const [data, setdata] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8000/products')
      .then(res => setdata(res.data))
  }, [])



  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route element={<Homepage />} path='/'>

          </Route>
          <Route element={<Navbar />}></Route>
          {/* <Route element={<Navbar/>} path='/'></Route> */}
          <Route element={<ChefAbout />}></Route>
          <Route element={<Admin />} path='/admin'></Route>
          <Route element={<Edit/>} path='edit/:id'></Route>
          <Route element={<AddPage/>} path='AddPage'></Route>
       
        </Routes>
      </BrowserRouter>





    </>
  )
}

export default App
