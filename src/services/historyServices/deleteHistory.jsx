import axios from "axios"

const deleteHistory = async (videoId,token, historyDispatch) => {
    try{
        const response = await axios.delete(`/api/user/history/${videoId}`, {headers:{authorization:token}})
        historyDispatch({type:"DELETE_HISTORY", payload:response.data.history})
    }catch(error){
        console.error(error);
    }

}

export{deleteHistory}