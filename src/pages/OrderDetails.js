import React , { useEffect,useState } from 'react'
import UserPanelNav from '../components/UserPanelNav'
import { useParams } from 'react-router-dom';

const OrderDetails = () => {
  const appToken = 'Bearer '+localStorage.getItem("auth");
  const [data, setData]=useState([]);
  const {id} = useParams();
  const requestOptions = {
  method: 'POST',
  headers: { 'Authorization': appToken
      }
  };

  useEffect(()=>{
    fetch("https://nask.1stbusines.com/api/v1/user/my-orders/"+id,requestOptions).then((result)=>{
      result.json().then((resp)=>{
        setData(resp)
        })
    })
     // eslint-disable-next-line
  },[]);

    console.log(data);
  return (
    <>
      <div className="container">
        <div className="row" style={{margin: '75px 0px'}}>
          {/* Right Side of the Dashboard */}
            
          <UserPanelNav />
          <div className="col-lg-9 right-bar">
            {/* Table Start */}
            <h4>Order Details</h4>

            <div className="col-lg-9 right-bar">
                 <h3>#{data?.orderInfo?.id} Order Details </h3>
                 <div className="user-dash" >
                    <div className="row">
                      <h4>Seller Details</h4>
                         <div className="col-lg-2">
                             <div className="card">
                                 <h6>Seller Name</h6>
                                 <p>{data?.orderInfo?.name}</p>
                             </div>
                         </div>
                         <div className="col-lg-2">
                             <div className="card">
                                 <h6>Seller Email</h6>
                                 <p>{data?.orderInfo?.email}</p>
                             </div>
                         </div>
                         <div className="col-lg-2">
                             <div className="card">
                                 <h6>Seller Phone</h6>
                                 <p>{data?.orderInfo?.phone}</p>
                             </div>
                         </div>
                         <div className="col-lg-2">
                             <div className="card">
                                 <h6>City</h6>
                                 <p>{data?.orderInfo?.city}</p>
                             </div>
                         </div>
                         <div className="col-lg-2">
                             <div className="card">
                                 <h6>Area</h6>
                                 <p>{data?.orderInfo?.area}</p>
                             </div>
                         </div>
                         <div className="col-lg-2">
                             <div className="card">
                                 <h6>Address</h6>
                                 <p>{data?.orderInfo?.address}</p>
                             </div>
                         </div>
                     </div>

                     <div className="row" style={{margin: '30px'}}>
                      <h4>Service Details</h4>
                         <div className="col-lg-3">
                             <div className="card">
                                 <h6>Service Name</h6>
                                 <p>{data?.orderInfo?.seller_details?.name}</p>
                             </div>
                         </div>
                         <div className="col-lg-3">
                             <div className="card">
                                 <h6>Service Type</h6>
                                 <p>{data?.orderInfo?.seller_details?.type}</p>
                             </div>
                         </div>
                         <div className="col-lg-2">
                             <div className="card">
                                 <h6>Price</h6>
                                 <p>{data?.orderInfo?.seller_details?.price}</p>
                             </div>
                         </div>
                         <div className="col-lg-2">
                             <div className="card">
                                 <h6>Created At</h6>
                                 <p>{data?.orderInfo?.seller_details?.created_at}</p>
                             </div>
                         </div>
                         <div className="col-lg-2">
                             <div className="card">
                                 <h6>Completed At</h6>
                                 <p>8-16-22/2:00PM</p>
                             </div>
                         </div>
                      </div>
                         <div className="row" style={{margin: '75px'}}>
                           <div className="col-lg-4">
                             <div className="card">
                                 <h6>Order Status</h6>
                                 <p>{data?.orderInfo?.seller_details?.status}</p>
                             </div>
                          </div>

                           <div className="col-lg-4">
                               <div className="card">
                                   <h6>Payment Method</h6>
                                   <p>{data?.orderInfo?.seller_details?.status}</p>
                               </div>
                           </div>

                           <div className="col-lg-4">
                               <div className="card">
                                   <h6>Tax</h6>
                                   <p>{data?.orderInfo?.seller_details?.tax}</p>
                               </div>
                           </div>

                          
                         </div>
                      
                     </div>

                 </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderDetails
