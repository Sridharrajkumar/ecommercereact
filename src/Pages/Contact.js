import React, { useRef } from 'react'
import {  Card } from 'react-bootstrap'
import CardHeader from 'react-bootstrap/esm/CardHeader'

const Contact = () => {

    const nameref = useRef();
    const emailref = useRef();
    const phoneref = useRef();


    const submitHandler = async(e) => {

        e.preventDefault();

        const name = nameref.current.value;
        const email = emailref.current.value;
        const phone = phoneref.current.value;
        const details = {
            name: name,
            email: email,
            phone: phone
        };
        
        await fetch("https://ecommerce-af582-default-rtdb.firebaseio.com/contact.json",
                {
                    method: 'POST',
                    body: JSON.stringify(details),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
        );
        
        nameref.current.value = null;
        emailref.current.value = null;
        phoneref.current.value=null;
            
            
        
    }
    return (
    <div >
      <form onSubmit={submitHandler}>
          <Card className='col-5  p-2 bg-dark text-light' style={{ margin: 'auto' }} >
              <CardHeader className='text-center bg-light text-dark rounded'><h3>Details</h3></CardHeader>
              <Card.Body >
                   <label className=' form-label ' >Name</label>
                  <input type='text' className='form-control' ref={nameref}/>
                  <label className='form-label '>Email Id</label>
                  <input type='email' className='form-control' ref={emailref}/>
                  <label className='form-label '>Phone Number</label>
                  <input type='number' className='form-control' ref={phoneref} />
                  
              </Card.Body>
              <button className='text-center col-3 p-2 bg-success rounded' style={{margin: 'auto'}}>Submit</button>
          </Card>
        </form>
    </div>
  )
}

export default Contact