import React from 'react'
import logo from "../../assets/logo-movie.jpg"
import './Navbar.css'

function Navbar() {
  return (
    <div className='Navbar'>
        <nav className="navbar bg-body-tertiary ">
          <div className="container-fluid">
            <img src={logo} alt="" className='logo' />
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
                <button type="button" className="btn btn-outline-light">Light</button>
          </div>
        </nav>
    </div>
  )
}

export default Navbar