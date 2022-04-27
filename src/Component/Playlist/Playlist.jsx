import { useState } from 'react'
import './Playlist.css'
import { useAuth } from '../../hooks/context/AuthContext'
import { usePlaylist } from '../../hooks/context/PlaylistContext'
import { createPlaylist } from '../../services'
import { usePlaylistModal } from '../../hooks/context/PlaylistModalContext'
import { addVideoToPlaylist } from '../../services/playlistsServices/addVideoToPlaylist'
import { deleteVideoFromPlaylist } from '../../services/playlistsServices/deleteVideoFromPlaylist'
import { useLocation } from 'react-router'

export const Playlist = ({ _id }) => {
  const [playlistName, setplaylistName] = useState({ title: '' })
  const { modalState, modalDispatch } = usePlaylistModal()
  const { video } = modalState
  const { userDetail } = useAuth()
  const { token } = userDetail
  const { playlistState, playlistDispatch } = usePlaylist()
  const { playlists } = playlistState
  const location = useLocation()

  const playlistInputHandler = (e) => {
    setplaylistName({ ...playlistName, title: e.target.value })
  }

  const checkPlaylist = (title) => {
    if (playlists.find((item) => item.title === title)) {
      alert('Playlist already exist')
    } else if (playlistName.title === '') {
      alert('Please Enter Playlist Name')
    } else {
      return true
    }
  }

  const createPlaylistHandler = () => {
    {
      location.pathname === '/MyPlaylist-page'
        ? modalDispatch({ type: 'MODAL_CLOSE' })
        : null
    }
    if (checkPlaylist(playlistName.title)) {
      createPlaylist(playlistName, playlistDispatch, token, video)
    }
    setplaylistName({ ...playlistName, title: '' })
  }

  const checkVideoInPlaylist = (videos) => {
    const check = videos.some((item) => item._id === video._id)
    return check
  }

  const videoInPlaylistHandler = (e, _id, video) => {
    const checkVideo = e.target.checked
    modalDispatch({ type: 'MODAL_CLOSE' })
    if (checkVideo) {
      addVideoToPlaylist(_id, video, token, playlistDispatch)
    } else {
      deleteVideoFromPlaylist(_id, video._id, token, playlistDispatch)
    }
  }
  return (
    <>
      <div
        className="overlay"
        onClick={() => modalDispatch({ type: 'MODAL_CLOSE' })}
      ></div>
      <div className="playlistDiv">
        <h3 className="borderBottom playlistHeader">
          Create New Playlist
          <p>
            <i
              className="fa-solid fa-xmark crossIcon cursorPointer"
              onClick={() => modalDispatch({ type: 'MODAL_CLOSE' })}
            ></i>
          </p>
        </h3>
        {playlists
          ? playlists.map(({ _id, title, videos }) => {
              return (
                <div key={_id} className="presenPlaylist">
                  {location.pathname === '/MyPlaylist-page' ? (
                    <ul className="playlistList">
                      <li>{title}</li>
                    </ul>
                  ) : (
                    <>
                      <input
                        type="checkbox"
                        id={_id}
                        checked={checkVideoInPlaylist(videos)}
                        className="borderBottom"
                        onChange={(e) => videoInPlaylistHandler(e, _id, video)}
                      />
                      <label htmlFor={_id}>{title}</label>
                    </>
                  )}
                </div>
              )
            })
          : null}
        <input
          type="text"
          className="playlistInput borderBottom"
          value={playlistName.title}
          placeholder="Create new playlist"
          onChange={playlistInputHandler}
        />
        <p
          className="createButton cursorPointer"
          onClick={createPlaylistHandler}
        >
          Create
        </p>
      </div>
    </>
  )
}
