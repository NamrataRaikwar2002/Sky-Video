import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { makeServer } from './server'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './hooks/context/AuthContext'
import { PlaylistContextProvider } from './hooks/context/PlaylistContext'
import { PlaylistModalContextProvider } from './hooks/context/PlaylistModalContext'

// Call make Server
makeServer()

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <PlaylistModalContextProvider>
        <PlaylistContextProvider>
          <AuthContextProvider>
            <App />
          </AuthContextProvider>
        </PlaylistContextProvider>
      </PlaylistModalContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
