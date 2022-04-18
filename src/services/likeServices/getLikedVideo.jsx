import axios from "axios"

const getLikedVideo = async (token,likeDispatch) => {
    try{
        const response = await axios.get("/api/user/likes", {headers:{authorization:token}})
        likeDispatch({type:"GET_LIKES", payload:response.data.likes})

    }
    catch(error){
        console.error(error);
    }

}

export {getLikedVideo}