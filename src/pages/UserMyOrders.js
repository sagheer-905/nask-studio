import React , { useEffect,useState } from 'react'
import UserPanelNav from '../components/UserPanelNav'
import { Link } from "react-router-dom";

const UserMyOrders = () => {
  const appToken = 'Bearer '+localStorage.getItem("auth");
  const [data, setData]=useState([])
  const requestOptions = {
  method: 'POST',
  headers: { 'Authorization': appToken
      }
  };

  useEffect(()=>{
    fetch("https://nask.1stbusines.com/api/v1/user/my-orders",requestOptions).then((result)=>{
      result.json().then((resp)=>{
        setData(resp)
        })
    })
     // eslint-disable-next-line
  },[]);

  return (
    <>
      <div className="container">
        <div className="row" style={{margin: '75px 0px'}}>
          {/* Right Side of the Dashboard */}
            
          <UserPanelNav />
          <div className="col-lg-9 right-bar">
            {/* Table Start */}
            <h4>All Orders</h4><table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Seller</th>
                  <th scope="col">Services Name</th>
                  <th scope="col">Date</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                  <th scope="col">Type</th>
                  <th scope="col">Complete Request</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
              {
                data?.my_orders?.map((items)=>
                <tr>
                  <th scope="row">{items.id}</th>
                  <td>{items.name} </td>
                  <td>{items.service_id} </td>
                  <td>{items.created_at}</td>
                  <td>{items.total}</td>
                  <td>{items.status}</td>
                  <td>10,000</td>
                  <td>
                    <button className="btn btn-primary">Completed</button>
                  </td>
                  <td>
                    
                    <Link to={`/view-order-details/${items.id}`} className="navbar-brand">
                    <i className="fa fa-eye" />
                     </Link>
                    {/* <i className="fa fa-print" /> */}
                  </td>
                </tr>
                )
              }
             
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserMyOrders
