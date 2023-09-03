
import React, { useContext } from 'react'
import { Navbar,Container, Nav, Button, Alert } from 'react-bootstrap'
import Cartcontext from '../Store/Cart-context'
import { Link } from 'react-router-dom'

const ENav = (props) => {

    const cartctx=useContext(Cartcontext)

    const numberOfCartProducts = cartctx.products.reduce((curr, pro) => {
        return curr + pro.quantity;
    },0)


  return (
      <>
          <Navbar expand="sm" bg="dark" variant="dark" >
              <Container>
                  <Navbar.Brand href="/">
                      <h3>Ecommerce Project</h3>
                  </Navbar.Brand>
                  <Nav>
                      <Nav.Link as={Link} to="/home"><h5>Home</h5></Nav.Link>
                      <Nav.Link as={Link} to="/"><h5>Store</h5></Nav.Link>
                      <Nav.Link as={Link} to="/about"><h5>About</h5></Nav.Link>
                      <Nav.Link as={Link} to="/contact"><h5>Contact</h5></Nav.Link>
                  </Nav>
                  <Button variant="success" className='pe-4 ps-4' onClick={props.show}>Cart<div>{numberOfCartProducts}</div></Button>
              </Container>
          </Navbar>
          <Alert variant="secondary"  className="text-center mt-2">
              <h1>The Generics</h1>
          </Alert>
      </>
  )
}

export default ENav