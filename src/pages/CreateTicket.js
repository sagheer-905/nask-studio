import React, { useState, useEffect } from 'react'
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";
import UserPanelNav from '../components/UserPanelNav'

const CreateTicket = () => {
  const appToken = 'Bearer '+localStorage.getItem("auth");
  const [data, setData]=useState([])
  const requestOptionsOrders = {
    method: 'POST',
    headers: { 'Authorization': appToken
      }
    };
  useEffect(()=>{
    fetch("https://nask.1stbusines.com/api/v1/user/my-orders",requestOptionsOrders).then((result)=>{
      result.json().then((resp)=>{
        setData(resp)
        })
    })
     // eslint-disable-next-line
  },[]);
 
  const requestOptions = {
    headers: { 'Authorization': appToken
        }
    };

  const navigate = useNavigate();

    const [ticketInput, setRegister] = useState({
        title : '',
        description : '',
        subject : '',
        priority : '',
        order_id : '',
        error_list: [],
    });

    const handleInput = (e) => {
        e.persist();
        setRegister({...ticketInput, [e.target.name]: e.target.value });
    }

    const ticketSubmit = (e) => {
        e.preventDefault();
        
        const data = {
            title : ticketInput.title,
            description : ticketInput.description,
            subject : ticketInput.subject,
            priority : ticketInput.priority,
            order_id : ticketInput.order_id,
        }

        
            axios.post('https://nask.1stbusines.com/api/v1/user/ticket/create', data, requestOptions).then(res => {
              console.log(res.status);
                if(res.status === 201)
                {           
                    swal('Success',res.data.message,"success");
                    navigate('/user-support-tickets');
                }
                else
                {   
                    swal('Error',res.data.message,"error");
                    setRegister({...ticketInput, error_list: res.data.validate});
                }
            }); 

    }

   


  return (
    <>
      <div className="container">
        <div className="row" style={{margin: '75px 0px'}}>
          {/* Right Side of the Dashboard */}
          <UserPanelNav />
          <div className="col-lg-9 right-bar">
            {/* Table Start */}
            <div className="register-form ">
              <div className="row justify-content-center">
                <div className="col-11 col-lg-12 col-xl-12 rounded-4">
                  <h4 className="fw-semibold ">Create Ticket</h4>
                  {/* form */}
                  <form className="px-xl-4" onSubmit={ticketSubmit}  method='POST'>
                    {/* full name */}
                    <div className="row align-items-center">
                      <div className="col-md-2">
                        <label htmlFor className="form-label">Title</label>
                      </div>
                      <div className="col-md-5">
                        <input type="text" name='title' onChange={handleInput} value={ticketInput.title}  className="form-control rounded-pill" placeholder="Title" />
                        <span>{ticketInput.error_list.title}</span>
                     </div>
                    </div>
                    <div className="row align-items-center">
                      <div className="col-md-2">
                        <label htmlFor className="form-label">Subject</label>
                      </div>
                      <div className="col-md-5">
                        <input type="text" name='subject' onChange={handleInput} value={ticketInput.subject}  className="form-control rounded-pill" placeholder="Subject" />
                        <span>{ticketInput.error_list.subject}</span>
                      </div>
                    </div>
                    <div className="row align-items-center">
                      <div className="col-md-2">
                        <label htmlFor className="form-label">All Orders</label>
                      </div>
                      <div className="col-md-5 position-relative">
                        <select  name='order_id' onChange={handleInput} value={ticketInput.order_id} className="form-select rounded-pill" aria-label="Default select example">
                          <option selected>Please Order</option>
                          {data?.my_orders?.map((value) => (
                          <option value={value.id}>Order ID #{value.id}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="row align-items-center" style={{marginTop: '20px'}}>
                      <div className="col-md-2">
                        <label htmlFor className="form-label">Priority</label>
                      </div>
                      <div className="col-md-5 position-relative">
                        <select name='priority' onChange={handleInput} value={ticketInput.priority} className="form-select rounded-pill" aria-label="Default select example">
                          <option selected>Select</option>
                          <option value={'Low'}>Low</option>
                          <option value={'Medium'}>Medium</option>
                          <option value={'High'}>High</option>
                          <option value={'Urgent'}>Urgent</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-md-2">
                        <label htmlFor className="form-label">Description</label>
                      </div>
                      <textarea name='description' onChange={handleInput} value={ticketInput.description} className="form-control" id="exampleFormControlTextarea3" rows={4} defaultValue={""} />
                      <span>{ticketInput.error_list.description}</span>
                    </div>
                    <div className="row align-items-center">
                      <div className="col-12 text-center">
                        <button type="submit" className="btn rounded-pill text-uppercase">Submit</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreateTicket
