import axios from 'axios'

const getSingleVideo = async (videoId, setVideo) => {
  try {
    const response = await axios.get(`/api/video/${videoId}`)
    setVideo(response.data.video)
  } catch (error) {
    console.error(error)
  }
}

export { getSingleVideo }
