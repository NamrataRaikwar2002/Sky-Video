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
      <div className="playlistPage page">
        <div className="createPlaylistDiv">
          <h1 className="centerText">My Playlist ({playlists.length})</h1>
          <button className="btn card_btn" onClick={() => playlistHandler()}>
            Create New Playlist
          </button>
        </div>
        {playlists.length > 0 ? (
          <div className="allPlaylist">
            <PlaylistCard playlists={playlists} />
          </div>
        ) : (
          <h1 className="emptyHeading">Start Creating Your Playlists</h1>
        )}
      </div>
    </main>
  )
}
