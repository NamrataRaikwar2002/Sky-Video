import { usePlaylist } from '../../hooks/context/PlaylistContext'
import { getPlaylist } from '../../services/playlistsServices/getPlaylist'
import { useEffect } from 'react'
import { useAuth } from '../../hooks/context/AuthContext'
import './PlaylistCard.css'
import { deletePlaylist } from '../../services/playlistsServices/deletePlaylist'
import { NavLink } from 'react-router-dom'

const PlaylistCard = ({ playlists }) => {
  const { userDetail } = useAuth()
  const { token } = userDetail
  const { playlistDispatch } = usePlaylist()

  useEffect(() => getPlaylist(token, playlistDispatch), [])

  const deletePlaylistHandler = (playlistId) => {
    deletePlaylist(playlistId, token, playlistDispatch)
  }
 
const singlePlaylistHandler = (videos) => {
    playlistDispatch({type:"VIDEO_TO_SINGLE_PLAYLIST_PAGE", payload:videos})
    }

  return (
    <>
      {playlists.map((item) => {
        return (
          
            <section className="mayPlaylistDiv cursorPointer" key={item.videos}>
              <NavLink to={`/MyPlaylist-page/${item._id}`} onClick={() => singlePlaylistHandler(item.id)}>
                <div className="playlistVideoDiv">
                  <h2>{item.title}</h2>
                  <p>{item.videos.length} video</p>
                </div>
              </NavLink>
              <p>
                <i
                  className="fa-solid fa-trash nav_icon trashIcon"
                  onClick={() => deletePlaylistHandler(item._id)}
                ></i>
              </p>
            </section>
          
        )
      })}
    </>
  )
}

export { PlaylistCard }
