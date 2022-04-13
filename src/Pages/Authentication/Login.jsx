import React, { useReducer, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Authentication.css'
import { Navbar } from '../../Component'
import { AuthReducer } from '../../hooks/reducer/AuthReducer'
import { useAuth } from '../../hooks/context/AuthContext';

const Login = () => {
  const {loginPost} = useAuth();
  const [authState, authDispatch] = useReducer(AuthReducer, {email:'', password:'', isSubmit:false});
  const {email, password, isSubmit} = authState;
  const [inputType, setinputType] = useState('password')
  console.log(authState)

const submitHandler = (e) => { 
  e.preventDefault();
  authDispatch({type:"SUBMIT"})
  
}
  useEffect(() => {
     if(isSubmit){
       loginPost(email, password)
     }
  }, [isSubmit]);


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
                onChange={(e) => authDispatch({type:"EMAIL", payload: e.target.value})}
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
                  onChange={(e) => authDispatch({type:"PASSWORD", payload: e.target.value})}
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

              <div className="forgot_password_div">
                <input
                  type="checkbox"
                  name="1"
                  className="rememberme"
                  id="rememberMe"
                />
                <label htmlFor="rememberMe">Remember me</label>
                <Link to="/">
                  <span>Forgot your Password?</span>
                </Link>
              </div>
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
