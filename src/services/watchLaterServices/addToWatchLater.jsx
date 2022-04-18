import axios from "axios"

const addToWatchLater = async ( video, token, watchLaterDispatch) => {
   try{
       const response = await axios.post("/api/user/watchlater", { video }, {headers:{authorization:token}})
       watchLaterDispatch({type:'WATCH_LATER_VIDEO', payload:response.data.watchlater})

   }catch(error){
       console.error(error);
   }
}

export {addToWatchLater}