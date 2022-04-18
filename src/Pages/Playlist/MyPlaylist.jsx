import { Navbar } from '../../Component'
import { usePlaylist } from '../../hooks/context/PlaylistContext'
import './MyPlaylist.css'
import { PlaylistCard } from '../../Component'

export const MyPlaylist = () => {
  const { playlistState  } = usePlaylist()
  const { playlists } = playlistState

  return (
    <main className="mayPlaylistMain">
      <Navbar />
      <div className="playlistPage  page">
        <h1 className="centerText">My Playlist ({playlists.length})</h1>
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
