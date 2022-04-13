import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Authentication.css'
import { Navbar } from '../../Component'

const Login = () => {
  const [inputType, setinputType] = useState('password')
  return (
    <>
      <main className="login_page">
      <Navbar />
        <section className="login_box">
          <form>
            <div className="login_div">
              <h2 className="createAccount">Login</h2>
              <label htmlFor="emailInput">Email address</label>
              <input
                type="text"
                className="login_input"
                placeholder="username"
                id="loginInput"
                required
              />
              <label htmlFor="passwordInput">Password</label>
              <div className="showHideDiv">
                <input
                  type={inputType}
                  className="login_input passwordInputDiv"
                  placeholder="Password"
                  id="passwordInput"
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
                      <i class="fa-regular fa-eye"></i>
                    </p>
                  ) : (
                    <p className="hideIcon">
                      <i class="fa-regular fa-eye-slash"></i>
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
                  required
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
