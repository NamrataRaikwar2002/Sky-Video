import './Explore.css'
import { Footer, Navbar, VideoCard } from '../../Component'
import axios from 'axios'
import { useEffect, useState } from 'react'
import './loader.css'

const Explore = () => {
  const [res, setResponse] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [searchResult, setSearchResult] = useState(res)
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
  useEffect(() => {
    searchHandler(searchInput)
  }, [res])

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
            ) : searchResult.length > 0 ? (
              searchResult.map(
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
            ) : (
              <h1 className="emptyHeading searchNotfoundMsg">
                Do not match any result!
              </h1>
            )}
          </div>
        </main>
        <Footer />
      </main>
    </>
  )
}

export { Explore }
