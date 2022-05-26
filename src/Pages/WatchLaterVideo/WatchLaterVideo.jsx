import { Navbar, WatchLaterCard } from '../../Component'
import { useWatchLater } from '../../hooks/context/WatchLaterContext'

const WatchLaterVideo = () => {
  const { watchLaterState } = useWatchLater()
  const { watchLater } = watchLaterState
  return (
    <main className="mainPage">
      <Navbar />
      <div className="page">
        <h1 className="pageHeading">Watch Later</h1>
        <section className=" pageDiv">
          {watchLater.length !== 0 ? (
            watchLater.map((item) => {
              return <WatchLaterCard key={item._id} item={item} />
            })
          ) : (
            <h1 className="emptyHeading">No Videos</h1>
          )}
        </section>
      </div>
    </main>
  )
}
export { WatchLaterVideo }
