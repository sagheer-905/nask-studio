import React, { Component, useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import swal from 'sweetalert';
import { BASE_URL } from "../../constants";
const LoginFormSection = () =>{
    // const [email,setEmail]=useState();
    // const [password,setPassword]=useState();


    const navigate = useNavigate();
    useEffect(() => {
        const loggedInUser = localStorage.getItem("auth");
        // console.log("if login ",loggedInUser);
        if (loggedInUser) {
            navigate('/user-dashboard');
        }
    }, []);

    const [registerInput, setRegister] = useState({
        email : '',
        password : '',
    });

    const handleInput = (e) => {
        e.persist();
        setRegister({...registerInput, [e.target.name]: e.target.value });
    }
  
   function login(){

            const data = {
                email : registerInput.email,
                password : registerInput.password
            }

        axios.post(`${BASE_URL}/login`, data).then(res => {

                    console.log(res);
                    if(res.data.users){
                        localStorage.setItem("auth", res.data.token);
                        localStorage.setItem("email", JSON.stringify(res.data.users['email']));
                         
                        navigate('/user-dashboard');
                    }
               

            }).catch(error => {
                if (error.response) {
                    
                  swal("Error","Invalid Email or Password","error");
                   console.log(error.response.data.errors);

                }
              }); 
 
        } 
        return (
          <>
          
            <div className="login-form border-top border-bottom py-5">
                <div className="container">
                    <div className="inner-wrap">
                        <div className="row align-items-center justify-content-center justify-content-lg-start">
                        <div className="col-12 col-lg-5 position-relative">
                            <img src="images/forms/img-2.png" alt="..." className="img-fluid d-none d-lg-block" />
                            <img src="images/forms/img-1.png" alt="...." className="img-fluid d-block d-lg-none w-100" />
                            <div className="img-content">
                            <h5 className="fw-semibold text-white">A few more clicks to to<br />sign in to your account.</h5>
                            <p className="text-white">Manage all your e-commerce account in one place</p>
                            </div>
                        </div>
                        <div className="col-11 col-md-7 col-lg-7 py-5 py-lg-0">
                            <h4 className="fw-bold mb-4">Sign In</h4>
                            <div>
                            <div className="mb-4">
                                <input type="email" required onChange={handleInput} value={registerInput.email} className="form-control rounded-pill border-0" placeholder="Email" name="email" />
                            </div>
                            <div className="mb-3">
                                <input type="password" required onChange={handleInput} value={registerInput.password} className="form-control rounded-pill border-0" placeholder="Password" name="password" />
                            </div>
                            <div className="mb-4 d-flex justify-content-between">
                                <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                                </div>
                                <a href="reset-password.html">Forgot Password?</a>
                            </div>
                            <div className="mb-4">
                                <button type="submit" className="btn rounded-pill" onClick={()=>login()}>Login</button>
                                <button type="submit" className="btn rounded-pill">Register</button>
                            </div>
                            </div>
                            <p className="pt-3 pt-md-5 bottom-text">By signin up, you agree to our <a href="#">Terms and
                                Conditions &amp; Privacy Policy</a></p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
      
          </>
        )
}


export default LoginFormSection;