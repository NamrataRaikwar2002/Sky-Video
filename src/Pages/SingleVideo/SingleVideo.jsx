import ReactPlayer from 'react-player'
import { getSingleVideo } from '../../services/videoServices/getSingleVideo'
import { useEffect, useState } from 'react'
import './SingleVideo.css'
import { useParams } from 'react-router'
import { useAuth } from '../../hooks/context/AuthContext'
import { Navbar } from '../../Component'
import { addToLike } from '../../services/likeServices/addToLike'
import { useLikeVideoContext } from '../../hooks/context/LikeVideoContext'
import { deleteLiked } from '../../services/likeServices/deleteLiked'
import { addToWatchLater } from '../../services/watchLaterServices/addToWatchLater'
import { useWatchLater } from '../../hooks/context/WatchLaterContext'
import { deleteWatchLater } from '../../services/watchLaterServices/deleteWatchLater'
import { usePlaylistModal } from '../../hooks/context/PlaylistModalContext'
import { addToHistory } from '../../services/historyServices/addToHistory'
import { useHistory } from '../../hooks/context/HistoryContext'

const SingleVideo = () => {
  const [video, setVideo] = useState({})
  const { videoId } = useParams()
  const { modalDispatch } = usePlaylistModal()
  const { likeState, likeDispatch } = useLikeVideoContext()
  const { likes } = likeState
  const { watchLaterState, watchLaterDispatch } = useWatchLater()
  const { watchLater } = watchLaterState
  const { userDetail } = useAuth()
  const { token } = userDetail
  const { historyDispatch } = useHistory()

  useEffect(() => getSingleVideo(videoId, setVideo), [])

  const likeVideoHandler = () => {
    if (token) {
      addToLike(video, token, likeDispatch)
    } else {
      navigate('/login-page')
      toast.warning('Please login to use these features!')
    }
  }

  const deleteVideoHandler = () => {
    deleteLiked(video._id, token, likeDispatch)
  }

  const watchLaterHandler = () => {
    if (token) {
      addToWatchLater(video, token, watchLaterDispatch)
    } else {
      navigate('/login-page')
      toast.warning('Please login to use these features!')
    }
  }

  const deleteWatchLaterHandler = () => {
    deleteWatchLater(video._id, token, watchLaterDispatch)
  }

  const playlistHandler = () => {
    if (token) {
      modalDispatch({ type: 'MODAL_OPEN', payload: video })
    } else {
      navigate('/login-page')
      toast.warning('Please login to use these features!')
    }
  }

  const addToHistoryHandler = () => {
    addToHistory(video, token, historyDispatch)
  }

  return (
    <main className="singleVideoMain mainPage">
      <Navbar />
      <div className="videoPageInfo">
        <section className="singleVideoPlayer page">
          <ReactPlayer
            width="100%"
            height="100%"
            url={`https://www.youtube.com/embed/${video.youtubeId}`}
            controls={true}
            onStart={addToHistoryHandler}
          />
        </section>
        <div className="videoInfoDiv">
          <h3>{video.title}</h3>
          <div className="videoCardIcon iconView">
            <p>{video.views} views</p>
            <div className="singleVideoIcon">
              {likes.some((item) => item._id === video._id) ? (
                <i
                  className="fa-solid fa-thumbs-up cursorPointer "
                  onClick={deleteVideoHandler}
                ></i>
              ) : (
                <i
                  className="fa-regular fa-thumbs-up cursorPointer "
                  onClick={likeVideoHandler}
                ></i>
              )}
              {watchLater.some((item) => item._id === video._id) ? (
                <i
                  className="fa-solid fa-bookmark cursorPointer"
                  onClick={deleteWatchLaterHandler}
                ></i>
              ) : (
                <i
                  className="fa-regular fa-bookmark cursorPointer"
                  onClick={() => watchLaterHandler()}
                ></i>
              )}
              <i
                className="fa-solid fa-folder-plus cursorPointer"
                onClick={() => playlistHandler()}
              ></i>
            </div>
          </div>
          <div className="channelImgName mainPage">
            <img
              src={video.channelProfile}
              className="avatar_img small_img"
              alt="channel profile"
            />
            <div className="descriptionName">
              <p>{video.channelName}</p>
              <p>{video.description}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export { SingleVideo }
