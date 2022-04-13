import './VideoCard.css'
const VideoCard = ({_id, title, videoLength, thumbnail, channelName, channelProfile}) => {

  return (
    <>
      <section className="videoCardSection">
        <div className="videoCardDiv" key={_id}>
          <img
            src={thumbnail}
            alt="thumbnail"
            className="videoCardThumbnail"
          />
          <div className="videoCardIconTime">
            <p>
              <small className="videoTime">{videoLength}</small>
            </p>
            <div className="videoCardIcon">
              <i className="fa-regular fa-thumbs-up  videoEachIcon"></i>
              <i className="fa-regular fa-bookmark videoEachIcon"></i>
              <i className="fa-solid fa-folder-plus videoEachIcon"></i>
            </div>
          </div>
          <footer className="videoCardFooter">
            <img
              src={channelProfile}
              className="avatar_img small_img"
              alt="channel profile"
            />
            <div>
              <p>
                {title}
              </p>
              <small className="greyColorText">{channelName}</small>
            </div>
          </footer>
        </div>
      </section>
    </>
  )
}

export {VideoCard}

