import React, { useEffect, useState } from "react";
import { BASE_URL } from '../constants'
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';

const PortfolioDetails = () => {

    const [data, setData] = useState([]);
    const { id } = useParams();

    const getData = async () => {
      const request = await fetch(`${BASE_URL}/album-details/${id}`);
      const result = await request.json();
      setData(result);
      console.log(result)
    }

    useEffect(() => {
      getData()
       // eslint-disable-next-line
    },[id])
  
    let itemList = [];
    data?.service_benifits?.forEach((item, index) => {
      itemList.push(<div key={index} className="row ">
        <div className="col-12 pe-0 attri">
          <h4><i className="fa fa-check" /> {item.benifits}</h4>
        </div>
      </div>)
    })
  
    let includeList = [];
    data?.service_includes?.forEach((item, index) => {
      includeList.push(<div key={index} className="row ">
        <div className="col-12 pe-0 attri">
          <h4><i className="fa fa-check" /> {item.include_service_title}</h4>
        </div>
      </div>)
    })
  
  


  return (
    <>
        <div className="container">
            <div className="row pt-5 detailMainCard">
              {/*-------- Blog Content Section Start -------*/}
              <div className="col-md-8  blog-content">
                <img src={ data?.album_image?.img_url } alt="....." className="img-fluid" />
              </div>
              {/*---- Blog detail passage Start -----*/}
                <div className="col-md-4 blog-passage">
                  <h4 className="lh-base fw-semibold"> { data?.data?.title } </h4>
                  <p className="lh-base pt-2">
                  {data?.data?.description} </p>
                  <p className="p-3 Tags"><span className="fw-semibold">{ data?.data?.type } </span></p>
                  
                </div>
              {/*---- Blog detail passage Start -----*/}
           
              {/* Blog Widget Section End  */}
            </div>
            <div className="row-gallery ">
                    <div className="gallery-colum">
                        {parse(data?.gallery??'')}
                    </div>
              </div>
        </div>
    </>
  )
}

export default PortfolioDetails
