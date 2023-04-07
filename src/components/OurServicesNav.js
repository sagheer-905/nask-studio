import React, { useEffect} from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../constants";
import './dropdown.css'
const OurServicesNav = () => {

    useEffect(()=>{
      fetch(`${BASE_URL}/category`).then((result)=>{
        result.json().then((resp)=>{

        })
      })
    },[]);

  return (
    <>
       <li id="drop" className="nav-item px-1">
            <Link className="nav-link rounded-pill px-2 py-lg-1 px-xl-3" to="/services/all">
                Our Services
                <i className="fa-solid fa-angle-down"></i>
            </Link>

            <ul class="dropdown">
                      <div className='dropdown_box'>
                        <h5>Photography</h5>
                        <div className='icon_img'>

                          <Link to='/webdevelopment'>

                            <p>Wedding shoot</p>
                          </Link>
                        </div>
                        <div className='icon_img'>

                          <Link to='/wordpress'>

                            <p>Birthday Shoot</p>
                          </Link>
                        </div>
                        <div className='icon_img'>
                          <Link to='/wordpress'>
                            <p>Brand Shoot</p>
                          </Link>
                        </div>
                    

                      </div>
                      <div className='dropdown_box'>
                        <h5>Videography</h5>
                        <div className='icon_img'>
                          <Link to='/uiuxdeigner'>
                            <p>Wedding Videography</p>
                          </Link>
                        </div>
                      </div>
                      <div className='dropdown_box'>
                        <h5>Creative director</h5>
                        <div className='icon_img'>
                          <Link to="/finacialapperal">
                          <p>Film Shoot Director</p>
                          </Link>
                        </div>
                       
                       
                      </div>
                      <div className='dropdown_box'>
                        <h5>Models</h5>
                        <div className='icon_img'>

                          <p>Fashion Model</p>
                        </div>
               
              
                       
                      </div>
                      <div className='dropdown_box'>
                        <h5>Photographer</h5>
                        <div className='icon_img'>
                          <Link to="/finacialapperal">
                          <p>Model Shoot Photographer</p>
                          </Link>
                        </div>
                        <div className='icon_img'>
                          <Link to='/budgetprepare'>
                          <p>Brand Shoot Photographer</p>
                          </Link>
                        </div> 
                       
                      </div>
                      <div className='dropdown_box'>
                        <h5>Artist</h5>
                        <div className='icon_img'>
                          <Link to="/finacialapperal">
                          <p>Makeup Artist</p>
                          </Link>
                        </div>
                        <div className='icon_img'>
                          <Link to='/budgetprepare'>
                          <p>Hair Stylist Artist </p>
                          </Link>
                        </div> <div className='icon_img'>
                          <Link to='/vatcalculation'>
                          <p>Music Artist</p>
                          </Link>
                        </div>
                      
                      </div>
                  
             

                    </ul>
        </li>
    </>
  )
}

export default OurServicesNav
