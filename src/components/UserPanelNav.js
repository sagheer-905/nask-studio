import React from 'react'
import { Link , useNavigate} from "react-router-dom";

const UserPanelNav = () => {
    const navigate = useNavigate();
    function logout (){
        localStorage.removeItem('auth');
        navigate('/');
      }

  return (
    <>
        <div className="col-lg-3">
            <div className="sidebar">
                <div className="user-img">
                    <img src="images/portfolio-page/outdoor-1.png" alt="" className="img-fluid" />
                </div>
                <h4>Dashboard</h4>
                <ul>
                    <li className="active"><Link to="/user-dashboard"><i className="fa fa-home" /> Dashboard </Link></li>
                    <li><Link to="/user-my-orders"><i className="fa fa-shopping-cart" /> My Orders </Link></li>
                    <li><Link to="/user-support-tickets"><i className="fa fa-ticket" /> Support Tickets </Link></li>
                    <li><Link to="/user-profile"><i className="fa fa-user-circle-o" /> Profile </Link></li>
                    <li><Link to="/change-password"><i className="fa fa-eye" /> Change Password </Link></li>
                    <li><Link onClick={()=>logout()} ><i className="fa fa-sign-out" /> Logout </Link></li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default UserPanelNav
