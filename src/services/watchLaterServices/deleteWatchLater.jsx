import axios from "axios"

const deleteWatchLater = async (videoId,token, watchLaterDispatch) => {
    try{
        const response = await axios.delete(`/api/user/watchlater/${videoId}`, {headers:{authorization:token}})
        console.log(response);
        watchLaterDispatch({type:'DELETE_WATCH_LATER', payload:response.data.watchlater})
    }catch(error){
        console.error(error);
    }

}

export {deleteWatchLater}