import axios from "axios"
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

const AuthContext = createContext(null)
const useAuth = () => useContext(AuthContext)

const AuthContextProvider = ({children}) => {
    const navigation = useNavigate();
    const [userDetail, setuserDetail] = useState({token:'', user:{}})

    useEffect(() => {
        const token=localStorage.getItem("skyEncodedToken")
        const user = JSON.parse(localStorage.getItem("skyUser"))
        if(token && user){
            setuserDetail({...userDetail,token:token, user:user})
        }else{
            setuserDetail({...userDetail,token:"", user:{}})
        }
    },[])

    const loginPost = async (email, password) => {
        try{
            const response = await axios.post('/api/auth/login', {email, password} )
            if(response.status === 200){
                    navigation('/')
                localStorage.setItem("skyEncodedToken", response.data.encodedToken)
                localStorage.setItem("skyUser", JSON.stringify(response.data.foundUser) )
                setuserDetail({...userDetail, token:response.data.encodedToken, user:response.data.foundUser})
           }
        }
        catch(error){
            console.error(error, 'error is there');
        }
    }
    console.log(userDetail);

    return(
        <AuthContext.Provider value={{loginPost, userDetail,setuserDetail }}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContextProvider, useAuth}