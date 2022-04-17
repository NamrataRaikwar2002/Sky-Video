import {ModalReducer} from '../reducer/ModalReducer'
import { createContext, useContext, useReducer } from "react";
 
const PlaylistModalContext = createContext(null)
const usePlaylistModal = () => useContext(PlaylistModalContext)
const PlaylistModalContextProvider = ({children}) => {

    const [modalState, modalDispatch ] = useReducer(ModalReducer, 
        {modalStatus:false, video:{}})
    return(
        <PlaylistModalContext.Provider value={{modalState,modalDispatch}}>
            {children}
        </PlaylistModalContext.Provider>
    )
}

export {PlaylistModalContextProvider, usePlaylistModal}