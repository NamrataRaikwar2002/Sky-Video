import { createContext, useContext, useReducer } from "react"
import { LikeReducer } from "../reducer/LikeReducer";

const LikeVideoContext = createContext(null)
const useLikeVideoContext = () => useContext(LikeVideoContext);

const LikeVideoContextProvider = ({children}) => {

    const [likeState, likeDispatch] = useReducer(LikeReducer, {likes:[]})
    return(
        <LikeVideoContext.Provider value={{likeState, likeDispatch}}>
            {children}
        </LikeVideoContext.Provider>
    )
}
export {LikeVideoContextProvider,useLikeVideoContext}