const updatePlaylistHandler = (playlistId, playlists, playlistData) => {
  return playlists.reduce(
    (updatedPlaylist, item) =>
      playlistId === item._id
        ? [...updatedPlaylist, playlistData]
        : [...updatedPlaylist, item],
    [],
  )
}

export const PlaylistReducer = (playlistState, playlistAction) => {
  switch (playlistAction.type) {
    case 'NEW_PLAYLIST_NAME':
      return { ...playlistState, playlists: playlistAction.payload }
    case 'UPDATE_PLAYLIST':
      return {
        ...playlistState,
        playlists: updatePlaylistHandler(
          playlistAction.payload.playlistId,
          playlistState.playlists,
          playlistAction.payload.playlistData,
        ),
      }
    case 'DELETE_PLAYLIST':
      return {
        ...playlistAction,
        playlists: playlistAction.payload.deletedPlaylist,
      }

    case 'REMOVE_VIDEO_FROM_PLAYLIST':
      return { ...playlistState, playlists: [playlistAction.payload] }
    default:
      return playlistState
  }
}
