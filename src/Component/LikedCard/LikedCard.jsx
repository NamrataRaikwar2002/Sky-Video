import { useAuth } from "../../hooks/context/AuthContext"
import { useLikeVideoContext } from "../../hooks/context/LikeVideoContext";
import { deleteLiked } from "../../services/likeServices/deleteLiked";

const LikedCard = ({
    _id,
    title,
    videoLength,
    thumbnail,
    channelName,
    channelProfile,
}) => {
    const {userDetail} = useAuth();
    const {token} = userDetail;
    const {likeDispatch} = useLikeVideoContext();

    const unlikeHandler = () => {
        deleteLiked(_id, token,likeDispatch)
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
          <i className="fa-solid fa-thumbs-up nav_icon trashIconOnvideo" onClick={unlikeHandler}></i>
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

export { LikedCard }
