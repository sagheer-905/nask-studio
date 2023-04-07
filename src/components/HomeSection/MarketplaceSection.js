import React from 'react'
import Carousel from 'react-elastic-carousel'
const MarketplaceSection = ({data}) => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 3 },
    { width: 1100, itemsToShow: 3 },
    

]
  return (
    <>
         <div className="marketplace mt-md-5 mt-5 mb-md-5">
        <div className="container">
          <h2 className="fw-bold fs-3 mb-3 ">{data?.home?.data?.mrk_title}</h2>
          <p style={{fontSize: '14px',marginTop:"5vh"}}>{data?.home?.data?.mrk_des}</p>
          <Carousel  breakPoints={breakPoints} >
          <div className="market_placeCart">
              <div className="card pt-4 border-0">
                <i className="fa-solid fa-people-group" />
                <div className="card-body">
                  <h5 className="card-title">{data?.home?.data?.mrk_card_title_1}</h5>
                  <p className="card-text" style={{fontSize: '14px'}}>We do not delay our service delivery and take much less time providing solutions for your queries. We have a management team to pre-examine about your order or a query, and then they decide about the final service you need in less time.</p>
                </div>
              </div>
            </div>
            <div className="market_placeCart">
              <div className="card pt-4 border-0">
                <i className="fa-solid fa-users-gear" />
                <div className="card-body">
                  <h5 className="card-title">{data?.home?.data?.mrk_card_title_2}</h5>
                  <p className="card-text" style={{fontSize: '14px'}}>We do not delay our service delivery and take much less time providing solutions for your queries. We have a management team to pre-examine about your order or a query, and then they decide about the final service you need in less time.</p>
                </div>
              </div>
            </div>
            <div className="market_placeCart">
              <div className="card pt-4 border-0">
                <i className="fa-solid fa-magnifying-glass-chart" />
                <div className="card-body">
                  <h5 className="card-title">{data?.home?.data?.mrk_card_title_3}</h5>
                  <p className="card-text" style={{fontSize: '14px'}}>We do not delay our service delivery and take much less time providing solutions for your queries. We have a management team to pre-examine about your order or a query, and then they decide about the final service you need in less time.</p>
                </div>
              </div>
            </div>
            <div className="market_placeCart">
              <div className="card pt-4 border-0">
                <i className="fa-solid fa-box-open" />
                <div className="card-body">
                  <h5 className="card-title">{data?.home?.data?.mrk_card_title_4}</h5>
                  <p className="card-text" style={{fontSize: '14px'}}>We do not delay our service delivery and take much less time providing solutions for your queries. We have a management team to pre-examine about your order or a query, and then they decide about the final service you need in less time.</p>
                </div>
              </div>
            </div>
            <div className="market_placeCart">
              <div className="card pt-4 border-0">
                <i className="fa-solid fa-tty" />
                <div className="card-body">
                  <h5 className="card-title">{data?.home?.data?.mrk_card_title_5}</h5>
                  <p className="card-text" style={{fontSize: '14px'}}>We do not delay our service delivery and take much less time providing solutions for your queries. We have a management team to pre-examine about your order or a query, and then they decide about the final service you need in less time.</p>
                </div>
              </div>
            </div>
            <div className="market_placeCart">
              <div className="card pt-4 border-0">
                <i className="fa-solid fa-bullhorn" />
                <div className="card-body">
                  <h5 className="card-title">{data?.home?.data?.mrk_card_title_6}</h5>
                  <p className="card-text" style={{fontSize: '14px'}}>We do not delay our service delivery and take much less time providing solutions for your queries. We have a management team to pre-examine about your order or a query, and then they decide about the final service you need in less time.</p>
                </div>
              </div>
            </div>
            </Carousel>
        </div>
      </div> 
    </>
  )
}

export default MarketplaceSection