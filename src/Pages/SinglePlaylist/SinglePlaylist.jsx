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
        <main className="page">
          <div>
            {playlistVideo ? <h1>{playlistVideo.title}</h1> : null}
            {playlistVideo ? (
              <p className="emptyHeading">
                {`${playlistVideo.videos.length} ${
                  playlistVideo.videos.length === 0 ? 'video' : 'videos'
                }`}
              </p>
            ) : null}
            <div className='playlistPageDiv' key={playlistId}>
            {playlistVideo ? (
              playlistVideo.videos.map((item) => {
                return (
                  <>
                    <div key={item._id}>
                      <PlaylistVideoCard
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
          </div>
        </main>
      </main>
    </>
  )
}

export { SinglePlaylist }
