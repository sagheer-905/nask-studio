import React, { useEffect, useState } from 'react'
import BannerSection from '../components/AboutSection/BannerSection'
import AboutSection from '../components/AboutSection/AboutSection'
import { BASE_URL } from '../constants';
import { Loader } from '../components/Loader';
const About = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true)
    fetch(`${BASE_URL}/about-data`).then((result) => {
        result.json().then((resp) => {
            setLoader(false)
            setData(resp)
        })
    })
}, []);
  return (
    <>
    {loader && <Loader/>}
     <BannerSection data={data} />
     <AboutSection  data={data}/>
    </>

  )
}

export default About