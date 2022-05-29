import { deleteWatchLater } from "../../services/watchLaterServices/deleteWatchLater"
import { useAuth } from "../../hooks/context/AuthContext"
import { useWatchLater } from "../../hooks/context/WatchLaterContext";
import {useNavigate} from 'react-router-dom';

const WatchLaterCard = ({
  item: { _id, title, videoLength, thumbnail, channelName, channelProfile },
}) => {
    const {userDetail} = useAuth();
    const {token} = userDetail;
    const {watchLaterDispatch} = useWatchLater(); 
    const navigate = useNavigate();

    const deleteWatchLaterHandler = () =>{
        deleteWatchLater(_id, token, watchLaterDispatch)
    }
  return (
    <section className="videoCardSection" >
      <div className="videoCardDiv" key={_id}>
        <img src={thumbnail} alt="thumbnail" className="videoCardThumbnail" onClick={() => navigate(`/explore/${_id}`)}/>
        <div className="videoCardIconTime">
          <p>
            <small className="videoTime">{videoLength}</small>
          </p>
          <div className="videoCardIcon">
            <i className="fa-solid fa-bookmark nav_icon trashIconOnvideo" onClick={deleteWatchLaterHandler}></i>
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
export { WatchLaterCard }
