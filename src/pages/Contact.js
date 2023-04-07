import React, { useEffect, useState } from 'react'
import ContentSection from '../components/ContactSection/ContentSection'
import SignUpSection from '../components/ContactSection/SignUpSection'
import { BASE_URL } from '../constants';
import { Loader } from '../components/Loader';
import BannerSection from '../components/ContactSection/BannerSection';
const Contact = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true)
    fetch(`${BASE_URL}/contactus-data`).then((result) => {
        result.json().then((resp) => {
            setLoader(false)
            setData(resp)
        })
    })
}, []);
  return (
    <>
     {loader && <Loader/>}
     <BannerSection/>
      <ContentSection data={data} />
      <SignUpSection data={data}/>
    </>
  )
}

export default Contact