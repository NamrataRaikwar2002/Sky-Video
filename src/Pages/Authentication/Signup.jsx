import React, { useState, useEffect, useReducer } from 'react'
import { Navbar } from '../../Component'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/context/AuthContext'
import { signupReducer } from '../../hooks/reducer/signupReducer'
import { toast } from 'react-toastify'

export const Signup = () => {
  const [inputType, setinputType] = useState({
    passwordType: 'password',
    confirmpaswd: 'password',
  })
  const [signupState, signupDispatch] = useReducer(signupReducer, {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    confirmPassword: '',
    isSubmit: false,
  })
  const {
    email,
    password,
    firstName,
    lastName,
    confirmPassword,
    isSubmit,
  } = signupState
  const { signupPost } = useAuth()

  const submitHandler = (e) => {
    e.preventDefault()
    signupDispatch({ type: 'SUBMIT' })
  }

  const checkUserDetail = () => {
    return (
      email !== '' &&
      password !== '' &&
      firstName !== '' &&
      lastName !== '' &&
      confirmPassword !== ''
    )
  }

  const checkPassword = () => {
    if (password !== confirmPassword) {
      toast.error('The passwords entered do not match')
    } else {
      return true
    }
  }

  useEffect(() => {
    signupPost(
      email,
      password,
      firstName,
      lastName,
      confirmPassword,
      checkUserDetail,
      checkPassword,
    )
  }, [isSubmit])

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
              placeholder="Enter your first name"
              id="firstNameinput"
              value={firstName}
              name="firstName"
              onChange={(e) =>
                signupDispatch({
                  type: 'USER_DETAIL',
                  name: e.target.name,
                  payload: e.target.value,
                })
              }
              required
            />
            <label htmlFor="lastNameinput">Last Name</label>
            <input
              type="text"
              className="login_input"
              placeholder="Enter your last name"
              id="lastNameinput"
              name="lastName"
              onChange={(e) =>
                signupDispatch({
                  type: 'USER_DETAIL',
                  name: e.target.name,
                  payload: e.target.value,
                })
              }
              required
            />
            <label htmlFor="emailinput">Email address</label>
            <input
              type="email"
              className="login_input"
              placeholder="Enter your Email"
              id="emailinput"
              name="email"
              onChange={(e) =>
                signupDispatch({
                  type: 'USER_DETAIL',
                  name: e.target.name,
                  payload: e.target.value,
                })
              }
              required
            />
            <label htmlFor="passwordinput">Password</label>
            <div className="showHideDiv">
              <input
                type={inputType.passwordType}
                className="login_input passwordInputDiv"
                placeholder="Enter Password"
                id="passwordinput"
                name="password"
                onChange={(e) =>
                  signupDispatch({
                    type: 'USER_DETAIL',
                    name: e.target.name,
                    payload: e.target.value,
                  })
                }
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
                name="confirmPassword"
                onChange={(e) =>
                  signupDispatch({
                    type: 'USER_DETAIL',
                    name: e.target.name,
                    payload: e.target.value,
                  })
                }
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
                className="rememberme checkBox"
                id="rememberMe"
              />
              <label htmlFor="rememberMe">
                I accept all Terms & Conditions
              </label>
            </div>
            <button
              type="submit"
              className="primary_btn btn"
              onClick={(e) => submitHandler(e)}
            >
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
