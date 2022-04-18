import axios from "axios"

const addToLike = async (video,token,likeDispatch) => {
    try{
        const response = await axios.post("/api/user/likes", {video} ,{headers:{authorization: token}})
        likeDispatch({type:"LIKED_VIDEO", payload:response.data.likes})

    }
    catch(error){
        console.error(error);
    }
}

export{addToLike}