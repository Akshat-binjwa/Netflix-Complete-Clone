import React from "react";
import './app.css'
import { useState } from "react";
import logo from './Images/logo.jpg'
import './register.css'
import { Link, useNavigate } from "react-router-dom";
export default function Register(){


  const history= useNavigate();
  const [user,setUser]=useState({
    name:'',email:'',number:'',password:'',cpassword:''
  })

  let name,value;

  const handleInputs=(e)=>{
      name=e.target.name;
      value=e.target.value;
      setUser({...user,[name]:value})

  }
  

  const postData= async (e)=>{
      
    e.preventDefault();

    const {name,email,number,password,cpassword}= user;

    const res= await fetch('/register',{
        method:'POST',
        headers:{
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          name,email,number,password,cpassword
        })
    });
      const data= await res.json()
      
      if(data.message === "User Successfully Registered")
      {
        history('/login')
      }
      window.alert(data.message);


  }




    return(





        <>
        
        <section class=" bg-image " style={{margin:'20px', height:'600px', width:'auto'}}>
              <Link to='/'><img className="logo" src={logo} alt="" /></Link>
  <div class="mask d-flex align-items-center  gradient-custom-3">
    <div class="container h-100 " style={{marginBottom:'3%'}}>
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
          <div class="card" style={{borderRadius: '15px'}}>
            <div class="card-body p-5">
              <h2 class="text-uppercase text-center mb-5">Create an account</h2>

              <form method="POST">

                <div class="form-outline mb-4">
                  <input type="text" autoComplete="off" name="name" onChange={handleInputs} id="form3Example1cg" class="form-control form-control-lg" />
                  <label class="form-label" for="form3Example1cg">Your Name</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="email" name="email" onChange={handleInputs} id="form3Example3cg" autoComplete="off" class="form-control form-control-lg" />
                  <label class="form-label" for="form3Example3cg">Your Email</label>
                </div>
                <div class="form-outline mb-4">
                  <input type="text" name="number" autoComplete="off" onChange={handleInputs} id="form3Example3cg" class="form-control form-control-lg" />
                  <label class="form-label" for="form3Example3cg">Your Number</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="password" name="password" autoComplete="off" onChange={handleInputs} id="form3Example4cg" class="form-control form-control-lg" />
                  <label class="form-label" for="form3Example4cg">Password</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="password" name="cpassword" autoComplete="off" onChange={handleInputs} id="form3Example4cdg" class="form-control form-control-lg" />
                  <label class="form-label" for="form3Example4cdg">Repeat your password</label>
                </div>

                <div class="form-check d-flex justify-content-center mb-5">
                  <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                  <label class="form-check-label" for="form2Example3g">
                    I agree all statements in <a href="#!" class="text-body"><u>Terms of service</u></a>
                  </label>
                </div>

                <div class="d-flex justify-content-center">
                  <button type="button"
                  onClick={postData}
                    class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                </div>

                <p class="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!"
                    class="fw-bold text-body"><Link to='/login'>Login here</Link></a></p>

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        
        
        
        </>


    )
}