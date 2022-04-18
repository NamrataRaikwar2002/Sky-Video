import { useEffect, useState } from 'react'
import { Navbar, PlaylistCard, VideoCard } from '../../Component'
import { useAuth } from '../../hooks/context/AuthContext'
import { getSinglePlaylist } from '../../services/playlistsServices/getSinglePlaylist'
import { PlaylistVideoCard } from '../../Component'
import './SinglePlaylist.css'
import { useParams } from 'react-router'

const SinglePlaylist = () => {
  const { userDetail } = useAuth()
  const { playlistId } = useParams()
  const [playlistVideo, setplaylistVideo] = useState(null)
  const { token } = userDetail

  useEffect(() => getSinglePlaylist(token, setplaylistVideo, playlistId), [])

  return (
    <>
      <main className="singlePlaylistMain">
        <Navbar />
        <main className="page">
          {playlistVideo ? (
            playlistVideo.videos.map((item) => {
              return (
                <div key={item._id}>
                  <PlaylistVideoCard
                    key={item._id}
                    playlistId={playlistId}
                    {...item}
                    setplaylistVideo={setplaylistVideo}
                  />
                </div>
              )
            })
          ) : (
            <h1 className="emptyHeading">Playlist is Empty</h1>
          )}
        </main>
      </main>
    </>
  )
}

export { SinglePlaylist }
