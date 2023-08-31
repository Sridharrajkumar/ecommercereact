import React, { useContext } from 'react'
import { Button, Modal, Table } from 'react-bootstrap'
import Cartcontext from '../Store/Cart-context'

const Cart = (props) => {

    const cartctx = useContext(Cartcontext);

    

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
                                {cartctx.products.map((item) => (
                                    <tr key={item.title} stye={{width:450}}>
                                        <td className='d-flex justify-content-between'>
                                            <img src={item.imageUrl} alt={item.title} style={{ width: '75px' }} />
                                            <h6>{item.title}</h6>
                                        </td>
                                        <td >
                                            <h6>{item.price}</h6>
                                        </td>
                                        <td>
                                            <h6>{item.quantity}</h6>   
                                        </td>
                                        <Button className='btn-danger bg-danger' variant='light' >Remove</Button>
                                        
                                    </tr>
                                )
                                    
                                )}
                                        
                            </tbody>
                        </Table>
                          
                    </div>
                  </Modal.Body>
                  <Button onClick={props.hide} className='m-3'>Close</Button>
              </div>
          </Modal>
      </>
  )
}

export default Cart