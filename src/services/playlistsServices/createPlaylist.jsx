import axios from 'axios'
import { toast } from 'react-toastify'

const createPlaylist = async (playlist, playlistDispatch, token) => {
  const response = await axios.post(
    '/api/user/playlists',
    { playlist },
    { headers: { authorization: token } },
  )
  try {
    if (response.status === 201) {
      playlistDispatch({
        type: 'NEW_PLAYLIST_NAME',
        payload: response.data.playlists,
      })
      toast.info('Playlist Created')
    }
  } catch (error) {
    toast.error(error.response.data.errors[0])

  }
}

export { createPlaylist }
