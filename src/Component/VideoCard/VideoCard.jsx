import './VideoCard.css'
import { useAuth } from '../../hooks/context/AuthContext'
import { useNavigate } from 'react-router'
import { usePlaylistModal } from '../../hooks/context/PlaylistModalContext'
import { addToLike } from '../../services/likeServices/addToLike'
import { useLikeVideoContext } from '../../hooks/context/LikeVideoContext'
import { deleteLiked } from '../../services/likeServices/deleteLiked'
import { addToWatchLater } from '../../services/watchLaterServices/addToWatchLater'
import { useWatchLater } from '../../hooks/context/WatchLaterContext'
import { deleteWatchLater } from '../../services/watchLaterServices/deleteWatchLater'

const VideoCard = ({
  _id,
  title,
  videoLength,
  thumbnail,
  channelName,
  channelProfile,
  videos,
}) => {
  const { modalState, modalDispatch } = usePlaylistModal()
  const { userDetail } = useAuth()
  const { token } = userDetail
  const { likeState, likeDispatch } = useLikeVideoContext()
  const { likes } = likeState
  const { watchLaterState, watchLaterDispatch } = useWatchLater()
  const { watchLater } = watchLaterState
  const navigate = useNavigate()

  const selectedVideo = videos.find((item) => item._id === _id)
  const video = videos.find((item) => item._id === _id)


  const playlistHandler = (_id) => {
    if (token) {
      const video = videos.find((item) => item._id === _id)
      modalDispatch({ type: 'MODAL_OPEN', payload: video })
    } else {
      navigate('/login-page')
      alert('login first')
    }
  }

  const likeVideoHandler = () => {
    if (token) {
      addToLike(selectedVideo, token, likeDispatch)
    } else {
      navigate('/login-page')
      alert('login first')
    }
  }

  const deleteVideoHandler = () => {
    deleteLiked(_id, token, likeDispatch)
  }

  const watchLaterHandler = (_id) => {
    if (token) {
      const video = videos.find((item) => item._id === _id)
      addToWatchLater(video, token, watchLaterDispatch)
    } else {
      navigate('/login-page')
      alert('login first')
    }
  }
  
  const deleteWatchLaterHandler = () => {
    deleteWatchLater(_id, token, watchLaterDispatch)
  }
  return (
    <>
      <section className="videoCardSection">
        <div className="videoCardDiv" key={_id}>
          <img src={thumbnail} alt="thumbnail" className="videoCardThumbnail" />
          <div className="videoCardIconTime">
            <p>
              <small className="videoTime">{videoLength}</small>
            </p>
            <div className="videoCardIcon">
              {likes.some((item) => item._id === _id) ? (
                <i
                  className="fa-solid fa-thumbs-up  videoEachIcon"
                  onClick={deleteVideoHandler}
                ></i>
              ) : (
                <i
                  className="fa-regular fa-thumbs-up  videoEachIcon"
                  onClick={likeVideoHandler}
                ></i>
              )}
              { watchLater.some((item) => item._id === _id) ? 
                 (
                <i className="fa-solid fa-bookmark videoEachIcon" onClick={deleteWatchLaterHandler}></i>
              ):(
                <i
                  className="fa-regular fa-bookmark videoEachIcon"
                  onClick={() => watchLaterHandler(_id)}
                ></i>
              ) }
              <i
                className="fa-solid fa-folder-plus videoEachIcon"
                onClick={() => playlistHandler(_id)}
              ></i>
            </div>
          </div>
          <footer className="videoCardFooter">
            <img
              src={channelProfile}
              className="avatar_img small_img"
              alt="channe l profile"
            />
            <div>
              <p>{title}</p>
              <small className="greyColorText">{channelName}</small>
            </div>
          </footer>
        </div>
      </section>
    </>
  )
}

export { VideoCard }
