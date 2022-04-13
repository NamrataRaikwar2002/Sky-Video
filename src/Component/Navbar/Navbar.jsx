import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { Drawer } from '../Drawer/Drawer';

const Navbar = () => {
  const [sideBar, setsideBar] = useState(true)

  return (
    <div className="nav_div">
      <nav className="navigation">
        <div className="hamburgerNameDiv">
          <i className="fa-solid fa-bars nav_icon cursorPointer" onClick={() => setsideBar(!sideBar)}></i>
          <Link to='/'>
          <h2 className="textForPrimaryColor">
            SkyVideo
          </h2>
          </Link>
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
          <Link to='/login-page'>
          <button className='btn card_btn btnHover'>
            Login
          </button>
          </Link>
          {/* will use this icon later */}
            {/* <i className="fa-solid fa-user nav_icon"></i> */}
        </aside>
      </nav>
      {sideBar ? <Drawer /> : null}

    </div>
  )
}

export { Navbar }
