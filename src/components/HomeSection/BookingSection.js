import React from 'react'
import { Link } from 'react-router-dom'

const BookingSection = ({ data }) => {
  return (
    <>
      <div className="booking my-lg-5 my-md-2 pt-2" style={{ backgroundImage: `url("../images/Booking/booking\ banner.png")`, minHeight: '365px', backgroundSize: 'contain', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat' }}>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-12 col-md-6 col-lg-5 ms-md-auto text-center text-md-start">
              <h2 className="fw-bold">{data?.home?.data?.bk_title}</h2>
              <h3 className="fw-bold fs-4">{data?.home?.data?.bk_dec}</h3>
                <div className="row align-items-center gap-2 mt-3 justify-content-center justify-content-md-start">
                <div id='btn_modal' className="col-5 col-md-auto rounded-pill px-2 py-2">
    {/* Button trigger modal */}
    <button type="button" className="modal_btn" data-toggle="modal" data-target="#exampleModal">
      Launch demo modal
    </button>
    {/* Modal */}
    <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="model_bg text-align rounded-5">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div>
                            
                            <div className='email_section'>
                              <label>Email</label>
                              <input type='email' placeholder='your email address'/>
                            </div>
                            <div className='email_section'>
                              <label>Full Name</label>
                              <input type='email' placeholder='your answer'/>
                            </div>
                            <div className='email_section'>
                              <label>Name of Company</label>
                              <input type='email' placeholder='your answer'/>
                            </div>
                            <div className='email_section'>
                              <label>Description Of Product To Be Photographed (ie. Women's Clothing)</label>
                              <input type='email' placeholder='your answer'/>
                            </div>
                            <div className='email_section'>
                              <label>Quantity Of Product To Be Shot?</label>
                              <input type='email' placeholder='your answer'/>
                            </div>
                            <div className='radio_section'>
                              <h3>Type Of Imagery?</h3>
                              <div className='option_popup'>
                              <input type={'radio'}/>
                              <label>E-commerce</label>
                              </div>
                              <div className='option_popup'>
                              <input type={'radio'}/>
                              <label>E-commerce</label>
                              </div> <div className='option_popup'>
                              <input type={'radio'}/>
                              <label>E-commerce</label>
                              </div> <div className='option_popup'>
                              <input type={'radio'}/>
                              <label>E-commerce</label>
                              </div>
                            </div>
                            <div className='radio_section'>
                              <h3>Type Of Imagery?</h3>
                              <div className='option_popup'>
                              <input type={'radio'}/>
                              <label>E-commerce</label>
                              </div>
                              <div className='option_popup'>
                              <input type={'radio'}/>
                              <label>E-commerce</label>
                              </div> <div className='option_popup'>
                              <input type={'radio'}/>
                              <label>E-commerce</label>
                              </div> <div className='option_popup'>
                              <input type={'radio'}/>
                              <label>E-commerce</label>
                              </div>
                            </div>
                            <div className='email_section'>
                              <label>Full Name</label>
                              <input type='email' placeholder='your answer'/>
                            </div>
                            <div className='radio_section'>
                              <h3>Type Of Imagery?</h3>
                              <div className='option_popup'>
                              <input type={'radio'}/>
                              <label>E-commerce</label>
                              </div>
                              <div className='option_popup'>
                              <input type={'radio'}/>
                              <label>E-commerce</label>
                              </div> <div className='option_popup'>
                              <input type={'radio'}/>
                              <label>E-commerce</label>
                              </div> <div className='option_popup'>
                              <input type={'radio'}/>
                              <label>E-commerce</label>
                              </div>
                            </div>
                            <div className='radio_section'>
                              <h3>Type Of Imagery?</h3>
                              <div className='option_popup'>
                              <input type={'radio'}/>
                              <label>E-commerce</label>
                              </div>
                              <div className='option_popup'>
                              <input type={'radio'}/>
                              <label>E-commerce</label>
                              </div> <div className='option_popup'>
                              <input type={'radio'}/>
                              <label>E-commerce</label>
                              </div> <div className='option_popup'>
                              <input type={'radio'}/>
                              <label>E-commerce</label>
                              </div>
                            </div>
                            <div className='email_section'>
                              <label>Quantity Of Product To Be Shot?</label>
                              <input type='email' placeholder='your answer'/>
                            </div>
                            <div className='email_section'>
                              <label>Quantity Of Product To Be Shot?</label>
                              <input type='email' placeholder='your answer'/>
                            </div>
                            <div className='email_section'>
                              <label>Quantity Of Product To Be Shot?</label>
                              <input type='email' placeholder='your answer'/>
                            </div>
                          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>

                
                </div>
            </div>
            <div className="col-12 col-md-5 col-lg-5 my-5 my-md-0">
              <img src={data?.home?.bkimage?.img_url} alt="booking" className="img-fluid booking-mobile" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BookingSection