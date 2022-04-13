import './App.css'
import MockmanEs from 'mockman-js'
import { Explore } from './Pages/VideoListing/Explore'
import { Routes, Route } from 'react-router-dom'
import { Login } from './Pages'
import { Signup } from './Pages/Authentication/Signup'
function App() {
  return (
    <>
      <Routes>
        <Route path="/mock" element={<MockmanEs />} />
        <Route path="/" element={<Explore />} />
        <Route path="/login-page" element={<Login />} />
        <Route path="/signup-page" element={<Signup />} />
      </Routes>
    </>
  )
}

export default App
