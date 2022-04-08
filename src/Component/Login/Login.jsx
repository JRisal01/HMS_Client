import React, { useState } from 'react'
import '../../css/login.css'





export default function Login() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [loginName, setLoginName] = useState('')
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

    // const signUpButton = document.getElementById('signUp');
    // const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    function signUpButton(){
      container.classList.add("right-panel-active");
    }

    function signInButton(){
      container.classList.remove("right-panel-active");
    }



  return (
    <>
      <div class="container" id="container">
        <div class="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            <span>use your email for registration</span>
            <input type="text" placeholder="Name" value={name} onChange={(e)=> setName(e.target.value)}/>
            <input type="email" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
            <input type="password" placeholder="Password" value={password} onChange={(e)=>
            setPassword(e.target.value)}/>
            <button>Sign Up</button>
          </form>
        </div>
        <div class="form-container sign-in-container">
          <form action="#">
            <h1>Sign in</h1>
            <span>se your account</span>
            <input type="email" placeholder="Email" value={loginEmail} onChange={(e)=> setLoginEmail(e.target.value)}/>
            <input type="password" placeholder="Password" value={loginPassword} onChange={(e)=>
            setLoginPassword(e.target.value)}/>
            <a href="#">Forgot your password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button class="ghost" id="signIn" onClick={()=> signInButton()}>Sign In</button>
            </div>
            <div class="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button class="ghost" id="signUp" onClick={()=> signUpButton()}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
