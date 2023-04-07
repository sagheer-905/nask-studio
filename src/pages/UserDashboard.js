import React from 'react'
import UserPanelNav from '../components/UserPanelNav'
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
    const navigate = useNavigate();
    const loggedInUser = localStorage.getItem("auth");
    if (!loggedInUser) {
        navigate('/login');
    }

  if (loggedInUser) {
 
  return (
    <>
       <div className="container">
            <div className="row" style={{margin: '75px 0px'}}>
            
            <UserPanelNav/>

            <div className="col-lg-9 right-bar">
                <h3>Welcome $username</h3>
                <div className="user-dash" style={{marginBottom: '70px'}}>
                <div className="row">
                    <div className="col-lg-4">
                    <div className="card">
                        <i className="fa fa-home" />
                        <h5>Total Bookings 10</h5>
                    </div>
                    </div>
                    <div className="col-lg-4">
                    <div className="card">
                        <i className="fa fa-home" />
                        <h5>Pending Booking 10</h5>
                    </div>
                    </div>
                    <div className="col-lg-4">
                    <div className="card">
                        <i className="fa fa-home" />
                        <h5>Total Tickets 10</h5>
                    </div>
                    </div>
                </div>
                </div>
                {/* Table Start */}
                <h4>Last 10 Orders</h4><table className="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Seller Name</th>
                    <th scope="col">Status</th>
                    <th scope="col">Location</th>
                    <th scope="col">Price</th>
                    <th scope="col">View</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Ashiq Muhamamd</td>
                    <td>Completed</td>
                    <td>Lahore</td>
                    <td>10,000</td>
                    <td>
                        <i className="fa fa-eye" />
                    </td>
                    </tr>
                    <tr>
                    <th scope="row">1</th>
                    <td>Ashiq Muhamamd</td>
                    <td>Completed</td>
                    <td>Lahore</td>
                    <td>10,000</td>
                    <td>
                        <i className="fa fa-eye" />
                    </td>
                    </tr>
                    <tr>
                    <th scope="row">1</th>
                    <td>Ashiq Muhamamd</td>
                    <td>Completed</td>
                    <td>Lahore</td>
                    <td>10,000</td>
                    <td>
                        <i className="fa fa-eye" />
                    </td>
                    </tr>
                </tbody>
                </table>
                {/* TIcket Table Start */}
                <h4>Last 10 Tickets</h4><table className="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Ticket ID</th>
                    <th scope="col">Message</th>
                    <th scope="col">View</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>14563</td>
                    <td>This is a test Reply of the Ticket</td>
                    <td>
                        <i className="fa fa-eye" style={{marginLeft: '50px'}} />
                    </td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
        </div>
    </>
  )
   }
}

export default UserDashboard
