import './Drawer.css'
import { NavLink } from 'react-router-dom'
export const Drawer = ({ sideBar }) => {
  return (
    <div
      className={`drawerDiv page ${sideBar ? 'displayBlock' : 'displayNone'}`}
    >
      <ul className="drawerUl">
        <NavLink to="/">
          <li className="drawerList cursorPointer">
            <i className="fa-solid fa-compass"></i>
            <p className="sideMenu">Explore</p>
          </li>
        </NavLink>
        <NavLink to="/liked-videos-page">
          <li className="drawerList cursorPointer">
            <i className="fa-solid fa-thumbs-up"></i>
            <p className="sideMenu">Liked</p>
          </li>
        </NavLink>
        <NavLink to="/MyPlaylist-page">
          <li className="drawerList cursorPointer">
            <i className="fa-solid fa-folder-plus"></i>
            <p className="sideMenu">Playlists</p>
          </li>
        </NavLink>
        <NavLink to="/watchlater-page">
          <li className="drawerList cursorPointer">
            <i className="fa-solid fa-bookmark"></i>
            <p className="sideMenu">Watch Later</p>
          </li>
        </NavLink>
        <NavLink to="/history-page">
          <li className="drawerList cursorPointer">
            <i className="fa-solid fa-clock"></i>
            <p className="sideMenu">History</p>
          </li>
        </NavLink>
        <li className="drawerList cursorPointer">
          <i className="fa-solid fa-right-to-bracket"></i>
          <p className="sideMenu">Profile</p>
        </li>
      </ul>
    </div>
  )
}
