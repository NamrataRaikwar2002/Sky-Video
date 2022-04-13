import './Drawer.css'
import { Link } from 'react-router-dom'
export const Drawer = ({sideBar}) => {
  return (
     <div className={`drawerDiv page ${sideBar ? "displayBlock" : 'displayNone' }`}>
        <ul className="drawerUl">
            <Link to='/'>
          <li className="drawerList cursorPointer">
            <i className="fa-solid fa-compass"></i>
            <p>Explore</p>
          </li>
            </Link>
          <li className="drawerList cursorPointer">
            <i className="fa-solid fa-thumbs-up"></i>
            <p>Liked</p>
          </li>
          <li className="drawerList cursorPointer">
            <i className="fa-solid fa-folder-plus"></i>
            <p>Playlists</p>
          </li>
          <li className="drawerList cursorPointer">
            <i className="fa-solid fa-bookmark"></i>
            <p>Watch Later</p>
          </li>
          <li className="drawerList cursorPointer">
            <i className="fa-solid fa-clock"></i>
            <p>History</p>
          </li>
          <li className="drawerList cursorPointer">
            <i className="fa-solid fa-right-to-bracket"></i>
            <p>Profile</p>
          </li>
        </ul>
      </div>
  )
}
