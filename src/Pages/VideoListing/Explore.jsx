import './Explore.css'
import { Footer, Navbar, VideoCard } from '../../Component'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Explore = () => {
  const [res, setResponse] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const fetchVideos = async () => {
    try {
      const response = await axios.get('/api/videos')
      setResponse(response.data.videos)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => fetchVideos(), [])

  const searchHandler = (searchInput) => {
    setSearchInput(searchInput)
    if (searchInput !== '') {
      const newVideoList = res.filter((video) =>
        video.title.toLowerCase().includes(searchInput.toLowerCase()),
      )
      setSearchResult(newVideoList)
    } else {
      setSearchResult(res)
    }
  }

  return (
    <>
      <main className="exploreMain">
        <Navbar searchInput={searchInput} searchHandler={searchHandler} />
        <div className="exploreDiv page">
          {(searchInput.length < 1 ? res : searchResult).map(
            ({
              _id,
              title,
              videoLength,
              thumbnail,
              channelName,
              channelProfile,
            }) => (
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
            ),
          )}
        </div>
      </main>

      <Footer />
    </>
  )
}

export { Explore }
