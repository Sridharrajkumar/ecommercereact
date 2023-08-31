import React from 'react'
import { Button, Modal, Table } from 'react-bootstrap'

const Cart = (props) => {

    const cartElements = [
        {
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        quantity: 2,
        },
        {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        quantity: 3,
        },
        {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        quantity: 1,
        }
        ]

  return (
      <>
          <Modal show={props.show} onhide={props.hide}>
              <div>
                  <h2 className="text-center">Cart Items</h2>
                  <Modal.Body>
                      <div className='table-responsive'>  
                        <Table>
                            <thead>
                                <tr>
                                    <th>Items</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                </tr>
                            </thead>
                            <tbody >
                                {cartElements.map((item) => (
                                    <tr key={item.title} stye={{width:450}}>
                                        <td className='d-flex justify-content-between'>
                                            <img src={item.imageUrl} alt={item.title} style={{ width: '75px' }} />
                                            <h6>{item.title}</h6>
                                        </td>
                                        <td >
                                            <h6>{item.price}</h6>
                                        </td>
                                        <td className='d-flex gap-4 '>
                                            <h6>{item.quantity}</h6>
                                            <Button className='btn-danger'>Remove</Button>
                                        </td>

                                    </tr>
                                )
                                    
                                )}
                                        
                            </tbody>
                        </Table>
                          
                    </div>
                  </Modal.Body>
                  <Button onClick={props.hide} className='m-3' style={{ }}>Close</Button>
              </div>
          </Modal>
      </>
  )
}

export default Cart