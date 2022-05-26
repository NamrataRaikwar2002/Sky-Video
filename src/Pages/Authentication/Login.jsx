import React, { useReducer, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Authentication.css'
import { Navbar } from '../../Component'
import { AuthReducer } from '../../hooks/reducer/AuthReducer'
import { useAuth } from '../../hooks/context/AuthContext'

const Login = () => {
  const { loginPost } = useAuth()
  const [authState, authDispatch] = useReducer(AuthReducer, {
    email: '',
    password: '',
    isSubmit: false,
  })
  const { email, password, isSubmit } = authState
  const [inputType, setinputType] = useState('password')

  const submitHandler = (e) => {
    e.preventDefault()
    authDispatch({ type: 'SUBMIT' })
  }
  useEffect(() => {
    if (isSubmit) {
      loginPost(email, password)
    }
  }, [isSubmit])

  const guestLoginHandler = () => {
    authDispatch({
      type: 'GUEST_LOGIN',
      payload: { email: 'demo@gmail.com', password: 'demo123' },
    })
  }

  return (
    <>
      <main className="login_page">
        <Navbar />
        <section className="login_box">
          <form onSubmit={(e) => submitHandler(e)}>
            <div className="login_div">
              <h2 className="createAccount">Login</h2>
              <label htmlFor="emailInput">Email address</label>
              <input
                type="email"
                className="login_input"
                placeholder="username"
                id="loginInput"
                value={email}
                autocomplete="off"
                onChange={(e) =>
                  authDispatch({ type: 'EMAIL', payload: e.target.value })
                }
                required
              />
              <label htmlFor="passwordInput">Password</label>
              <div className="showHideDiv">
                <input
                  type={inputType}
                  className="login_input passwordInputDiv"
                  placeholder="Password"
                  id="passwordInput"
                  value={password}
                  autocomplete="off"
                  onChange={(e) =>
                    authDispatch({ type: 'PASSWORD', payload: e.target.value })
                  }
                  required
                />
                <div
                  onClick={() =>
                    inputType === 'text'
                      ? setinputType('password')
                      : setinputType('text')
                  }
                >
                  {inputType === 'text' ? (
                    <p className="hideIcon">
                      <i className="fa-regular fa-eye"></i>
                    </p>
                  ) : (
                    <p className="hideIcon">
                      <i className="fa-regular fa-eye-slash"></i>
                    </p>
                  )}
                </div>
              </div>
              <button className="primary_btn btn" onClick={guestLoginHandler}>
                Guest Login
              </button>
              <button type="submit" className="primary_btn btn">
                Login
              </button>
              <Link
                to="/signup-page"
                className="createAccount login_signup_link"
              >
                Create New Account
              </Link>
            </div>
          </form>
        </section>
      </main>
    </>
  )
}

export { Login }
