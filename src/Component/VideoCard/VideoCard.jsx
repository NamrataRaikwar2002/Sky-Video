import './VideoCard.css'
export const VideoCard = () => {
  return (
    <>
      <section className="videoCardSection">
        <div className="videoCardDiv">
          <img
            src="https://i.ytimg.com/vi/Le5hGH5DjYM/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAFwux2QAN1DnIhkc5I92-pAPFd8w"
            alt="radom"
            className="videoCardThumbnail"
          />
          <div className="videoCardIconTime">
            <p>
              <small className="videoTime">11:23</small>
            </p>
            <div className="videoCardIcon">
              <i class="fa-regular fa-thumbs-up  videoEachIcon"></i>
              <i class="fa-regular fa-bookmark videoEachIcon"></i>
              <i class="fa-solid fa-folder-plus videoEachIcon"></i>
            </div>
          </div>
          <footer className="videoCardFooter">
            <img
              src="https://yt3.ggpht.com/ytc/AKedOLSfGsBIG3DNmhI9przMr4-7S_9bwlNgt3_BvRXc=s68-c-k-c0x00ffffff-no-rj"
              className="avatar_img small_img"
              alt=""
            />
            <div>
              <p>
                Perfume Collection | Scent Memories and Favourite Fragrances
              </p>
              <small className="greyColorText">Matilda on Video</small>
            </div>
          </footer>
        </div>
      </section>
    </>
  )
}
