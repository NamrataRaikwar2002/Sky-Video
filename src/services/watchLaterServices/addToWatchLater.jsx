import axios from 'axios'
import { toast } from 'react-toastify'

const addToWatchLater = async (video, token, watchLaterDispatch) => {
  try {
    const response = await axios.post(
      '/api/user/watchlater',
      { video },
      { headers: { authorization: token } },
    )
    watchLaterDispatch({
      type: 'WATCH_LATER_VIDEO',
      payload: response.data.watchlater,
    })
    toast.info(`${video.title.slice(0, 20).trim() + '...'} added to watchlater`)
  } catch (error) {
    toast.error(error.response.data.errors[0])

  }
}

export { addToWatchLater }
