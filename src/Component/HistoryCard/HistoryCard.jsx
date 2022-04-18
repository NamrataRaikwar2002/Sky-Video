import { deleteHistory } from '../../services/historyServices/deleteHistory'
import { useAuth } from '../../hooks/context/AuthContext'
import { useHistory } from '../../hooks/context/HistoryContext'

const HistoryCard = ({
  _id,
  title,
  videoLength,
  thumbnail,
  channelName,
  channelProfile,
}) => {
  const { userDetail } = useAuth()
  const { token } = userDetail
  const { historyState, historyDispatch } = useHistory()

  const deleteHistoryHandler = () => {
    deleteHistory(_id, token, historyDispatch)
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
              onClick={deleteHistoryHandler}
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

export { HistoryCard }
