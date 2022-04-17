import { Navbar, WatchLaterCard } from '../../Component'
import { useWatchLater } from '../../hooks/context/WatchLaterContext'

const WatchLaterVideo = () => {
  const { watchLaterState } = useWatchLater()
  const { watchLater } = watchLaterState;
      return (
    <main className="mainPage">
      <Navbar />
      <div className="page">
        <h1>Watch Later Videos</h1>
        {watchLater ? (
          watchLater.map((item) => {
            return <WatchLaterCard key={item._id} item={item} />
    
          })
        ) : (
          <h1 className="emptyHeading">No videos</h1>
        )}
      </div>
    </main>
  )
}
export { WatchLaterVideo }
