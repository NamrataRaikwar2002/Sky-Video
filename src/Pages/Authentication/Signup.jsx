import React, { useState } from 'react'
import { Navbar } from '../../Component'
import { Link } from 'react-router-dom'

export const Signup = () => {
  const [inputType, setinputType] = useState({
    passwordType: 'password',
    confirmpaswd: 'password',
  })
  return (
    <main className="login_page">
      <Navbar />
      <section className="login_box content">
        <form>
          <div className="login_div">
            <h2 className="createAccount">Signup</h2>
            <label htmlFor="firstNameinput">First Name</label>
            <input
              type="text"
              className="login_input"
              placeholder="Enter you first name"
              id="firstNameinput"
              required
            />
            <label htmlFor="lastNameinput">Last Name</label>
            <input
              type="text"
              className="login_input"
              placeholder="Enter your last name"
              id="lastNameinput"
              required
            />
            <label htmlFor="emailinput">Email address</label>
            <input
              type="email"
              className="login_input"
              placeholder="username"
              id="emailinput"
              required
            />
            <label htmlFor="passwordinput">Password</label>
            <div className="showHideDiv">
              <input
                type={inputType.passwordType}
                className="login_input passwordInputDiv"
                placeholder="Enter Password"
                id="passwordinput"
                required
              />
              <div
                onClick={() =>
                  inputType.passwordType === 'text'
                    ? setinputType({ ...inputType, passwordType: 'password' })
                    : setinputType({ ...inputType, passwordType: 'text' })
                }
              >
                {inputType.passwordType === 'text' ? (
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


            <label htmlFor="confirmPswdinput">Confirm Password</label>
            <div className="showHideDiv">
              <input
                type={inputType.confirmpaswd}
                className="login_input passwordInputDiv"
                placeholder="Reenter Password"
                id="confirmPswdinput"
                required
              />
              {
                <div
                  onClick={() =>
                    inputType.confirmpaswd === 'text'
                      ? setinputType({ ...inputType, confirmpaswd: 'password' })
                      : setinputType({ ...inputType, confirmpaswd: 'text' })
                  }
                >
                  {inputType.confirmpaswd === 'text' ? (
                    <p className="hideIcon">
                      <i className="fa-regular fa-eye"></i>
                    </p>
                  ) : (
                    <p className="hideIcon">
                      <i className="fa-regular fa-eye-slash"></i>
                    </p>
                  )}
                </div>
              }
            </div>
            <div className="forgot_password_div">
              <input
                type="checkbox"
                name="1"
                className="rememberme"
                id="rememberMe"
                required
              />
              <label htmlFor="rememberMe">
                I accept all Terms & Conditions
              </label>
            </div>
            <button type="submit" className="primary_btn btn">
              Create New Account
            </button>
            <Link to="/login-page" className="createAccount login_signup_link">
              Already have an account
            </Link>
          </div>
        </form>
      </section>
    </main>
  )
}
