import React from 'react'
// import 'mdb-ui-kit/css/mdb.min.css';
function PricingPage() {
  return (
    <div>
      {/* <!-- Tabs navs --> */}
<ul class="nav nav-tabs mb-3 w-25 d-flex justify-content-center m-auto" id="ex1" role="tablist">
  <li class="nav-item" role="presentation">
    <a
      class="nav-link active"
      id="ex1-tab-1"
      data-mdb-toggle="tab"
      href="#ex1-tabs-1"
      role="tab"
      aria-controls="ex1-tabs-1"
      aria-selected="true"
      >Monthly</a
    >
  </li>
  <li class="nav-item" role="presentation">
    <a
      class="nav-link"
      id="ex1-tab-2"
      data-mdb-toggle="tab"
      href="#ex1-tabs-2"
      role="tab"
      aria-controls="ex1-tabs-2"
      aria-selected="false"
      >Yearly</a
    >
  </li>

</ul>
{/* <!-- Tabs navs --> */}

{/* <!-- Tabs content --> */}
<div class="tab-content" id="ex1-content">
  <div
    class="tab-pane fade show active"
    id="ex1-tabs-1"
    role="tabpanel"
    aria-labelledby="ex1-tab-1"
  >
  <div className="container-fluid">
  <div className="container p-5">
    <div className="row">
      <div className="col-lg-4 col-md-12 mb-4">
        <div id='basic' >

        <div  className="card h-100 shadow-lg">
          <div  className="card-body">
            <div className=" p-3">
              <h5 className="card-title">Basic</h5>
              <small>Individual</small>
             <br />
              
            
            </div>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Cras justo odio</li>
            <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Dapibus ac facilisis in</li>
            <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Vestibulum at eros</li>
              <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Cras justo odio</li>
            <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Dapibus ac facilisis in</li>
            <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Vestibulum at eros</li>
              <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Cras justo odio</li>
            <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Dapibus ac facilisis in</li>
            <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Vestibulum at eros</li>
          </ul>
          <div className="card-body text-center">
            <button id='basic_btn' className="btn btn-lg" style={{borderRadius: '50px'}}><span className="h2">$96</span>/Year</button>
          </div>
        </div>
        </div>

      </div>
      <div  className="col-lg-4 col-md-12 mb-4">
        <div id='standard'>

        <div className="card h-100 shadow-lg">
          <div className="card-body">
            <div className=" p-3">
              <h5 className="card-title">Standard</h5>
              <small>Individual</small>
             <br />
              
            
            </div>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Cras justo odio</li>
            <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Dapibus ac facilisis in</li>
            <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Vestibulum at eros</li>
              <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Cras justo odio</li>
            <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Dapibus ac facilisis in</li>
            <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Vestibulum at eros</li>
              <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Cras justo odio</li>
            <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Dapibus ac facilisis in</li>
            <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Vestibulum at eros</li>
          </ul>
          <div className="card-body text-center">
            <button id='standard_btn' className="btn btn-lg" style={{borderRadius: '50px'}}><span className="h2">$96</span>/Year</button>
          </div>
        </div>
        </div>

      </div>
      <div  className="col-lg-4 col-md-12 mb-4">
        <div id='premium'>

        <div  className="card h-100 shadow-lg">
          <div className="card-body">
            <div className=" p-3">
              <h5 className="card-title">Premium</h5>
              <small>Individual</small>
             <br />
              
            
            </div>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Cras justo odio</li>
            <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Dapibus ac facilisis in</li>
            <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Vestibulum at eros</li>
              <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Cras justo odio</li>
            <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Dapibus ac facilisis in</li>
            <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Vestibulum at eros</li>
              <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Cras justo odio</li>
            <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Dapibus ac facilisis in</li>
            <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Vestibulum at eros</li>
          </ul>
          <div className="card-body text-center">
            <button id='premium_btn' className="btn btn-lg" style={{borderRadius: '50px'}}><span className="h2">$96</span>/Year</button>
          </div>
        </div>
        </div>

      </div>
    </div>    
  </div>
</div>
  </div>
  <div class="tab-pane fade" id="ex1-tabs-2" role="tabpanel" aria-labelledby="ex1-tab-2">
  <div className="container-fluid">
  <div className="container p-5">
    <div className="row">
      <div className="col-lg-4 col-md-12 mb-4">
        <div id='basic' >

        <div  className="card h-100 shadow-lg">
          <div  className="card-body">
            <div className=" p-3">
              <h5 className="card-title">Basic</h5>
              <small>Individual</small>
             <br />
              
            
            </div>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Cras justo odio</li>
            <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Dapibus ac facilisis in</li>
            <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Vestibulum at eros</li>
              <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Cras justo odio</li>
            <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Dapibus ac facilisis in</li>
            <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Vestibulum at eros</li>
              <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Cras justo odio</li>
            <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Dapibus ac facilisis in</li>
            <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Vestibulum at eros</li>
          </ul>
          <div className="card-body text-center">
          <button id='basic_btn' className="btn btn-lg" style={{borderRadius: '50px'}}><span className="h2">$96</span>/Year</button>
          </div>
        </div>
        </div>

      </div>
      <div  className="col-lg-4 col-md-12 mb-4">
        <div id='standard'>

        <div className="card h-100 shadow-lg">
          <div className="card-body">
            <div className=" p-3">
              <h5 className="card-title">Standard</h5>
              <small>Individual</small>
             <br />
              
            
            </div>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Cras justo odio</li>
            <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Dapibus ac facilisis in</li>
            <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Vestibulum at eros</li>
              <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Cras justo odio</li>
            <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Dapibus ac facilisis in</li>
            <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Vestibulum at eros</li>
              <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Cras justo odio</li>
            <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Dapibus ac facilisis in</li>
            <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Vestibulum at eros</li>
          </ul>
          <div className="card-body text-center">
          <button id='standard_btn' className="btn btn-lg" style={{borderRadius: '50px'}}><span className="h2">$96</span>/Year</button>
          </div>
        </div>
        </div>

      </div>
      <div  className="col-lg-4 col-md-12 mb-4">
        <div id='premium'>

        <div  className="card h-100 shadow-lg">
          <div className="card-body">
            <div className=" p-3">
              <h5 className="card-title">Premium</h5>
              <small>Individual</small>
             <br />
              
            
            </div>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Cras justo odio</li>
            <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Dapibus ac facilisis in</li>
            <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Vestibulum at eros</li>
              <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Cras justo odio</li>
            <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Dapibus ac facilisis in</li>
            <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Vestibulum at eros</li>
              <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Cras justo odio</li>
            <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Dapibus ac facilisis in</li>
            <li className="list-group-item"><i id='tick' class="fa-solid fa-circle-check"></i> Vestibulum at eros</li>
          </ul>
          <div className="card-body text-center">
          <button id='premium_btn' className="btn btn-lg" style={{borderRadius: '50px'}}><span className="h2">$96</span>/Year</button>
          </div>
        </div>
        </div>

      </div>
    </div>    
  </div>
</div>
  </div>

</div>
{/* <!-- Tabs content --> */}
    </div>
  )
}

export default PricingPage
