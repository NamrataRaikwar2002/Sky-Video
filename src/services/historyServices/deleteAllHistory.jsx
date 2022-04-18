import axios from "axios"

const deleteAllHistory = async (token,historyDispatch) => {
    try{
        const response = await axios.delete("/api/user/history/all", {headers:{authorization:token}})
        historyDispatch({type:"DELETE_ALL_HISTORY", payload:response.data.history})
    }catch(error){
        console.error(error);
    }
}

export {deleteAllHistory}