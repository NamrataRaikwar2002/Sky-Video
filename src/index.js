import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { makeServer } from './server'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './hooks/context/AuthContext'
import { PlaylistContextProvider } from './hooks/context/PlaylistContext'
import { PlaylistModalContextProvider } from './hooks/context/PlaylistModalContext'
import { LikeVideoContextProvider } from './hooks/context/LikeVideoContext'
import { WatchLaterCotextProvider } from './hooks/context/WatchLaterContext'

// Call make Server
makeServer()

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <WatchLaterCotextProvider>
        <LikeVideoContextProvider>
          <PlaylistModalContextProvider>
            <PlaylistContextProvider>
              <AuthContextProvider>
                <App />
              </AuthContextProvider>
            </PlaylistContextProvider>
          </PlaylistModalContextProvider>
        </LikeVideoContextProvider>
      </WatchLaterCotextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
