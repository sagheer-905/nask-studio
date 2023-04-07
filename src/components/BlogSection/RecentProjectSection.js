import React from 'react'

const RecentProjectSection = () => {
  return (
    <>
        <div className="projects mt-5 pt-lg-5 pb-lg-5">
            <div className="container">
            <h3 className="fw-bold projects-heading">Recent Projects</h3>
            <p className="mb-4 mb-md-5">Happy moments from happy clients</p>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={3} aria-label="Slide 4" />
                </div>
                <div className="carousel-inner px-4 pb-4 px-md-5 pb-md-5 p-lg-0">
                <div className="carousel-item active" data-bs-interval={10000}>
                    <div className="row align-items-center justify-content-end">
                    <div className="col-lg-8 px-0 px-lg-3">
                        <img src="images/Blog-banners/project-img.jpg" alt="" className="img-fluid" />
                    </div>
                    <div className="col-lg-5 px-4 py-5">
                        <h3 className="lh-sm mb-3">Creative Gender Reveal Photoshoot Ideas</h3>
                        <p className="lh-lg">Reach out to past clients for their thoughts on their photography
                        experience. Ask them to write their own tips, offer a sweet
                        testimonial, or simply describe their favorite photo which you can
                        then share!</p>
                        <div className="d-flex justify-content-between">
                        <a href="#">Read More</a>
                        <span>March 22, 2022</span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval={2000}>
                    <div className="row align-items-center justify-content-end">
                    <div className="col-lg-8 px-0 px-lg-3">
                        <img src="images/Blog-banners/project-img.jpg" alt="" className="img-fluid" />
                    </div>
                    <div className="col-lg-5 px-4 py-5">
                        <h3 className="lh-sm mb-3">Creative Gender Reveal Photoshoot Ideas</h3>
                        <p className="lh-lg">Reach out to past clients for their thoughts on their photography
                        experience. Ask them to write their own tips, offer a sweet
                        testimonial, or simply describe their favorite photo which you can
                        then share!</p>
                        <div className="d-flex justify-content-between">
                        <a href="#">Read More</a>
                        <span>March 22, 2022</span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="row align-items-center justify-content-end">
                    <div className="col-lg-8 px-0 px-lg-3">
                        <img src="images/Blog-banners/project-img.jpg" alt="" className="img-fluid" />
                    </div>
                    <div className="col-lg-5 px-4 py-5">
                        <h3 className="lh-sm mb-3">Creative Gender Reveal Photoshoot Ideas</h3>
                        <p className="lh-lg">Reach out to past clients for their thoughts on their photography
                        experience. Ask them to write their own tips, offer a sweet
                        testimonial, or simply describe their favorite photo which you can
                        then share!</p>
                        <div className="d-flex justify-content-between">
                        <a href="#">Read More</a>
                        <span>March 22, 2022</span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="row align-items-center justify-content-end">
                    <div className="col-lg-8 px-0 px-lg-3">
                        <img src="images/Blog-banners/project-img.jpg" alt="" className="img-fluid" />
                    </div>
                    <div className="col-lg-5 px-4 py-5">
                        <h3 className="lh-sm mb-3">Creative Gender Reveal Photoshoot Ideas</h3>
                        <p className="lh-lg">Reach out to past clients for their thoughts on their photography
                        experience. Ask them to write their own tips, offer a sweet
                        testimonial, or simply describe their favorite photo which you can
                        then share!</p>
                        <div className="d-flex justify-content-between">
                        <a href="#">Read More</a>
                        <span>March 22, 2022</span>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default RecentProjectSection