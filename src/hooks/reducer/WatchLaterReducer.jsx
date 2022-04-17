const WatchLaterReducer = (watchLaterState, watchLaterAction) => {
    switch(watchLaterAction.type){
        case "WATCH_LATER_VIDEO":
            return{...watchLaterState, watchLater: watchLaterAction.payload}
        case "DELETE_WATCH_LATER":
        return{...watchLaterState,  watchLater:watchLaterAction.payload}
        default:
            return watchLaterState;
    }
}

export {WatchLaterReducer}