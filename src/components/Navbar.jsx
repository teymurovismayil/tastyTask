import React from 'react'
import { TiThMenu } from "react-icons/ti";
import { Link } from 'react-router-dom';


export const Navbar = () => {

  const dropMenu = () => {
    return (
      <div className='lists' style={{ display: block }}></div>
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
      <div className='container book'>
        <div className="row">
            <div className="col-12 col-sm-2">
              <input type="text" />
            </div>
            <div className="col-12 col-sm-2">
              <input type="text" />
            </div>
            <div className="col-12 col-sm-2">
              <input type="date" name="" id="" />
            </div>
            <div className="col-12 col-sm-2">
              <input type="time" name="" id="" />
            </div>
            <div className="col-12 col-sm-2">
              <select>
                <option>Person</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4+</option>
              </select>
            </div>
            <div className="col-2">
              <input type="submit" value="Book Table" />
            </div>
        </div>
      </div>
    </section >
  )
}
