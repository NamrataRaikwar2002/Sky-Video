import './PlaylistVideoCard.css'
import { usePlaylistModal } from '../../hooks/context/PlaylistModalContext'
import { deleteVideoFromPlaylist } from '../../services/playlistsServices/deleteVideoFromPlaylist'
import { useAuth } from '../../hooks/context/AuthContext'
import { usePlaylist } from '../../hooks/context/PlaylistContext'
import { getSinglePlaylist } from '../../services/playlistsServices/getSinglePlaylist'

const PlaylistVideoCard = ({
  _id,
  title,
  videoLength,
  thumbnail,
  channelName,
  channelProfile,
  playlistId,
  setplaylistVideo,
}) => {
  const { modalState, modalDispatch } = usePlaylistModal()
  const { userDetail } = useAuth()
  const { token } = userDetail
  const { playlistDispatch } = usePlaylist()

  const deleteVideoHandler = () => {
    deleteVideoFromPlaylist(playlistId, _id, token, playlistDispatch)
    getSinglePlaylist(token, setplaylistVideo, playlistId)
  }
  return (
    <section className="videoCardSection">
      <div className="videoCardDiv" key={_id}>
        <img src={thumbnail} alt="thumbnail" className="videoCardThumbnail" />
        <div className="videoCardIconTime">
          <p>
            <small className="videoTime">{videoLength}</small>
          </p>
          <div className="videoCardIcon">
            <i
              className="fa-solid fa-trash nav_icon trashIconOnvideo"
              onClick={deleteVideoHandler}
            ></i>
          </div>
        </div>
        <footer className="videoCardFooter">
          <img
            src={channelProfile}
            className="avatar_img small_img"
            alt="channel profile"
          />
          <div>
            <p>{title}</p>
            <small className="greyColorText">{channelName}</small>
          </div>
        </footer>
      </div>
    </section>
  )
}

export { PlaylistVideoCard }
