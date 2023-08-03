// **************************login form **************************//
import React, { useState } from "react";
import './app.css';
import { useNavigate } from "react-router-dom";
import logo from './Images/logo.jpg'
import './register.css'
import { Link } from "react-router-dom";
export default function Login(){
    const navigate= useNavigate();
    const[email,setEmail]= useState('');
    const[password,setPassword]= useState('');


    const UserLogin= async (e)=>{

      e.preventDefault();

      const res= await fetch('/login',{

        method:"POST",
        headers:{
          "Content-type":'application/json'

        },
        body: JSON.stringify({
        
            email,
            password
          
        })
      });

      const data= await res.json();

      if(data.message === "User Login Sucessfull")
      {
        navigate("/movies")
      }
      window.alert(data.message)
     
  }

    return(
        <>
        

        

        <div className="container">
        <Link to='/'><img className="logo" style={{marginTop:'18px', marginLeft:'-46px'}} src={logo} alt="" /></Link>

        
<div className="tab-content Login-content" >
  <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
    <form style={{width:'700px',backgroundColor:'white',borderRadius:'50px',marginTop:'3%',marginLeft:'auto',marginRight:'auto', padding:'25px'}}>
      <div class="text-center mb-3">
        <p>Sign in with:</p>
        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-facebook-f"></i>
        </button>

        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-google"></i>
        </button>

        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-twitter"></i>
        </button>

        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-github"></i>
        </button>
      </div>

      {/* <p class="text-center">or:</p> */}

      {/* <!-- Email input --> */}
      <div class="form-outline mb-4 text-center">
        <input type="email" id="loginName" name="email" value={email}
        onChange={(e)=>{setEmail(e.target.value)}}
        class="form-control" />
        <label class="form-label" for="loginName">Email or username</label>
      </div>

      {/* <!-- Password input --> */}
      <div class="form-outline mb-4 text-center center">
        <input type="password" id="loginPassword" name="password" value={password}
         onChange={(e)=>{setPassword(e.target.value)}} class="form-control  center text-center" />
        <label class="form-label" for="loginPassword">Password</label>
      </div>

      {/* <!-- 2 column grid layout --> */}
      <div class="row mb-4">
        <div class="col-md-6 d-flex justify-content-center">
         
        </div>

        <div class="col-md-6 d-flex justify-content-center">
          {/* <!-- Simple link --> */}
          <a href="#!">Forgot password?</a>
        </div>
      </div>

      {/* <!-- Submit button --> */}
      <div className="text-center">

      <button onClick={UserLogin} type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>
      </div>

      {/* <!-- Register buttons --> */}
      <div class="text-center">
        <p>Not a member? <Link to='/register' >Register</Link></p>
      </div>
    </form>
  </div>
  <div class="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
    <form>
      <div class="text-center mb-3">
        <p>Sign up with:</p>
        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-facebook-f"></i>
        </button>

        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-google"></i>
        </button>

        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-twitter"></i>
        </button>

        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-github"></i>
        </button>
      </div>

      <p class="text-center">or:</p>

      {/* <!-- Name input --> */}
      <div class="form-outline mb-4">
        <input type="text" id="registerName" class="form-control" />
        <label class="form-label" for="registerName">Name</label>
      </div>

      {/* <!-- Username input --> */}
      <div class="form-outline mb-4">
        <input type="text" id="registerUsername" class="form-control" />
        <label class="form-label" for="registerUsername">Username</label>
      </div>

      {/* <!-- Email input --> */}
      <div class="form-outline mb-4">
        <input type="email" id="registerEmail" class="form-control" />
        <label class="form-label" for="registerEmail">Email</label>
      </div>

      {/* <!-- Password input --> */}
      <div class="form-outline mb-4">
        <input type="password" id="registerPassword" class="form-control" />
        <label class="form-label" for="registerPassword">Password</label>
      </div>

      {/* <!-- Repeat Password input --> */}
      <div class="form-outline mb-4">
        <input type="password" id="registerRepeatPassword" class="form-control" />
        <label class="form-label" for="registerRepeatPassword">Repeat password</label>
      </div>

      {/* <!-- Checkbox --> */}
      <div class="form-check d-flex justify-content-center mb-4">
        <input class="form-check-input me-2" type="checkbox" value="" id="registerCheck" checked
          aria-describedby="registerCheckHelpText" />
        <label class="form-check-label" for="registerCheck">
          I have read and agree to the terms
        </label>
      </div>

      {/* <!-- Submit button --> */}
      <button type="submit" class="btn btn-primary btn-block mb-3">Sign in</button>
    </form>
  </div>
</div>
{/* <!-- Pills content --> */}
        </div>


  
        </>
    )
}