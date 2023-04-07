import React , { useState } from 'react'
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";

const VerifyeEmail = () => {

 const navigate = useNavigate();
    const loggedInUser = localStorage.getItem("auth");
    if (loggedInUser) {
      navigate('/login');
    } 
    const [registerInput, setRegister] = useState({
      code : '',
    });

    const handleInput = (e) => {
        e.persist();
        setRegister({...registerInput, [e.target.name]: e.target.value });
    }

    const virifySubmit = (e) => {
        e.preventDefault();
        
        const data = {
            code : registerInput.code,
            email_verified : localStorage.getItem("email_verified"),
        }

            axios.post('https://nask.1stbusines.com/api/v1/send-otp-in-mail/success', data).then(res => {
                
                if(res.status === 201)
                {   
        
                    swal('Success',"Account Verified","success");
                    navigate('/login');
                }
                else
                {
                    setRegister({...registerInput, error_list: res.data.validate});
                }
            }).catch(error => {
                if (error.response) {      
                
                  swal("Error",error.response.data.message,"error");
                }
              }); ; 


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
                <h4 className="fw-bold mb-4">Verify Your Email Account</h4>
                <h6>Please Check Your Email We have sent you the verification code Paste that codfe in here!</h6>
                <form onSubmit={virifySubmit}  method='POST'>
                  <div className="mb-4">
                    <input type="text" required name='code' onChange={handleInput} value={registerInput.code} className="form-control rounded-pill border-0" placeholder="Enter Your Code" />
                  </div>
                  <div className="mb-4 d-flex justify-content-between">
                  </div>
                  <div className="mb-4">
                    <button type="submit" className="btn rounded-pill">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default VerifyeEmail