import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { makeServer } from './server'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './hooks/context/AuthContext'
import { PlaylistContextProvider } from './hooks/context/PlaylistContext'
import { PlaylistModalContextProvider } from './hooks/context/PlaylistModalContext'
import { LikeVideoContextProvider } from './hooks/context/LikeVideoContext'

// Call make Server
makeServer()

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <LikeVideoContextProvider>
      <PlaylistModalContextProvider>
        <PlaylistContextProvider>
          <AuthContextProvider>
            <App />
          </AuthContextProvider>
        </PlaylistContextProvider>
      </PlaylistModalContextProvider>
      </LikeVideoContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
