import { Navbar } from '../../Component'
import { HistoryCard } from '../../Component/HistoryCard/HistoryCard'
import { useHistory } from '../../hooks/context/HistoryContext'
import { deleteAllHistory } from '../../services/historyServices/deleteAllHistory'
import { useAuth } from '../../hooks/context/AuthContext'

const HistoryVideo = () => {
  const {
    historyState: { history },
    historyDispatch,
  } = useHistory()
  const { userDetail } = useAuth()
  const { token } = userDetail

  const clearHistoryHandler = () => {
    deleteAllHistory(token, historyDispatch)
  }

  return (
    <main className="mainPage">
      <Navbar />
      <div className="page playlistSection">
        <div className="historyHeadingBtn">
          <h1 className="pageHeading">History</h1>
          {history.length > 0 ? (
            <div className='pageHeading'>
            <button className="btn card_btn clearAllBtn" onClick={clearHistoryHandler}>
              Clear All 
            <i
              className="fa-solid fa-trash"
            ></i>
            </button>
            </div>
          ) : null}
        </div>
        <section className='pageDiv'>
          {history.length!==0 ?
            history.map((item) => {
                return <HistoryCard key={item._id} {...item} />
              })
            : <h1 className="emptyHeading">No Videos</h1>}
        </section>
      </div>
    </main>
  )
}

export { HistoryVideo }
