import './Drawer.css'
export const Drawer = () => {
  return (
    <>
      <div className="drawerDiv page">
        <ul className="drawerUl">
          <li className="drawerList cursorPointer">
            <i class="fa-solid fa-compass"></i>
            <p>Explore</p>
          </li>
          <li className="drawerList cursorPointer">
            <i class="fa-solid fa-thumbs-up"></i>
            <p>Liked</p>
          </li>
          <li className="drawerList cursorPointer">
            <i class="fa-solid fa-folder-plus"></i>
            <p>Playlists</p>
          </li>
          <li className="drawerList cursorPointer">
            <i class="fa-solid fa-bookmark"></i>
            <p>Watch Later</p>
          </li>
          <li className="drawerList cursorPointer">
            <i class="fa-solid fa-clock"></i>
            <p>History</p>
          </li>
          <li className="drawerList cursorPointer">
            <i class="fa-solid fa-right-to-bracket"></i>
            <p>Profile</p>
          </li>
        </ul>
      </div>
    </>
  )
}
