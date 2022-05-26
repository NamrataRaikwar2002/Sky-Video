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
  } catch (error) {
    toast.error(error.response.data.errors[0])
  }
}

export { addToLike }
