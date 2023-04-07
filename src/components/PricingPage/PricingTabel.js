import React from 'react'
import { useState } from 'react'
import './pricing.css'
function PricingTabel() {
    const [check,setCheck]=useState(false)
    console.log(check);
  return (
    <div style={{marginBottom:"10vh"}} className='table_content_over'>

    <div className='table_conatiner'>
{      check?<table className="table text-nowrap">
  <tbody>
    <tr className='table_row_main'>
      <th scope="row"><div class="custom-control custom-switch">
   <input onChange={(e)=>setCheck(e.target.checked)} type="checkbox" class="custom-control-input" id="customSwitches"/>
  <label class="custom-control-label" for="customSwitches"> SAVE UP TO 34%</label>
</div></th>
      <td>
        <h5>Standard</h5>
        <h3><span>US$</span>14</h3>
        <p>/user/month billed annually</p>
        <button>Try for Free</button>
      </td>
      <td><h5>Professional</h5>
      <h3><span>US$</span>23</h3>
        <p>/user/month billed annually</p>
        <button>Try for Free</button></td>
      <td><h5>Enterprise</h5>
      <h3><span>US$</span>40</h3>
        <p>/user/month billed annually</p>
        <button>Try for Free</button></td>
      <td><h5>Ultimate</h5>
      <h3><span>US$</span>52</h3>
        <p>/user/month billed annually</p>
        <button>Try for Free</button></td>
    </tr>
   
  </tbody>

</table>:<table className="table text-nowrap">
  <tbody>
    <tr className='table_row_main'>
      <th scope="row"><div class="custom-control custom-switch">
   <input onChange={(e)=>setCheck(e.target.checked)} type="checkbox" class="custom-control-input" id="customSwitches"/>
  <label class="custom-control-label" for="customSwitches"> SAVE UP TO 34%</label>
</div></th>
      <td>
        <h5>Standard</h5>
        <h3><span>US$</span>20</h3>
        <p>/user/month billed Monthly</p>
        <button>Try for Free</button>
      </td>
      <td><h5>Professional</h5>
      <h3><span>US$</span>35</h3>
        <p>/user/month billed Monthly</p>
        <button>Try for Free</button></td>
      <td><h5>Enterprise</h5>
      <h3><span>US$</span>50</h3>
        <p>/user/month billed Monthly</p>
        <button>Try for Free</button></td>
      <td><h5>Ultimate</h5>
      <h3><span>US$</span>65</h3>
        <p>/user/month billed Monthly</p>
        <button>Try for Free</button></td>
    </tr>
   
  </tbody>

</table>}
        
      <div className="accordion w-full" id="basicAccordion">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button collapsed" type="button" data-mdb-toggle="collapse" data-mdb-target="#basicAccordionCollapseOne" aria-expanded="false" aria-controls="collapseOne">
   Sales force automation
      </button>
    </h2>
    <div id="basicAccordionCollapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-mdb-parent="#basicAccordion" style={{}}>
      <div className="accordion-body">
      <table className="table table-hover text-nowrap">
  <tbody>
    <tr className='table_row'>
      <th scope="row">Basic modules</th>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
  
    </tr>
    <tr className='table_row'>
      <th scope="row">Tasks, calls, events</th>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
    </tr>
    <tr className='table_row'>
      <th scope="row">Advanced filters</th>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
    </tr>
    <tr className='table_row'>
      <th scope="row">Multiple pipelines</th>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
    </tr>
    <tr className='table_row'>
      <th scope="row">Scoring rules</th>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
    </tr>
    <tr className='table_row'>
      <th scope="row">Sales forecasting</th>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
    </tr>
    <tr className='table_row'>
      <th scope="row">Email insights</th>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
    </tr>
    <tr className='table_row'>
      <th scope="row">Multiple currencies</th>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
    </tr>
    <tr className='table_row'>
      <th scope="row">Macros</th>
      <td></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
    </tr>
    <tr className='table_row'>
      <th scope="row">SalesSignals</th>
      <td></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
    </tr>
    <tr className='table_row'>
      <th scope="row">Assignment rules</th>
      <td></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
    </tr>
    <tr className='table_row'>
      <th scope="row">Multiple scoring rules</th>
      <td></td>
      <td></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
    </tr>
    <tr className='table_row'>
      <th scope="row">Custom SalesSignals</th>
      <td></td>
      <td></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
    </tr>
    <tr className='table_row'>
      <th scope="row">Email parsers</th>
      <td></td>
      <td></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
    </tr>
    <tr className='table_row'>
      <th scope="row">Data entry wizards</th>
      <td></td>
      <td></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
    </tr>
    <tr className='table_row'>
      <th scope="row">Portals</th>
      <td></td>
      <td></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
    </tr>
  </tbody>

</table>

      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-mdb-toggle="collapse" data-mdb-target="#basicAccordionCollapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Automation and process management
      </button>
    </h2>
    <div id="basicAccordionCollapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-mdb-parent="#basicAccordion" style={{}}>
      <div className="accordion-body">
             <table className="table table-hover text-nowrap">
  <tbody>
    <tr className='table_row'>
      <th scope="row">Basic modules</th>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
  
    </tr>
    <tr className='table_row'>
      <th scope="row">Tasks, calls, events</th>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
    </tr>
    <tr className='table_row'>
      <th scope="row">Advanced filters</th>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
    </tr>
    <tr className='table_row'>
      <th scope="row">Multiple pipelines</th>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
    </tr>
    <tr className='table_row'>
      <th scope="row">Scoring rules</th>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
    </tr>
    <tr className='table_row'>
      <th scope="row">Sales forecasting</th>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
    </tr>
    <tr className='table_row'>
      <th scope="row">Email insights</th>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
    </tr>
    <tr className='table_row'>
      <th scope="row">Multiple currencies</th>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
    </tr>
    <tr className='table_row'>
      <th scope="row">Macros</th>
      <td></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
    </tr>
    <tr className='table_row'>
      <th scope="row">SalesSignals</th>
      <td></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
    </tr>
    <tr className='table_row'>
      <th scope="row">Assignment rules</th>
      <td></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
    </tr>
    <tr className='table_row'>
      <th scope="row">Multiple scoring rules</th>
      <td></td>
      <td></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
    </tr>
    <tr className='table_row'>
      <th scope="row">Custom SalesSignals</th>
      <td></td>
      <td></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
    </tr>
    <tr className='table_row'>
      <th scope="row">Email parsers</th>
      <td></td>
      <td></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
    </tr>
    <tr className='table_row'>
      <th scope="row">Data entry wizards</th>
      <td></td>
      <td></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
    </tr>
    <tr className='table_row'>
      <th scope="row">Portals</th>
      <td></td>
      <td></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
    </tr>
  </tbody>
</table>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-mdb-toggle="collapse" data-mdb-target="#basicAccordionCollapseThree" aria-expanded="false" aria-controls="collapseThree">
      Product customization
      </button>
    </h2>
    <div id="basicAccordionCollapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-mdb-parent="#basicAccordion" style={{}}>
      <div className="accordion-body">
      <table className="table table-hover text-nowrap">
  <tbody>
    <tr className='table_row'>
      <th scope="row">Basic modules</th>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
    </tr>
    <tr className='table_row'>
      <th scope="row">Tasks, calls, events</th>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
    </tr>
    <tr className='table_row'>
      <th scope="row">Advanced filters</th>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
    </tr>
    <tr className='table_row'>
      <th scope="row">Multiple pipelines</th>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
    </tr>
    <tr className='table_row'>
      <th scope="row">Scoring rules</th>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
    </tr>
    <tr className='table_row'>
      <th scope="row">Sales forecasting</th>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
    </tr>
    <tr className='table_row'>
      <th scope="row">Email insights</th>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
    </tr>
    <tr className='table_row'>
      <th scope="row">Multiple currencies</th>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
    </tr>
    <tr className='table_row'>
      <th scope="row">Macros</th>
      <td></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
    </tr>
    <tr className='table_row'>
      <th scope="row">SalesSignals</th>
      <td></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
    </tr>
    <tr className='table_row'>
      <th scope="row">Assignment rules</th>
      <td></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
    </tr>
    <tr className='table_row'>
      <th scope="row">Multiple scoring rules</th>
      <td></td>
      <td></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
    </tr>
    <tr className='table_row'>
      <th scope="row">Custom SalesSignals</th>
      <td></td>
      <td></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
    </tr>
    <tr className='table_row'>
      <th scope="row">Email parsers</th>
      <td></td>
      <td></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
    </tr>
    <tr className='table_row'>
      <th scope="row">Data entry wizards</th>
      <td></td>
      <td></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
    </tr>
    <tr className='table_row'>
      <th scope="row">Portals</th>
      <td></td>
      <td></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
      <td><i class="fa-solid fa-check" style={{color:"#1070FE"}}></i></td>
    </tr>
  </tbody>
</table>
      </div>
    </div>
  </div>
</div>
    </div>
    </div>
  )
}
export default PricingTabel