import axios from 'axios'

const deleteLiked = async (videoId, token,likeDispatch) => {
  try {
    const response = await axios.delete(`/api/user/likes/${videoId}`, {headers:{authorization:token}})
    likeDispatch({type:"DELETE_LIKED", payload:response.data.likes})
  } catch (error) {
    console.error(error)
  }
}

export {deleteLiked}
