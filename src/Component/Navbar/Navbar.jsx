import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="nav_div">
      <nav className="navigation">
        <div className="hamburgerNameDiv">
          <i className="fa-solid fa-bars nav_icon"></i>
          <h2 className="textForPrimaryColor">
            SkyVideo
          </h2>
        </div>
        <div className="search_icon">
          <input
            type="text"
            className="search_bar"
            placeholder="Search..."
            name="search"
          />
          <i className="fa fa-search"></i>
        </div>
        <aside className="nav_rightside">
          <Link to="/" className="navbar_link textForPrimaryColor productsText">
            Explore
          </Link>
          <button className='btn card_btn'>

            login
          </button>
          {/* will use this icon later */}
            {/* <i className="fa-solid fa-user nav_icon"></i> */}
        </aside>
      </nav>
    </div>
  )
}

export { Navbar }
