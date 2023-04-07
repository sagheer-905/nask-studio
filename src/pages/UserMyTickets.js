import React , { useEffect,useState } from 'react'
import UserPanelNav from '../components/UserPanelNav'
import { Link } from "react-router-dom";

const UserMyTickets = () => {
  const appToken = 'Bearer '+localStorage.getItem("auth");
  const [data, setData]=useState([])
  const requestOptions = {
  method: 'POST',
  headers: { 'Authorization': appToken
      }
  };

  useEffect(()=>{
    fetch("https://nask.1stbusines.com/api/v1/user/support-tickets",requestOptions).then((result)=>{
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
          <Link to="/create-ticket"><i className="fa fa-ticket" /> Create Support Tickets </Link>
            {/* Table Start */}
            <h4>All Tickets</h4><table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Title</th>
                  <th scope="col">Description</th>
                  <th scope="col">Subject</th>
                  <th scope="col">Priority</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
              {
                data?.tickets?.data?.map((items)=>
                <tr>
                  <th scope="row">{items.id}</th>
                  <td>{items.title} </td>
                  <td>{items.description}</td>
                  <td>{items.subject}</td>
                  <td>{items.priority}</td>
                  <td>{items.status}</td>
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

export default UserMyTickets
