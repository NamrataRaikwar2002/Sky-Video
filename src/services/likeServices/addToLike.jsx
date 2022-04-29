import axios from 'axios'
import { toast } from 'react-toastify'

const addToLike = async (video, token, likeDispatch) => {
  try {
    const response = await axios.post(
      '/api/user/likes',
      { video },
      { headers: { authorization: token } },
    )
    likeDispatch({ type: 'LIKED_VIDEO', payload: response.data.likes })
    toast.info(`${video.title.slice(0, 20).trim() + '...'} added to likes`)
  } catch (error) {
    console.error(error)
  }
}

export { addToLike }
