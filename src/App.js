import './App.css'
import MockmanEs from 'mockman-js'
import { Routes, Route } from 'react-router-dom'
import {
  Error404,
  Explore,
  Login,
  MyPlaylist,
  Signup,
  SingleVideo,
  WatchLaterVideo,
} from './Pages'
import { SinglePlaylist } from './Pages/SinglePlaylist/SinglePlaylist'
import { Playlist } from './Component'
import { usePlaylistModal } from './hooks/context/PlaylistModalContext'
import { LikedVideo } from './Pages/LikedVideo/LikedVideo'
import { HistoryVideo } from './Pages/HistoryVideo/HistoryVideo'
import { RequiresAuth } from './RequiresAuth'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

function App() {
  const { modalState } = usePlaylistModal()
  const { modalStatus } = modalState
  return (
    <>
      {modalStatus ? <Playlist /> : null}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme="dark"
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route path="/mock" element={<MockmanEs />} />
        <Route path="/" element={<Explore />} />
        <Route path="/login-page" element={<Login />} />
        <Route path="/signup-page" element={<Signup />} />
        <Route path="/explore/:videoId" element={<SingleVideo />} />
        <Route
          path="/MyPlaylist-page/:playlistId"
          element={<SinglePlaylist />}
        />
        <Route
          path="/MyPlaylist-page"
          element={
            <RequiresAuth>
              <MyPlaylist />
            </RequiresAuth>
          }
        />
        <Route
          path="/liked-videos-page"
          element={
            <RequiresAuth>
              <LikedVideo />
            </RequiresAuth>
          }
        />
        <Route
          path="/watchlater-page"
          element={
            <RequiresAuth>
              <WatchLaterVideo />
            </RequiresAuth>
          }
        />
        <Route
          path="/history-page"
          element={
            <RequiresAuth>
              <HistoryVideo />
            </RequiresAuth>
          }
        />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  )
}

export default App
