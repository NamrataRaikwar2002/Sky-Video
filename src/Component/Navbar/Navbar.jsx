import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { Drawer } from '../Drawer/Drawer';
import { useAuth } from '../../hooks/context/AuthContext';

const Navbar = () => {
  const {userDetail, setuserDetail} = useAuth();
  const {token,user} = userDetail;
  const [sideBar, setsideBar] = useState(true)

  const logoutHandler = () => {
    localStorage.removeItem("skyEncodedToken")
    localStorage.removeItem("skyUser")
    setuserDetail({token:"", user:{}}) 
  }

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
          {
            token && user ? 
            <>
            <p className='profileName'>
            <i className="fa-solid fa-user nav_icon"></i>
           <p className="userName">
           {user.firstName}
           </p>
            </p>
            <button className='btn card_btn' onClick={logoutHandler}>Logout</button>
            </>
            :   
          <Link to='/login-page'>
          <button className='btn card_btn btnHover'>
            Login
          </button>
          </Link>
          }
        </aside>
      </nav>
      <Drawer sideBar={sideBar} /> 

    </div>
  )
}

export { Navbar }
