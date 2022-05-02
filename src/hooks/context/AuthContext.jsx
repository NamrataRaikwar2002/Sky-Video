import axios from 'axios'
import { createContext, useContext, useState } from 'react'
import { useNavigate, useLocation } from 'react-router'
import { toast } from 'react-toastify'

const AuthContext = createContext(null)
const useAuth = () => useContext(AuthContext)

const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate()
  const [userDetail, setuserDetail] = useState({
    token: localStorage.getItem('skyEncodedToken') || '',
    user: JSON.parse(localStorage.getItem('skyUser')) || {},
  })

  const location = useLocation()

  const loginPost = async (email, password) => {
    if (email !== '' && password !== '') {
      try {
        const response = await axios.post('/api/auth/login', {
          email,
          password,
        })
        if (response.status === 200) {
          localStorage.setItem('skyEncodedToken', response.data.encodedToken)
          localStorage.setItem(
            'skyUser',
            JSON.stringify(response.data.foundUser),
          )
          setuserDetail({
            ...userDetail,
            token: response.data.encodedToken,
            user: response.data.foundUser,
          })
          navigate(location?.state?.from?.pathname || '/', { replace: true })
          toast.success('Login Successfully')
        } else {
          toast.error('Something went wrong!')
        }
      } catch (error) {
        toast.error(error.response.data.errors[0])
      }
    }
  }

  const signupPost = async (
    email,
    password,
    firstName,
    lastName,
    confirmPassword,
    checkUserDetail,
    checkPassword,
  ) => {
    if (checkUserDetail())
      if (checkPassword())
        try {
          const response = await axios.post('/api/auth/signup', {
            email,
            password,
            firstName,
            lastName,
            confirmPassword,
          })
          navigate(-2)
          toast.success(
            'Congratulations, your account has been successfully created',
          )
          localStorage.setItem('skyEncodedToken', response.data.encodedToken)
          localStorage.setItem(
            'skyUser',
            JSON.stringify(response.data.createdUser),
          )
          setuserDetail({
            ...userDetail,
            token: response.data.encodedToken,
            user: response.data.createdUser,
          })
        } catch (error) {
          toast.error(error.response.data.errors[0])
        }
  }
  return (
    <AuthContext.Provider
      value={{ loginPost, userDetail, signupPost, setuserDetail }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContextProvider, useAuth }
