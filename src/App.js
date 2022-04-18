import './App.css'
import MockmanEs from 'mockman-js'
import { Routes, Route } from 'react-router-dom'
import { Explore, Login, MyPlaylist, Signup, WatchLaterVideo } from './Pages'
import { SinglePlaylist } from './Pages/SinglePlaylist/SinglePlaylist'
import { Playlist } from './Component'
import { usePlaylistModal } from './hooks/context/PlaylistModalContext'
import { LikedVideo } from './Pages/LikedVideo/LikedVideo'
import { HistoryVideo } from './Pages/HistoryVideo/HistoryVideo'

function App() {
  const { modalState } = usePlaylistModal()
  const { modalStatus } = modalState
  return (
    <>
      {modalStatus ? <Playlist /> : null}
      <Routes>
        <Route path="/mock" element={<MockmanEs />} />
        <Route path="/" element={<Explore />} />
        <Route path="/login-page" element={<Login />} />
        <Route path="/signup-page" element={<Signup />} />
        <Route path="/MyPlaylist-page" element={<MyPlaylist />} />
        <Route
          path="/MyPlaylist-page/:playlistId"
          element={<SinglePlaylist />}
        />
        <Route path='/liked-videos-page' element={<LikedVideo />}/>
        <Route path='/watchlater-page' element={<WatchLaterVideo/>}/>
        <Route path='/history-page' element={<HistoryVideo />}/>
      </Routes>
    </>
  )
}

export default App
