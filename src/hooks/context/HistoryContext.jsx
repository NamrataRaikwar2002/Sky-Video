import { createContext, useContext, useReducer } from "react"
import { HistoryReducer } from "../reducer/HistoryReducer"

const HistoryContext = createContext(null)
const useHistory = () => useContext(HistoryContext)

const HistoryContextProvider = ({children}) => {

    const [historyState, historyDispatch] = useReducer(HistoryReducer, {history:[]})
    return(
        <HistoryContext.Provider value={{historyState, historyDispatch}}>
            {children}
        </HistoryContext.Provider>

    )
}

export {HistoryContextProvider, useHistory}