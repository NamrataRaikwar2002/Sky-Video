import axios from 'axios'

const deletePlaylist = async (playlistId, token, playlistDispatch) => {
  try {
    const response = await axios.delete(`/api/user/playlists/${playlistId}`, {
      headers: { authorization: token },
    })

    playlistDispatch({
      type: 'NEW_PLAYLIST_NAME',
      payload: response.data.playlists,
    })
  } catch (error) {
    console.error(error)
  }
}

export { deletePlaylist }
