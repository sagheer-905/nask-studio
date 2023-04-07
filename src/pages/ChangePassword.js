import React , { useState } from 'react'
import UserPanelNav from '../components/UserPanelNav'
import swal from 'sweetalert';
import axios from 'axios';

const ChangePassword = () => {

    const [passwordInput, setRegister] = useState({
        password : '',
        password_confirmation : '',
        error_list: [],
    });

    const handleInput = (e) => {
        e.persist();
        setRegister({...passwordInput, [e.target.name]: e.target.value });
    }

 const changePassword = (e) => {
        e.preventDefault();

     const data = {
            password : passwordInput.password,
            password_confirmation : passwordInput.password_confirmation,
            email : localStorage.getItem("email"),
        }
        if(passwordInput.password === passwordInput.password_confirmation){
 
            axios.post('https://nask.1stbusines.com/api/v1/reset-password', data).then(res => {
                // console.log(res.data);
                if(res.data.message === "success")
                {
                    swal('Success',"Password Updated",'success');
                }
                else
                {
                    swal('Danger',res.data.validate,"error"); 
                }
            }); 
        }else{
            swal('Error',"Password and confirm password shold be Same","error");
        }
        }
  return (
    <>
      <div className="container">
            <div className="row" style={{margin: '75px 0px'}}>
          
            <UserPanelNav/>

            <div className="col-lg-9 right-bar">
                <div className="register-form ">
                <div className="row justify-content-center">
                    <div className="col-11 col-lg-12 col-xl-12 rounded-4">
                    <h4 className="fw-semibold text-center ">Change Password</h4>
                    {/* form */}
                    <form className="px-xl-4" onSubmit={changePassword}>
                        {/* password */}
                        <div className="row align-items-center">
                        <div className="col-md-2">
                            <label htmlFor className="form-label">New Password</label>
                        </div>
                        <input type="hidden" className="form-control rounded-pill" onChange={handleInput} value={localStorage.getItem("email")} name="email" />
                        <div className="col-md-10">
                            <input type="password" required className="form-control rounded-pill" placeholder="Password" onChange={handleInput} value={passwordInput.password} name="password" />
                            <span>{passwordInput.error_list.password}</span>
                        </div>
                        <div className="col-md-2">
                            <label htmlFor className="form-label">Confirm Password</label>
                        </div>
                        <div className="col-md-10">
                            <input type="password" required className="form-control rounded-pill" placeholder="Confirm Password" onChange={handleInput} value={passwordInput.password_confirmation} name="password_confirmation" />
                        </div>
                        </div>                  
                        {/* register button */}
                        <div className="row align-items-center">
                        <div className="col-12 text-center">
                            <button type="submit" className="btn rounded-pill text-uppercase mt-4">Update</button>
                        </div>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
                {/*------------ Registration Form End -------------*/}
            </div>
            </div>
      </div>
    </>
  )
}

export default ChangePassword