import React from 'react'
import './CSS/Login.css'

export const Login = () => {
  return (
    <div className='login'>
        <div className="login-container">
            <h1>Sign Up</h1>
            <div className='login-fields'>
                <input type='text' placeholder='Your Name' />
                <input type='email' placeholder='Your Email ID' />
                <input type='password' placeholder='Your Password' />
            </div>
            <div className="login-signup-agree">
                <input type='checkbox' name='' id='' />
                <p>By continuing, I agree to the terms of use and privacy policy.</p>
            </div>
            <button>Continue</button>
            <p className="login-signup-login">Already have an account? <span>Login here.</span></p>
        </div>
    </div>
  )
}
