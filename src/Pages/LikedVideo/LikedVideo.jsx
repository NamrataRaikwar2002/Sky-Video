import { useEffect } from 'react'
import { LikedCard, Navbar } from '../../Component'
import { useLikeVideoContext } from '../../hooks/context/LikeVideoContext'
import { useAuth } from '../../hooks/context/AuthContext'
import { getLikedVideo } from '../../services/likeServices/getLikedVideo'
import './LikedVideo.css'

const LikedVideo = () => {
  const { likeState, likeDispatch } = useLikeVideoContext()
  const { likes } = likeState
  const { userDetail } = useAuth()
  const { token } = userDetail

  useEffect(() => getLikedVideo(token, likeDispatch), [])

  return (
    <main className="mainPage">
      <Navbar />
      <section className="page">
        <div className="pageHeading">
          <h1>Liked videos</h1>
        </div>
        <div className="likedDiv">
          {likes.length !== 0 ? (
            likes.map((item) => {
              return <LikedCard key={item._id} {...item} />
            })
          ) : (
            <h1 className="emptyHeading">Start liking videos</h1>
          )}
        </div>
      </section>
    </main>
  )
}

export { LikedVideo }
