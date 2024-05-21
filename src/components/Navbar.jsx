import React from 'react'
import { TiThMenu } from "react-icons/ti";
import { Link } from 'react-router-dom';


export const Navbar = () => {

  const dropMenu = () => {
    return (
      <div className='lists' style={{display:block}}></div>
    )
    
  }

  return (
    <section id='slogan' className='mb-5'>
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
                <Link to='/admin'><li className='adminlist'>Admin</li></Link>
         
                <button onClick={dropMenu} className='menuIcon'><TiThMenu /> Menu</button>

              </ul>

            </div>
          </div>
        </div>

      </section >
  )
}
