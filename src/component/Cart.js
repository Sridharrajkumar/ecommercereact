import React, { useContext } from 'react'
import { Button, Modal, Table } from 'react-bootstrap'
import Cartcontext from '../Store/Cart-context'

const Cart = (props) => {

    

    const cartctx = useContext(Cartcontext);

    const Removeitem = (name) => {
        cartctx.removeproduct(name)
    }
        
  return (
      <>
          <Modal show={props.show} onhide={props.hide}>
              <div>
                  <h2 className="text-center">Cart Items</h2>
                  <Modal.Body>
                      <div className='table-responsive'>  
                        <Table className='table-borderless'>
                            <thead>
                                <tr>
                                    <th>Items</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                </tr>
                            </thead>
                            <tbody >
                                {cartctx.products.map((item) => (
                                    <tr key={item.title} stye={{width:450}}>
                                        <td className='d-flex'>
                                            <img src={item.imageUrl} alt={item.title} style={{ width: '75px' }} />
                                            <h6 className='m-4'>{item.title}</h6>
                                        </td>
                                        <td >
                                            <h6 className='m-4'>{item.price}</h6>
                                        </td>
                                        <td>
                                            <h6 className='m-4'>{item.quantity}</h6> 
                                            <Button className='btn-danger bg-danger' variant='light' onClick={() => Removeitem(item.title)}>Remove</Button>
                                        </td>
                                        
                                        
                                    </tr>
                                )
                                    
                                )}
                                        
                            </tbody>
                        </Table>
                          
                    </div>
                  </Modal.Body>
                  <div className='d-flex justify-content-center align-items-center'>
                    <h4>Total Amount:</h4>
                    <h4>${cartctx.totalAmount}</h4>
                  </div>
                  <div className='d-flex justify-content-center align-items-center'> 
                        <Button onClick={props.hide} className='m-3'>Close</Button>
                        <Button variant='success'>place Order</Button>
                  </div>
                  
              </div>
          </Modal>
      </>
  )
}

export default Cart