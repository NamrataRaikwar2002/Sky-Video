import axios from "axios"

const createPlaylist = async (playlist,playlistDispatch,token) => {
    const response = await axios.post("/api/user/playlists", {playlist}, {headers: {authorization: token}})
    try{
        if(response.status === 201){
            playlistDispatch({type:"NEW_PLAYLIST_NAME", payload:response.data.playlists})
        }

    }catch(error){
        console.error(error);
    }
}

export{createPlaylist}