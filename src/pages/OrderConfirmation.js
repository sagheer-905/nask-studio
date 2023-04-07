import React , { useEffect,useState }   from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const OrderConfirmation = () => {
    const navigate = useNavigate();
    const loggedInUser = localStorage.getItem("auth");
    const service_id = localStorage.getItem("service_id");
    if (!loggedInUser || !service_id) {
        navigate('/');
    } 

    const [registerInput, setRegister] = useState({
      name : '',
      email : '',
      phone : '',
      address : '',
      order_note : '',
      seller_id : '',
      service_id : '',
      package_fee : 0,
      total : 0,
      });

      const handleInput = (e) => {
        e.persist();
        setRegister({...registerInput, [e.target.name]: e.target.value });
    }

    const data = {
        name : localStorage.getItem("name"),
        email : localStorage.getItem("email"),
        phone : localStorage.getItem("phone"),
        address : localStorage.getItem("address"),
        order_note : localStorage.getItem("order_note"),
        seller_id : localStorage.getItem("seller_id"),
        service_id : localStorage.getItem("service_id"),
        package_fee : registerInput.package_fee,
        total :  registerInput.total,

    };
    
    const appToken = 'Bearer '+localStorage.getItem("auth");

    const requestOptions = {
        headers: { 'Authorization': appToken
            }
        };

    const { file, setFile } = useState({
            file: null,
        });

 
      const orderSubmit = (e) => {
        e.preventDefault();
         axios.post('https://nask.1stbusines.com/api/v1/service/order', data , requestOptions
          ).then(res => {
              
              if(res.status === 201)
              {  
                // console.log(res.status);
                
                axios.post('https://nask.1stbusines.com/api/v1/image/upload', file , requestOptions
                ).then(res => {

                    swal("success","Order has been placed","success");
                    navigate('/services/all');
                }); 
                
                
                 
              }
             
          }).catch(error => {
            if (error.response) {
              
              console.log(error.response.data);
            }
          }); 
        }


        const [service, setService]=useState([]);

        useEffect(() => {
            const getData = async () => {
            const request = await fetch(`https://nask.1stbusines.com/api/v1/service-details/${service_id}`);
            const result = await request.json();
            setService(await result);
            console.log(result)
            }
            getData()
             // eslint-disable-next-line
        }, [])
        
  return (
    <>
      <div className="register-form border-top border-bottom py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-11 col-lg-10 col-xl-9 py-sm-5 ps-sm-3 pe-sm-5 rounded-4 py-5 px-3">
              <h4 className="fw-semibold text-center mb-5">Confirmation</h4>
              {/* form */}
              <form className="px-xl-4" onSubmit={orderSubmit}  method='POST'>
                {/* full name */}
                <div className="row">
                  <div className="col-lg-3">
                    <img src={service?.service_image?.img_url} alt='...' height="300px"  />
                  </div>
                  <div className="col-lg-9">
                    <h4>{service?.service_details?.title}</h4>
                    <p><b>Included Service</b></p>

                    {
                        service?.service_benifits?.map((items) =>
                            <p>{items.benifits}</p>
                       
                        )
                    }
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <h5>Booking Infrmation</h5>
                    <p><b>Full Name</b>: {data?.name}</p>
                    <p><b>Email</b>: {data?.email}</p>
                    <p><b>Phone</b>: {data?.phone}</p>
                    <p><b>Address</b>: {data?.address}</p>
                    <p><b>order Note</b>: {localStorage.getItem("order_note")} </p>
                  </div>
                  <div className="col-lg-6">
                    <h5>Booking Summary</h5>
                    <p><b>Delivery Days</b>: {service?.service_details?.delivery_days}</p>
                    <p><b>Service Fee</b>: {service?.service_details?.price}</p>
                    <p><b>Extra Service</b>: {service?.service_details?.additional_service_price}</p>
                    <p><b>Tax</b>: {service?.service_details?.tax}</p>
                    <p><b>Total </b>:  </p>
                    <input type="hidden" value={service?.service_details?.price} name='package_fee' onChange={handleInput} />
                    <input type="hidden" value={service?.service_details?.additional_service_price} name='additional_service_price' />
                    <input type="hidden" value={service?.service_details?.price+service?.service_details?.additional_service_price} name='total' onChange={handleInput} />

                    <hr />
                    <p><b>Account Details </b>: Here account details Comes</p>
                    <h5>Upload the Payment Proof</h5>
                    <input type="file" onChange={(e) => setFile("file", e.target.files[0]) } className="form-control rounded-pill" placeholder="Payment Proof" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group form-check">
                      <input type="checkbox" className="form-check-input" id="exampleCheck1" required />
                      <label className="form-check-label" htmlFor="exampleCheck1">I Agree With <a href="#0">Terms and Conditions</a></label>
                    </div>
                  </div>
                </div>
                {/* register button */}
                <div className="row align-items-center">
                  <div className="col-12 text-center">
                    <button type="submit" className="btn rounded-pill text-uppercase"> Place My Order</button>
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

export default OrderConfirmation