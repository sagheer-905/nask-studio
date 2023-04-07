import React from 'react'
import img from '../../image/avatar.jpg'
function Testimonial() {
  return (
    <div className='testmonial'>
        <div className='bg_testimonial'>
        <div className='container'>
            <h3>Testimonials</h3>
            <h4>clients Say</h4>
            <div className='testimonial_slider'>
            <div className="container-lg">
  <div className="row">
    <div className="col-sm-12">

      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        {/* Carousel indicators */}
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to={0} className="active" />
          <li data-target="#myCarousel" data-slide-to={1} />
          <li data-target="#myCarousel" data-slide-to={2} />
        </ol>   
        {/* Wrapper for carousel items */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              <div className="col-sm-6">
                <div className="testimonial-wrapper">
                  <div className="testimonial">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante, commodo iacul viverra.</div>
                  <div className="media">
                    <img src={img} className="mr-3" alt="" />
                    <div className="media-body">
                      <div className="overview">
                        <div className="name"><b>Paula Wilson</b></div>
                        <div className="details">Media Analyst / SkyNet</div>
                        <div className="star-rating">
                          <ul className="list-inline">
                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                            <li className="list-inline-item"><i className="fa fa-star-half-o" /></li>
                          </ul>
                        </div>
                      </div>										
                    </div>
                  </div>
                </div>								
              </div>
              <div className="col-sm-6">
                <div className="testimonial-wrapper">
                  <div className="testimonial">Vestibulum quis quam ut magna consequat faucibus. Pellentesque eget mi suscipit tincidunt. Utmtc tempus dictum. Pellentesque virra. Quis quam ut magna consequat faucibus, metus id mi gravida.</div>
                  <div className="media">
                    <img src={img} className="mr-3" alt="" />
                    <div className="media-body">
                      <div className="overview">
                        <div className="name"><b>Antonio Moreno</b></div>
                        <div className="details">Web Developer / SoftBee</div>
                        <div className="star-rating">
                          <ul className="list-inline">
                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                            <li className="list-inline-item"><i className="fa fa-star-o" /></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>								
              </div>
            </div>			
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-sm-6">
                <div className="testimonial-wrapper">
                  <div className="testimonial">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante, commodo iacul viverra.</div>
                  <div className="media">
                    <img src={img} className="mr-3" alt="" />
                    <div className="media-body">
                      <div className="overview">
                        <div className="name"><b>Michael Holz</b></div>
                        <div className="details">Web Developer / DevCorp</div>											
                        <div className="star-rating">
                          <ul className="list-inline">
                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                            <li className="list-inline-item"><i className="fa fa-star-o" /></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>								
              </div>
              <div className="col-sm-6">
                <div className="testimonial-wrapper">
                  <div className="testimonial">Vestibulum quis quam ut magna consequat faucibus. Pellentesque eget mi suscipit tincidunt. Utmtc tempus dictum. Pellentesque virra. Quis quam ut magna consequat faucibus, metus id mi gravida.</div>
                  <div className="media">
                    <img src={img} className="mr-3" alt="" />
                    <div className="media-body">
                      <div className="overview">
                        <div className="name"><b>Mary Saveley</b></div>
                        <div className="details">Graphic Designer / MarsMedia</div>
                        <div className="star-rating">
                          <ul className="list-inline">
                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                            <li className="list-inline-item"><i className="fa fa-star-o" /></li>
                          </ul>
                        </div>
                      </div>										
                    </div>
                  </div>
                </div>								
              </div>
            </div>			
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-sm-6">
                <div className="testimonial-wrapper">
                  <div className="testimonial">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante, commodo iacul viverra.</div>
                  <div className="media">
                    <img src={img} className="mr-3" alt="" />
                    <div className="media-body">
                      <div className="overview">
                        <div className="name"><b>Martin Sommer</b></div>
                        <div className="details">SEO Analyst / RealSearch</div>
                        <div className="star-rating">
                          <ul className="list-inline">
                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                            <li className="list-inline-item"><i className="fa fa-star-o" /></li>
                          </ul>
                        </div>
                      </div>										
                    </div>
                  </div>
                </div>								
              </div>
              <div className="col-sm-6">
                <div className="testimonial-wrapper">
                  <div className="testimonial">Vestibulum quis quam ut magna consequat faucibus. Pellentesque eget mi suscipit tincidunt. Utmtc tempus dictum. Pellentesque virra. Quis quam ut magna consequat faucibus, metus id mi gravida.</div>
                  <div className="media">
                    <img src={img} className="mr-3" alt="" />
                    <div className="media-body">
                      <div className="overview">
                        <div className="name"><b>John Williams</b></div>
                        <div className="details">Web Designer / UniqueDesign</div>
                        <div className="star-rating">
                          <ul className="list-inline">
                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                            <li className="list-inline-item"><i className="fa fa-star" /></li>
                            <li className="list-inline-item"><i className="fa fa-star-o" /></li>
                          </ul>
                        </div>
                      </div>										
                    </div>
                  </div>
                </div>								
              </div>
            </div>			
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
            </div>
        </div>



    </div>
  )
}

export default Testimonial
