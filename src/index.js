import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { makeServer } from './server'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './hooks/context/AuthContext'

// Call make Server
makeServer()

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
