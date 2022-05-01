import { Navbar } from '../../Component'
import { usePlaylist } from '../../hooks/context/PlaylistContext'
import './MyPlaylist.css'
import { PlaylistCard } from '../../Component'
import { usePlaylistModal } from '../../hooks/context/PlaylistModalContext'

export const MyPlaylist = () => {
  const { playlistState } = usePlaylist()
  const { playlists } = playlistState
  const { modalDispatch } = usePlaylistModal()

  const playlistHandler = (_id) => {
    modalDispatch({ type: 'MODAL_OPEN' })
  }

  return (
    <main className="mayPlaylistMain">
      <Navbar />
      <section className="page">
        <div className="createPlaylistDiv">
          <h1 className="centerText playlistHeader">
            My Playlists ({playlists.length})
          </h1>
          <button className="btn card_btn" onClick={() => playlistHandler()}>
            Create New Playlist
          </button>
        </div>
        <div className="playlistPage">
          {playlists.length > 0 ? (
            <div className="allPlaylist" key={playlists._id}>
              <PlaylistCard playlists={playlists} />
            </div>
          ) : (
            <h1 className="emptyHeading">Start Creating Your Playlists</h1>
          )}
        </div>
      </section>
    </main>
  )
}
