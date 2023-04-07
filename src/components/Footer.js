import React from 'react'
import logo from '../image/Logo2.png'
const Footer = () => {
  return (
    <>
       <div className="footer px-xl-5 px-lg-2 pt-xl-5">
        <div className="container-fluid">
          <div className="row mb-5 gy-4 gy-md-5 gy-lg-0 justify-content-center">
            <div className="col-md-4 col-lg-3">
              <a className="navbar-brand" href="index.html">
                <img src={logo} alt="" />
              </a>
              <p className="mt-4 fw-semibold" style={{fontSize: '12px',color:"white"}}>Lorem ipsum dolor, sit amet consectetur elit
                adipi sicing.
                Inven tore, qui optio. Vitae, cum tore
                qui.</p>
              <div className="row px-xl-2">
                <div className="col-12">
                  <a className="btn rounded-5 p-0 m-xl-1" href="/"><i className="fa-brands fa-facebook-f" /></a>
                  <a className="btn rounded-5 p-0 m-xl-1" href="/"><i className="fa-brands fa-instagram" /></a>
                  <a className="btn rounded-5 p-0 m-xl-1" href="/"><i className="fa-brands fa-twitter" /></a>
                  <a className="btn rounded-5 p-0 m-xl-1" href="/"><i className="fa-brands fa-pinterest-p" /></a>
                  <a className="btn rounded-5 p-0 m-xl-1" href="/"><i className="fa-brands fa-linkedin-in" /></a>
                  <a className="btn rounded-5 p-0 m-xl-1" href="/"><i className="fa-brands fa-youtube" /></a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-lg-2">
              <h6 className="fw-bold">About</h6>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="about-us.html" className="text-decoration-none">About Us</a>
                </li>
                <li>
                  <a href="services.html" className="text-decoration-none">Services</a>
                </li>
                <li>
                  <a href="/" className="text-decoration-none">Terms &amp; Conditions</a>
                </li>
                <li>
                  <a href="blog.html" className="text-decoration-none">Our Blogs</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-lg-2">
              <h6 className="fw-bold">Services</h6>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="/" className="text-decoration-none">Help Center</a>
                </li>
                <li>
                  <a href="/" className="text-decoration-none">Money Refund</a>
                </li>
                <li>
                  <a href="/" className="text-decoration-none">Terms &amp; Policy</a>
                </li>
                <li>
                  <a href="/" className="text-decoration-none">Open Dispute</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-lg-2">
              <h6 className="fw-bold">For Users</h6>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="login.html" className="text-decoration-none">User Login</a>
                </li>
                <li>
                  <a href="register.html" className="text-decoration-none">User Registration</a>
                </li>
                <li>
                  <a href="/" className="text-decoration-none">Account Setting</a>
                </li>
                <li>
                  <a href="/" className="text-decoration-none">My Orders</a>
                </li>
              </ul>
            </div>
            <div className="col-md-5 col-lg-3 text-center">
              <h3 className="fs-5 fw-bold">Sign Up For Our Newsletter:</h3>
              <form>
                <input type="email" className="form-control rounded-pill border-dark border-2 my-3" placeholder="Email Address" />
              </form>
              {/* <div className="row align-items-center gap-2 mt-4 justify-content-center">
                <div className="col-auto rounded-pill px-1 py-2 text-start" style={{backgroundColor: '#000000'}}>
                  <a href="/" className="text-decoration-none">
                    <div className="row  justify-content-center">
                      <div className="col-3">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={38} height={38} viewBox="0 0 46 46" style={{fill: '#ffffff'}}>
                          <path fill="#4db6ac" d="M7.705,4.043C7.292,4.15,7,4.507,7,5.121c0,1.802,0,18.795,0,18.795S7,42.28,7,43.091c0,0.446,0.197,0.745,0.5,0.856l20.181-20.064L7.705,4.043z">
                          </path>
                          <path fill="#dce775" d="M33.237,18.36l-8.307-4.796c0,0-15.245-8.803-16.141-9.32C8.401,4.02,8.019,3.961,7.705,4.043l19.977,19.84L33.237,18.36z">
                          </path>
                          <path fill="#d32f2f" d="M8.417,43.802c0.532-0.308,15.284-8.825,24.865-14.357l-5.601-5.562L7.5,43.947C7.748,44.038,8.066,44.004,8.417,43.802z">
                          </path>
                          <path fill="#fbc02d" d="M41.398,23.071c-0.796-0.429-8.1-4.676-8.1-4.676l-0.061-0.035l-5.556,5.523l5.601,5.562c4.432-2.559,7.761-4.48,8.059-4.653C42.285,24.248,42.194,23.5,41.398,23.071z">
                          </path>
                        </svg>
                      </div>
                      <div className="col-9 pe-0">
                        <p className="mb-0 text-white" style={{fontSize: '10px'}}>Available on the
                          <br /><span className="fw-bold text-white" style={{fontSize: '15px'}}>Google
                            Play</span></p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-auto rounded-pill px-1 py-2 text-start" style={{backgroundColor: '#000000'}}>
                  <a href="/" className="text-decoration-none">
                    <div className="row align-items-center justify-content-center">
                      <div className="col-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width={38} height={38} fill="#ffffff" className="bi bi-apple" viewBox="0 0 20 20">
                          <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                          <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                        </svg>
                      </div>
                      <div className="col-9 pe-0">
                        <p className="mb-0 text-white" style={{fontSize: '10px'}}>Available on the
                          <br /><span className="fw-bold text-white" style={{fontSize: '15px'}}>App
                            Store</span></p>
                      </div>
                    </div>
                  </a>
                </div>
              </div> */}
            </div>
          </div>
          <div className="row border-top py-3 justify-content-between align-items-center">
            <div className="col-md-6 col-lg-6 col-xl-5 text-md-start text-center">
              <p className="text-secondary" style={{fontSize: '13px'}}>Copyright ©2022. All Rights Reserved By Nask Studio.</p>
            </div>
            <div className="col-md-6 col-lg-4 text-md-end text-center">
              <a href="/"><img src="images/jazzcash.png" alt="" className="img-fluid mx-xl-1" width="50px;" /></a>
              <a href="/"><img src="images/Easypaisa.jpg" alt="" className="img-fluid mx-xl-1" width="50px;" /></a>
              <a href="/"><img src="images/bank-transfer-2.png" alt="" className="img-fluid mx-xl-1" width="50px;" /></a>
              <a href="/"><img src="images/mastercard-png-6954.png" alt="" className="img-fluid mx-xl-1" width="50px;" /></a>
              <a href="/"><img src="images/paypal.png" alt="" className="img-fluid mx-xl-1" width="50px;" /></a>
            </div>
          </div>
        </div>
      </div> 
    </>
  )
}

export default Footer