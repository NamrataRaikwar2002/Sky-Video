import axios from 'axios'

const deleteVideoFromPlaylist = async (playlistId, videoId,token, playlistDispatch) => {
  try {
    const response = await axios.delete(
      `/api/user/playlists/${playlistId}/${videoId}`,
      { headers: { authorization: token } },
    )
    playlistDispatch({type:'REMOVE_VIDEO_FROM_PLAYLIST', payload:response.data.playlist})
  } catch (error) {
    console.error(error)
  }
}

export { deleteVideoFromPlaylist }
