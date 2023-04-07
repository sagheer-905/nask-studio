import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'

import { BASE_URL } from '../../constants'
import { Loader } from '../Loader'
import img2 from '../../image/OurServices.webp'
import Navbar from '../Navbar'
import img from '../../image/Path13.jpg'

const BannerSection = () => {
  const [category, setCategory] = useState([])
  const [sub, setSub] = useState([])
  const [loader, setLoader] = useState(false);
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const subCategoryId = searchParams.get("subCategoryId");
  const navigate = useNavigate();
  useEffect(() => {
    setLoader(true)
    fetch(`${BASE_URL}/category`).then((result) => {
      result.json().then((resp) => {
        setLoader(false)
        setCategory(resp)
      })
    })
  }, []);

  const [searchInput, setRegister] = useState({
    category: '',
    subcategory: '',
  });
  // const [selected , setSelected] = useState();

  function search() {

    // console.log(selected)

    if (searchInput.subcategory) {
      navigate(`/services/${searchInput.category}?subCategoryId=${searchInput.subcategory}`);
    }else{
      navigate(`/services/${searchInput.category}`);
    }

  }

  const handleChange = event => {

    if (event.target.name == "subCategory") {
      // setSelected(event.target.value);
      setRegister({ category: searchInput.category, subcategory: event.target.value })
    }

    if (event.target.name == "category" && event.target.value != 'true') {
      setRegister({ category: event.target.value })
      getSubCategory(event.target.value);
    }

  };

  function getSubCategory(category_id) {
    setLoader(true)
    fetch(`${BASE_URL}/category/sub-category/${category_id}`).then((result) => {
      result.json().then((resp) => {
        setLoader(false)
        setSub(resp)
      })
    })


  }
  return (
    <>
   
      {/* <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/images/service-banner/main-banner.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption container px-0">
              <div className="row justify-content-center gap-3 gap-md-0">
                <div className="col-5 col-md-2">
                  <select required className="form-select border-0" aria-label="Default select example" name="category" onChange={handleChange} >
                    <option value=''>Select Category</option>
                    {
                      category?.map((items, index) =>
                        <option value={items.id} key={index} selected={items.id == id ?true : false}>{items.name}</option>

                      )
                    }
                  </select>
                </div>

                <div className="col-5 col-md-2">
                  <select className="form-select border-0" aria-label="Default select example" name='subCategory' onChange={handleChange} >
                    <option value=''>Select Sub Category</option>
                    {
                      sub.sub_categories?.map((items, index) =>
                        <option value={items.id} key={index} selected={items.id == subCategoryId ?true :false}>{items.name}</option>

                      )
                    }
                  </select>
                </div>

                <div className="col-5 col-md-2">
                  <button className="btn mb-md-3 w-100 rounded-pill" onClick={() => search()}>Find Services</button>
                </div>



              </div>
            </div>
            <div className="banner-content">
              <h1 className="text-white mb-md-3">Our Services</h1>
              <p className="text-white">High-quality photography is critical in capturing and engaging<br />the
                attention of your online
                audience. Professionallly shot, recent<br />photosof your team and location help you build
                trust
                online.</p>
            </div>
          </div>
        </div>
      </div> */}
       <div className="position-relative" style={{height: '600px'}}>
                <div className="banner" style={{ backgroundImage: `url(${img})`, height: '500px', backgroundSize: 'cover' }} >
                    <Navbar/>
                    <div className="container"  style={{ backgroundImage: `url(${img2})`, backgroundSize: 'cover' }}>
                        <div className="row gap-xl-5 align-items-center">
                            <div className="col-12 col-md-7 col-xl-6 pt-5">
                            <div className="carousel-caption container px-0">
              {/* <div className="row justify-content-center gap-3 gap-md-0">
                <div className="col-5 col-md-2">
                  <select required className="form-select border-0" aria-label="Default select example" name="category" onChange={handleChange} >
                    <option value=''>Select Category</option>
                    {
                      category?.map((items, index) =>
                        <option value={items.id} key={index} selected={items.id == id ?true : false}>{items.name}</option>

                      )
                    }
                  </select>
                </div>

                <div className="col-5 col-md-2">
                  <select className="form-select border-0" aria-label="Default select example" name='subCategory' onChange={handleChange} >
                    <option value=''>Select Sub Category</option>
                    {
                      sub.sub_categories?.map((items, index) =>
                        <option value={items.id} key={index} selected={items.id == subCategoryId ?true :false}>{items.name}</option>

                      )
                    }
                  </select>
                </div>

                <div className="col-5 col-md-2">
                  <button className="btn mb-md-3 w-100 rounded-pill" onClick={() => search()}>Find Services</button>
                </div>



              </div> */}
            </div>
            <div className="">
              <h1 className="text-white mb-md-3">Our Services</h1>
              <p className="text-white">High-quality photography is critical in capturing and engaging<br />the
                attention of your online
                audience. Professionallly shot, recent<br />photosof your team and location help you build
                trust
                online.</p>
            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default BannerSection