import './Explore.css'
import { Footer, Navbar, VideoCard } from '../../Component'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Explore = () => {
  const [res, setResponse] = useState([])
  const fetchVideos = async () => {
    try {
      const response = await axios.get('/api/videos')
      setResponse(response.data.videos)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => fetchVideos(), [])

  return (
    <>
      <main className="exploreMain">
        <Navbar />
        <div className="exploreDiv page">
          {res.map(
            ({
              _id,
              title,
              videoLength,
              thumbnail,
              channelName,
              channelProfile,
            }) => {
              return (
                <VideoCard
                  key={_id}
                  _id={_id}
                  title={title}
                  videoLength={videoLength}
                  thumbnail={thumbnail}
                  channelName={channelName}
                  channelProfile={channelProfile}
                  videos={res}
                />
              )
            },
          )}
        </div>
      </main>

      <Footer />
    </>
  )
}

export { Explore }
