
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import BannerSelect from './BannerSelect';
import img from '../../image/Path13.jpg'
import img2 from '../../image/MainBanner.jpg'
import Navbar from '../Navbar'
const Banner = ({data}) => {
    const navigate = useNavigate();
    const [category, setCategory] = useState([])
    
    useEffect(() => {
        if(data?.categories){
            setCategory(data?.categories)
        }
        
    }, [data]);

    const [searchInput, setRegister] = useState({
        category: '',
    });

    const handleInput = (e) => {
        e.persist();
        setRegister({ ...searchInput, [e.target.name]: e.target.value });
    }

    const search = () => {
        if (searchInput.category) {
            navigate('/services/' + searchInput.category);

        }
    }

    return (
        <>
            <div className="position-relative">
                <div className="banner" style={{ backgroundImage: `url(${img})`, height: '600px', backgroundSize: 'cover' }} >
                    <Navbar/>
                    <div className="container"  style={{ backgroundImage: `url(${img2})`, backgroundSize: 'cover' }}>
                        <div className="row gap-xl-5 align-items-center">
                            <div className="col-12 col-md-7 col-xl-6 pt-5">
                               
                                <div className="hederSelectRow">
                                    <div className='SelectsBar'>
                                        <div className="select select-1">
                                        <BannerSelect areas={data?.areas}/>
                                        </div>
                                        <div className=" select select-2">
                                            <select name="category" onChange={handleInput} value={searchInput.category} className="ps-4 ps-lg-2 form-select border-0 bg-transparent rounded-0" aria-label="Default select example" style={{ marginLeft: '10px' }}>
                                                <option >Find Service</option>
                                                {
                                                    data?.categories?.map((items,index) =>
                                                        <option value={items.id} key={index+"box"}>{items.name}</option>
                                                    )
                                                }

                                            </select>
                                        </div>
                                        </div>
                                    <div className="headFrmBtn">
                                        <button type="submit" onClick={search} className="btn rounded-pill" >Submit <i className="bi bi-search border-start ps-2 ms-2 text-white" /></button>
                                    </div>
                                </div>
                                <h3 className='banner_h3'>Hello There!</h3>
                                <h1 className="text-uppercase banner_heading">I'am Martin Dan</h1>
                                <p className="fw-normal banner_pera">I am professional photographar based on New York creating dreamscapes with black, white and shades in-between</p>


                            </div>
                            {/* <div className="col-12 col-md-5 col-xl-5 text-md-start text-center"> <img className="img-fluid" src={data?.home?.bnrimage?.img_url??"images/main/main-banner-2.png"} alt="main-banner" /> </div> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="container multiSliderContainer">
            <Carousel categories={category} />
            </div> */}

        </>
    )

}


export default Banner