import React, { useState, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import img1 from '../../image/icons/1.svg'
import img2 from '../../image/icons/2.svg'
import img3 from '../../image/icons/3.svg'
import img4 from '../../image/icons/4.svg'
export const Carousel = ({ categories }) => {
  const newData = [

    { id: 24,
       name: 'Creative-director',
        icon: null, 
        mobile_icon: img1, 
       is_featured: 0 },
 
{ id: 25,
   name: 'Makeup-artist',
 icon: null,
  mobile_icon:img2 , 
  is_featured: 0 },

{ id: 26
  , name: 'Models',
   icon: null,
    mobile_icon: img3, 
   is_featured: 0 
  },
 
{ id: 27, 
  name: 'Photographer', 
  icon: null,
   mobile_icon:img4 ,
   is_featured: 0 
  },

{ id: 28,
   name: 'Photography',
    icon: null,
     mobile_icon: img1,
      is_featured: 0 
    },

{ 
  id: 29, 
  name: 'Stylist', 
  icon: null,
   mobile_icon:img2,
    isfeatured: 0 },

{ id: 30,
   name: 'Videography', 
   icon: null,
    mobile_icon: img3,
     is_featured: 0 
    }
    

  ]
  return (
<>

    <OwlCarousel
      className="owl-theme owlSliderRow"
      items={4}
      margin={20}
      lazyLoad={true}
      autoplay={true}
      loop
    >
      {newData?.map((items, index) => {
        return (
          <div className="item sliderItemBox rounded-5" key={index+"item"}>
            <Link className="SliderCardText" to={`/services/${items.id}`}>
              <div
                className="card-body px-1 pt-0 pb-2 text-center"
                style={{ textAlign: "center" }}
              >
                <img
                  src={items.mobile_icon}
                  style={{
                    height: "50px",
                    objectFit: "contain",
                    marginBottom: "15px",
                  }}
                />
       
              </div>
            </Link>
          </div>
        );
      })}
    </OwlCarousel>
  

  </>
  );
};
