import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import '../index.css';
import OurServicesNav from './OurServicesNav';
import logo from '../image/Group2.png'
const Navbar = () => {
    const loggedInUser = localStorage.getItem("auth");
    const [cross, setcross] = useState(false)
    const navigate = useNavigate();
    function logout() {
        localStorage.removeItem('auth');
        navigate('/');
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg ps-lg-3">
                <div className="container-fluid px-lg-2 px-xl-5 p-2">

                    <Link className="navbar-brand" to="/" >
                        <img src={logo} alt="" />
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse mt-2 mt-lg-0" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item px-1">
                                <Link to="/" className="nav-link rounded-pill px-2 py-lg-1 px-xl-3"> Home</Link>
                            </li>
                            <li className="nav-item px-1">
                                <Link className="nav-link rounded-pill px-2 py-lg-1 px-xl-3" to="/about">About Us</Link>
                            </li>

                            <OurServicesNav />
                            <li className="nav-item px-1">
                                <Link className="nav-link rounded-pill px-2 py-lg-1 px-xl-3" to="/blog">Blog</Link>
                            </li>
                            <li className="nav-item px-1">
                                <Link className="nav-link rounded-pill px-2 py-lg-1 px-xl-3" to="/pricing">Pricing</Link>
                            </li>
                            <li className="nav-item px-1">
                                <Link className="nav-link rounded-pill px-2 py-lg-1 px-xl-3" to="/contact">Contact</Link>
                            </li>
                            {!loggedInUser ? (
                                <li className="nav-item border-2 border-end px-1">
                                    <Link className="nav-link rounded-pill px-2 py-lg-1 px-xl-3 d-flex" to="/login"><i
                                        className="bi bi-person-circle pe-2"></i>
                                        Login</Link>
                                </li>
                            ) : (
                                <li className="nav-item px-1">
                                    <Link className="nav-link rounded-pill px-2 py-lg-1 px-xl-3" to="/user-dashboard">Dashboard</Link>
                                </li>
                            )}
                            {!loggedInUser ? (
                                <li className="nav-item px-1">
                                    <Link className="nav-link rounded-pill px-2 py-lg-1 px-xl-3" to="/register">Register</Link>
                                </li>
                            ) : (
                                <li className="nav-item px-1">
                                    <Link onClick={() => logout()} className="nav-link rounded-pill px-2 py-lg-1 px-xl-3" to="/user-dashboard">Logout</Link>
                                </li>

                            )}
                            <li className="nav-item px-1">
                                <button onClick={() => setcross(true)} className="nav-link rounded-pill px-2 py-lg-1 px-xl-3 nav_btn">GET A QUOTE</button>
                            </li>
                        </ul>
                        <div style={{ right: cross ? "0%" : "-380px" }} className='get_a_quiet'>
                            <button className='cross_btn' onClick={() => setcross(false)}>  <i class="fa-solid fa-x"></i></button>
                            <div className="col-md-12">
                                <h1 className="mb-4">Create your own customized package</h1>
                            </div>
                            <div className="col-md-11 pe-lg-11 m-auto">
                                <form>
                                    <div className="mb-3">
                                        <input type="text" className="form-control" placeholder="Full Name" />
                                    </div>
                                    <div className="mb-3">
                                        <input type="email" className="form-control" placeholder="Your Email" />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" className="form-control" placeholder="Your Budget" />
                                    </div>
                                    <div className="mb-3">
                                        <select className="form-control" placeholder="Your Email">
                                            <option>select Your Custom Package</option>
                                            <option>Photography</option>
                                            <option>Videography</option>
                                            <option>Models</option>
                                            <option>Photographer</option>
                                            <option>Stylist</option>
                                            <option>Creative director</option>

                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <textarea style={{ borderRadius: "20px", height: "20vh" }} aut className="form-control" rows={7} placeholder="Message" defaultValue={""} />
                                    </div>
                                    <div className="mb-3">
                                        <button type="submit" className="btn w-100">SUBMIT</button>
                                        <div id='iner_footer_get_quiet' className='w-4/12  mt-5  d-flex flex-wrap justify-content-between align-items-center'>
                                            <div className="side_bar_i col-12">
                                                <a className="btn rounded-5 p-0 m-xl-1" href="/"><i className="fa-brands fa-facebook-f" /></a>
                                                <a className="btn rounded-5 p-0 m-xl-1" href="/"><i className="fa-brands fa-instagram" /></a>
                                                <a className="btn rounded-5 p-0 m-xl-1" href="/"><i className="fa-brands fa-twitter" /></a>
                                                <a className="btn rounded-5 p-0 m-xl-1" href="/"><i className="fa-brands fa-pinterest-p" /></a>
                                                <a className="btn rounded-5 p-0 m-xl-1" href="/"><i className="fa-brands fa-linkedin-in" /></a>
                                                <a className="btn rounded-5 p-0 m-xl-1" href="/"><i className="fa-brands fa-youtube" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar