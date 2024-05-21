import { useEffect, useState } from 'react'
import './App.scss'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { TiThMenu } from "react-icons/ti";
import axios from 'axios';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { Add } from './pages/Add';
import { Menu } from './components/Menu';


function App() {
  const [data, setdata] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8000/products')
      .then(res => setdata(res.data))
  }, [])

 

  return (
    <>

      <section id='slogan'>
        <div className="container navbarMenu">
          <div className="row">
            <div className="col-3">
              <div className='logo'>Tasty</div>
            </div>

            <div className="col-9  lists">
              <ul>
                <li style={{ color: 'rgb(255, 255, 255,0.7)' }}>Home</li>
                <li>Menu</li>
                <li>Specialities</li>
                <li>Reservation</li>
                <li>Blog</li>
                <li>About</li>
                <li>Contact</li>
                <div className='menuIcon'><TiThMenu /> Menu</div>

              </ul>

            </div>
          </div>
        </div>

      </section >

      <section id="chefSlogan" className='mb-5'>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 chefImage">
              <img src="https://preview.colorlib.com/theme/tasty/images/about-2.jpg.webp" alt="" />
            </div>
            <div className="col-lg-6 col-md-12 chefAbout">
              <div className='chefAbout-box'>
                <span>ABOUT TASTY</span>
                <h3>Our chef cooks the most delicious food for you</h3>
                <p>
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                  <br /> <br />
                  A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BrowserRouter>
            <Routes> 
                <Route element={<Add/>} path='/add' />
                <Route element={<Menu/>} path='/' />
            </Routes>
      </BrowserRouter>
      

          

     
         

     
      {/* <Link to="/add"><button>Add</button></Link> */}
    </>
  )
}

export default App
