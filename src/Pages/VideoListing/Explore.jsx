import './Explore.css'
import { Footer, Navbar, VideoCard } from '../../Component'
import axios from 'axios'
import { useEffect, useState } from 'react'
import './loader.css'

const Explore = () => {
  const [res, setResponse] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const [loader, setLoader] = useState(false)
  const fetchVideos = async () => {
    try {
      setLoader(true)
      const response = await axios.get('/api/videos')
      setResponse(response.data.videos)
      setLoader(false)
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
      <main>
        <main className="exploreMain">
          <Navbar searchInput={searchInput} searchHandler={searchHandler} />
          <div className="exploreDiv page">
            {loader ? (
              <div className="loader"></div>
            ) : (
              (searchInput.length < 1
                ? res
                : searchResult
              ).map(
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
              )
            )}
          </div>
        </main>
        <Footer />
      </main>
    </>
  )
}

export { Explore }
