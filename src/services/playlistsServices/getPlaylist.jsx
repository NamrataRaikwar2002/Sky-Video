import axios from 'axios'

const getPlaylist = async (token, playlistDispatch) => {
  try {
    const response = await axios.get('/api/user/playlists', {
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
export { getPlaylist }
