import React , { useEffect,useState }  from 'react'
import { useParams , useNavigate} from 'react-router-dom';

const BookingInformation = () => {
  const navigate = useNavigate();
  const loggedInUser = localStorage.getItem("auth");
  // console.log(loggedInUser);
     
  
  const {id , service_id} = useParams();
  const [profileInput, setRegister] = useState({
      name : '',
      email : '',
      phone : '',
      address : '',
      order_note : '',
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
      
      localStorage.setItem("service_id", service_id);
      localStorage.setItem("seller_id", id);
      localStorage.setItem("order_note", profileInput.order_note);
      localStorage.setItem("name", profileInput.name);
      localStorage.setItem("email", profileInput.email);
      localStorage.setItem("address", profileInput.address);
      localStorage.setItem("phone", profileInput.phone);

      navigate('/confirmation');
  }


  useEffect(()=>{
    if (!loggedInUser) {
      navigate('/login');
    }
      fetch("https://nask.1stbusines.com/api/v1/user/profile",requestOptions).then((result)=>{
        result.json().then((resp)=>{
          setRegister(resp.user_details)
          })
      })
    },[]);

  return (
    <>
       <div className="register-form border-top border-bottom py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-11 col-lg-10 col-xl-9 py-sm-5 ps-sm-3 pe-sm-5 rounded-4 py-5 px-3">
              <h4 className="fw-semibold text-center mb-5">Booking Information</h4>
              {/* form */}
              <form className="px-xl-4" onSubmit={profileSubmit} >
                {/* full name */}
                <div className="row align-items-center">
                  <div className="col-md-2">
                    <label htmlFor className="form-label">Full Name</label>
                  </div>
                  <div className="col-md-5">
                    <input type="text" required onChange={handleInput} value={profileInput.name} name="name" className="form-control rounded-pill" placeholder="First Name" />
                  </div>
                </div>
                {/* email */}
                <div className="row align-items-center">
                  <div className="col-md-2">
                    <label htmlFor className="form-label">E-mail</label>
                  </div>
                  <div className="col-md-5">
                    <input type="email" required onChange={handleInput} value={profileInput.email} name="email" className="form-control rounded-pill" placeholder="ex: myname@example.com" />
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-md-2">
                    <label htmlFor className="form-label">Address</label>
                  </div>
                  <div className="col-md-5">
                    <input type="text" required onChange={handleInput} value={profileInput.address} name="address" className="form-control rounded-pill" placeholder="Street Address" />
                  </div>
                </div>
                {/* phone number */}
                <div className="row align-items-center mt-4 mt-md-0">
                  <div className="col-md-2">
                    <label htmlFor className="form-label">Phone Number</label>
                  </div>
                  <div className="col-md-5">
                    <input type="text" required className="form-control rounded-pill" value={profileInput.phone} name="phone" onChange={handleInput} />
                  </div>
                </div>
                {/* Order Note */}
                <div className="row align-items-center mt-4 mt-md-0">
                  <div className="col-md-2">
                    <label htmlFor className="form-label">Order Note</label>
                  </div>
                  <div className="col-md-5">
                    <textarea className="form-control" required onChange={handleInput} name="order_note" id="exampleFormControlTextarea3" rows={5} defaultValue={""} />
                  </div>
                </div>
                {/* register button */}
                <div className="row align-items-center">
                  <div className="col-12 text-center">
                    <button type="submit" className="btn rounded-pill text-uppercase">Next</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default BookingInformation