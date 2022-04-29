import React, { useState } from 'react'
import './Navbar.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Drawer } from '../Drawer/Drawer'
import { useAuth } from '../../hooks/context/AuthContext'
import { toast } from 'react-toastify'

const Navbar = ({ searchInput, searchHandler }) => {
  const { userDetail, setuserDetail } = useAuth()
  const { token, user } = userDetail
  const [sideBar, setsideBar] = useState(true)
  const location = useLocation()
  const navigate = useNavigate()

  const logoutHandler = () => {
    localStorage.removeItem('skyEncodedToken')
    localStorage.removeItem('skyUser')
    setuserDetail({ token: '', user: {} })
    navigate('/')
    toast.success('Logout Successfully')
  }

  const searchInputHandler = (e) => {
    searchHandler(e.target.value)
  }

  return (
    <div className="nav_div">
      <nav className="navigation">
        <div className="hamburgerNameDiv">
          {location.pathname !== '/login-page' &&
          location.pathname !== '/signup-page' ? (
            <i
              className="fa-solid fa-bars nav_icon cursorPointer"
              onClick={() => setsideBar(!sideBar)}
            ></i>
          ) : null}
          <Link to="/">
            <h2 className="textForPrimaryColor">SkyVideo</h2>
          </Link>
        </div>
        {location.pathname === '/' ? (
          <div className="search_icon">
            <input
              type="text"
              className="search_bar"
              placeholder="Search..."
              name="search"
              value={searchInput}
              onChange={searchInputHandler}
            />
            <i className="fa fa-search"></i>
          </div>
        ) : null}
        <aside className="nav_rightside">
          <Link to="/" className="navbar_link textForPrimaryColor productsText">
            Explore
          </Link>
          {token && user ? (
            <>
              <div className="profileName">
                <i className="fa-solid fa-user nav_icon"></i>
                <p className="userName">{user.firstName}</p>
              </div>
              <button className="btn card_btn" onClick={logoutHandler}>
                Logout
              </button>
            </>
          ) : (
            <Link to="/login-page">
              <button className="btn card_btn btnHover">Login</button>
            </Link>
          )}
        </aside>
      </nav>
      {location.pathname !== '/login-page' &&
      location.pathname !== '/signup-page' ? (
        <Drawer sideBar={sideBar} />
      ) : null}
    </div>
  )
}

export { Navbar }
