import axios from 'axios'
import { toast } from 'react-toastify'

const deletePlaylist = async (playlistId, token, playlistDispatch) => {
  try {
    const response = await axios.delete(`/api/user/playlists/${playlistId}`, {
      headers: { authorization: token },
    })

    playlistDispatch({
      type: 'NEW_PLAYLIST_NAME',
      payload: response.data.playlists,
    })
    toast.info('Playlist Deleted')
  } catch (error) {
    console.error(error)
  }
}

export { deletePlaylist }
