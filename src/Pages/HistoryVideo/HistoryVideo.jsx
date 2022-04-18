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
      <div className="page">
        <div className="historyHeadingBtn">
          <h1>History</h1>
          {history.length > 0 ? (
            <button className="btn card_btn" onClick={clearHistoryHandler}>
              Clear All
            </button>
          ) : null}
        </div>
        {history
          ? history.map((item) => {
              return <HistoryCard key={item._id} {...item} />
            })
          : null}
      </div>
    </main>
  )
}

export { HistoryVideo }
