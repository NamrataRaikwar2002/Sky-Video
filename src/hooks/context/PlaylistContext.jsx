import { createContext, useReducer, useContext } from 'react'
import { PlaylistReducer } from '../reducer/PlaylistReducer'

const PlaylistContext = createContext(null)
const usePlaylist = () => useContext(PlaylistContext)

const PlaylistContextProvider = ({ children }) => {
  const [playlistState, playlistDispatch] = useReducer(PlaylistReducer, {
    playlists: [],
  })

  return (
    <PlaylistContext.Provider value={{ playlistState, playlistDispatch }}>
      {children}
    </PlaylistContext.Provider>
  )
}

export { PlaylistContextProvider, usePlaylist }
