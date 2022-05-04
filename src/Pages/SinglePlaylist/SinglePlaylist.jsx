import { useEffect, useState } from 'react'
import { Navbar, PlaylistVideoCard } from '../../Component'
import { useAuth } from '../../hooks/context/AuthContext'
import { getSinglePlaylist } from '../../services/playlistsServices/getSinglePlaylist'
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
      <main className="singlePlaylistMain" key={playlistId}>
        <Navbar />
        <main className="page" key={playlistId}>
          <div>
            {playlistVideo ? <h1>{playlistVideo.title}</h1> : null}
            {playlistVideo ? (
              <p className="emptyHeading">
                {playlistVideo.videos.length} videos
              </p>
            ) : null}
            {playlistVideo ? (
              playlistVideo.videos.map((item) => {
                return (
                  <>
                    <div key={item._id}>
                      <PlaylistVideoCard
                        key={item._id}
                        playlistId={playlistId}
                        {...item}
                        setplaylistVideo={setplaylistVideo}
                      />
                    </div>
                  </>
                )
              })
            ) : (
              <h1 className="emptyHeading">Playlist is Empty</h1>
            )}
          </div>
        </main>
      </main>
    </>
  )
}

export { SinglePlaylist }
