import React from 'react'
import { TiThMenu } from "react-icons/ti";
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
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
                <Link to='/admin'><li className='adminlist'>Admin</li></Link>
                <div className='menuIcon'><TiThMenu /> Menu</div>

              </ul>

            </div>
          </div>
        </div>

      </section >
  )
}
