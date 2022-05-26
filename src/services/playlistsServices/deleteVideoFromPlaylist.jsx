import axios from 'axios'
import { toast } from 'react-toastify'

const deleteVideoFromPlaylist = async (
  playlistId,
  videoId,
  token,
  playlistDispatch,
) => {
  try {
    const response = await axios.delete(
      `/api/user/playlists/${playlistId}/${videoId}`,
      { headers: { authorization: token } },
    )
    playlistDispatch({
      type: 'REMOVE_VIDEO_FROM_PLAYLIST',
      payload: response.data.playlist,
    })
    toast.info('Video removed from playlist')
  } catch (error) {
    console.error(error)
  }
}

export { deleteVideoFromPlaylist }
