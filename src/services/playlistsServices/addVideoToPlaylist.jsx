import axios from 'axios'
import { toast } from 'react-toastify'

const addVideoToPlaylist = async (
  playlistId,
  video,
  token,
  playlistDispatch,
) => {
  try {
    const response = await axios.post(
      `/api/user/playlists/${playlistId}`,
      { video },
      { headers: { authorization: token } },
    )
    playlistDispatch({
      type: 'UPDATE_PLAYLIST',
      payload: {
        playlistId: response.data.playlist._id,
        playlistData: response.data.playlist,
      },
    })
    toast.info(
      `${video.title.slice(0, 20).trim() + '...'} Video added to playlist`,
    )
  } catch (error) {
    console.error(error)
  }
}

export { addVideoToPlaylist }
