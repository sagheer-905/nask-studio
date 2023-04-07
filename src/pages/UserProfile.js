import React, {useState , useEffect} from 'react'
import UserPanelNav from '../components/UserPanelNav'
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";

const UserProfile = () => {

    const navigate = useNavigate();
    const [profileInput, setRegister] = useState({
        first_name : '',
        last_name : '',
        email : '',
        phone : '',
        address : '',
        address2 : '',
        city : '',
        service_area: '',
        zip: '',
        country: '',
        area: '',
    });

    const handleInput = (e) => {
        e.persist();
        setRegister({...profileInput, [e.target.name]: e.target.value });
    }

    const appToken = 'Bearer '+localStorage.getItem("auth");

        const requestOptions = {
            headers: { 'Authorization': appToken
                }
            };

    const profileSubmit = (e) => {
        e.preventDefault();
        
        const data = {
            name : profileInput.name,
            address : profileInput.address,
            email : profileInput.email,
            phone : profileInput.phone,
            service_city : profileInput.service_city,
            service_area : profileInput.service_area,
        }

            axios.post('https://nask.1stbusines.com/api/v1/user/update-profile', data , requestOptions
            ).then(res => {
                
                if(res.data)
                {   console.log(res.data);
                    swal('Success',res.data.message);
                }
                else
                {   
                    setRegister({...profileInput, error_list: res.data.validate});
                }
            }); 

    }


    useEffect(()=>{
        fetch("https://nask.1stbusines.com/api/v1/user/profile",requestOptions).then((result)=>{
          result.json().then((resp)=>{
            setRegister(resp.user_details)
            })
        })
      },[]);

  return (
    <>
      <div className="container">
            <div className="row" style={{margin: '75px 0px'}}>
          
            <UserPanelNav/>

            <div className="col-lg-9 right-bar">
                <div className="register-form ">
                <div className="row justify-content-center">
                    <div className="col-11 col-lg-12 col-xl-12 rounded-4">
                    <h4 className="fw-semibold text-center ">Update Your Profile</h4>
                    {/* form */}
                    <form onSubmit={profileSubmit}  method='POST' className="px-xl-4">
                        {/* full name */}
                        <div className="row align-items-center">
                        <div className="col-md-2">
                            <label htmlFor className="form-label">Full Name</label>
                        </div>
                        <div className="col-md-5">
                            <input type="text" required onChange={handleInput} value={profileInput.name} name="name" className="form-control rounded-pill" placeholder="Full Name" />
                        </div>
                        </div>
                        {/* email */}
                        <div className="row align-items-center">
                        <div className="col-md-2">
                            <label htmlFor className="form-label">E-mail</label>
                        </div>
                        <div className="col-md-10">
                            <input type="email" required onChange={handleInput} value={profileInput.email} name="email" className="form-control rounded-pill" placeholder="ex: myname@example.com" />
                        </div>
                        </div>
                        {/* address */}
                        <div className="row align-items-center">
                        <div className="col-md-2">
                            <label htmlFor className="form-label">Address</label>
                        </div>
                        <div className="col-md-10">
                            <input type="text" required onChange={handleInput} value={profileInput.address} name="address" className="form-control rounded-pill" placeholder="Street Address" />
                        </div>
                        </div>
                        <div className="row align-items-center">
                        <div className="col-md-2">
                            <label htmlFor className="form-label">Address 2</label>
                        </div>
                        <div className="col-md-10">
                            <input type="text" onChange={handleInput} value={profileInput.address2} name="address2" className="form-control rounded-pill" placeholder="Street Address Line 2" />
                        </div>
                        </div>
                        <div className="row align-items-center">
                        <div className="col-md-2">
                            <label htmlFor className="form-label">City &amp; State</label>
                        </div>
                        <div className="col-md-5">
                            <input type="text" required onChange={handleInput} value={profileInput.service_city} name="service_city" className="form-control rounded-pill" placeholder="City" />
                        </div>
                        <div className="col-md-5">
                            <input type="text" required onChange={handleInput} value={profileInput.service_area} name="service_area" className="form-control rounded-pill" placeholder="Areas" />
                        </div>
                        </div>
                        <div className="row align-items-center">
                        <div className="col-md-2">
                            <label htmlFor className="form-label">Zip &amp; Country</label>
                        </div>
                        <div className="col-md-5">
                            <input type="text" required onChange={handleInput} value={profileInput.zip} name="zip" className="form-control rounded-pill " placeholder="Postal / Zip Code" />
                        </div>
                        <div className="col-md-5 position-relative">
                            <select className="form-select rounded-pill" required onChange={handleInput} value={profileInput.country} name="country" aria-label="Default select example">
                            <option selected >Please Select</option>
                            <option value={1}>Pakistan</option>
                            <option value={2} >United Kingdom</option>
                            <option value={3}>Australia</option>
                            </select>
                            <span>Country</span>
                        </div>
                        </div>
                        {/* phone number */}
                        <div className="row align-items-center mt-4 mt-md-0">
                        <div className="col-md-2">
                            <label htmlFor className="form-label">Phone Number</label>
                        </div>
                        <div className="col-md-5">
                            <input type="text" required onChange={handleInput} value={profileInput.area} name="area" className="form-control rounded-pill" placeholder="Area Code" />
                        </div>
                        <div className="col-md-5">
                            <input type="text" required onChange={handleInput} value={profileInput.phone} name="phone" className="form-control rounded-pill" placeholder="Phone Number" />
                        </div>
                        </div>
                        {/* register button */}
                        <div className="row align-items-center">
                        <div className="col-12 text-center">
                            <button type="submit" className="btn rounded-pill text-uppercase mt-4">Submit</button>
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

export default UserProfile
