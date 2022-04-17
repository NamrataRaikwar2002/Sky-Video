const LikeReducer = (likeState, likeAction) => {
    switch(likeAction.type){
        case "LIKED_VIDEO":
            return{...likeState, likes:likeAction.payload}
        case "GET_LIKES":
            return {...likeState, likes:likeAction.payload}
        case "DELETE_LIKED":
            return {...likeState, likes:likeAction.payload}
        default:
            return likeState;
    }
}   

export{LikeReducer}