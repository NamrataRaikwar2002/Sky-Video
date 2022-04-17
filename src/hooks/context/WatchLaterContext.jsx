import { createContext, useContext, useReducer } from 'react'
import { WatchLaterReducer } from '../reducer/WatchLaterReducer'

const WatchLaterContext = createContext()
const useWatchLater = () => useContext(WatchLaterContext)

const WatchLaterCotextProvider = ({ children }) => {
  const [watchLaterState, watchLaterDispatch] = useReducer(WatchLaterReducer, {
    watchLater: [],
  })
  return (
    <WatchLaterContext.Provider value={{  watchLaterState, watchLaterDispatch }}>
      {children}
    </WatchLaterContext.Provider>
  )
}

export { WatchLaterCotextProvider, useWatchLater }
