import './Drawer.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/context/AuthContext'
import { toast } from 'react-toastify'

export const Drawer = ({ sideBar }) => {
  const { userDetail, setuserDetail } = useAuth()
  const { token, user } = userDetail
  const navigate = useNavigate()

  const logoutHandler = () => {
    localStorage.removeItem('skyEncodedToken')
    localStorage.removeItem('skyUser')
    setuserDetail({ token: '', user: {} })
    navigate('/')
    toast.success('Logout Successfully')
  }

  return (
    <div
      className={`drawerDiv page ${sideBar ? 'displayBlock' : 'displayNone'}`}
    >
      <ul className="drawerUl">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          <li className="drawerList cursorPointer">
            <i className="fa-solid fa-compass"></i>
            <p className="sideMenu">Explore</p>
          </li>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          to="/liked-videos-page"
        >
          <li className="drawerList cursorPointer">
            <i className="fa-solid fa-thumbs-up"></i>
            <p className="sideMenu">Liked</p>
          </li>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          to="/MyPlaylist-page"
        >
          <li className="drawerList cursorPointer">
            <i className="fa-solid fa-folder-plus"></i>
            <p className="sideMenu">Playlists</p>
          </li>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          to="/watchlater-page"
        >
          <li className="drawerList cursorPointer">
            <i className="fa-solid fa-bookmark"></i>
            <p className="sideMenu">Watch Later</p>
          </li>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          to="/history-page"
        >
          <li className="drawerList cursorPointer">
            <i className="fa-solid fa-clock"></i>
            <p className="sideMenu">History</p>
          </li>
        </NavLink>
        {token && user ? (
          <li
            className="drawerList cursorPointer profileActive "
            onClick={logoutHandler}
          >
            <i className="fa-solid fa-right-to-bracket"></i>
            <p className="sideMenu">{user.firstName}</p>
          </li>
        ) : null}
      </ul>
    </div>
  )
}
