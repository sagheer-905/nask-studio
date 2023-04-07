import React from "react";
import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import BlogDetail from './pages/BlogDetail';
import ServiceDetails from './pages/ServiceDetails';
import Vendor from './pages/Vendor';
import VendorProfile from './pages/VendorProfile';
import Blog from './pages/Blog';
import PortfolioDetails from './pages/PortfolioDetails';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Footer from './components/Footer';
import UserDashboard from "./pages/UserDashboard";
import UserProfile from "./pages/UserProfile";
import ChangePassword from "./pages/ChangePassword";
import UserMyOrders from "./pages/UserMyOrders";
import UserMyTickets from "./pages/UserMyTickets";
import OrderDetails from "./pages/OrderDetails";
import CreateTicket from "./pages/CreateTicket";
import BookingInformation from "./pages/BookingInformation";
import OrderConfirmation from "./pages/OrderConfirmation";
import VerifyeEmail from "./pages/VerifyeEmail";
import Pricing from "./pages/Pricing";


// import axios from 'axios';

// axios.defaults.baseURL = "https://nask.1stbusines.com";
// axios.defaults.headers.post['Content-Type'] = 'application/json';
// axios.defaults.headers.post['Accept'] = 'application/json';
// axios.defaults.withCredentials = true;


function App() {

  return (
      <>
        <Router>
            {/* <Navbar /> */}

                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/about" element={<About />} />
                  <Route  path="/services/:id" element={<Services />} />
                  <Route path="/service-details" element={<ServiceDetails />} />
                  <Route exact path="/vendor" element={<Vendor />} />
                  <Route path="/vandor-profiles/:id" element={<VendorProfile />} />
                  <Route exact path="/portfolio" element={<Portfolio />} />
                  <Route  path="/portfolio-details/:id" element={<PortfolioDetails />} />
                  <Route exact path="/blog" element={<Blog />} />
                  <Route path="/blog-details/:id" element={<BlogDetail />} />
                  <Route exact path="/contact" element={<Contact />} />
                  <Route exact path="/pricing" element={<Pricing/>} />
                  <Route exact path="/login" element={<Login/>} />
                  <Route exact path="/register" element={<Register />} />
                  <Route exact path="/user-dashboard" element={<UserDashboard />} />
                  <Route exact path="/user-profile" element={<UserProfile />} />
                  <Route exact path="/change-password" element={<ChangePassword />} />
                  <Route exact path="/user-my-orders" element={<UserMyOrders />} />
                  <Route exact path="/user-support-tickets" element={<UserMyTickets />} />
                  <Route path ="/view-order-details/:id" element={<OrderDetails />} />
                  <Route exact path="/create-ticket" element={<CreateTicket />} />
                  <Route path="/booking/:id/:service_id" element={<BookingInformation />} />
                  <Route exact path="/confirmation/" element={<OrderConfirmation />} />
                  <Route exact path="/verification/" element={<VerifyeEmail />} />
                  <Route path='*' element={<Home />} />
                </Routes>

            <Footer />
        </Router>
        
      </>
  );
}

export default App;

