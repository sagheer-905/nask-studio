import React, { useEffect, useState } from 'react'
import Banner from '../components/HomeSection/Banner';
import AboutSection from '../components/HomeSection/AboutSection';
// import BookingSection from '../components/HomeSection/BookingSection';
import SellerSection from '../components/HomeSection/SellerSection';
import MarketplaceSection from '../components/HomeSection/MarketplaceSection';
import SignUpSection from '../components/HomeSection/SignUpSection';
import { BASE_URL } from '../constants';
import { Loader } from '../components/Loader';
import Testimonial from '../components/HomeSection/Testimonial';
const Home = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true)
    fetch(`${BASE_URL}/category?area=true`).then((result) => {
        result.json().then((resp) => {
            setLoader(false)
            setData(resp)
        })
    })
}, []);
  return (
    <>
      {loader && <Loader/>}
      <Banner data={data}/>
      <AboutSection data={data}/>
      {/* <BookingSection data={data}/> */}
      <SellerSection data={data}/>
      <MarketplaceSection data={data}/>
      <SignUpSection data={data} />
      <Testimonial/>
    </>    
  )
}

export default Home;