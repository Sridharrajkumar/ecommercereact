
import React, { useContext } from 'react'
import { Navbar,Container, Nav, Button, Alert } from 'react-bootstrap'
import Cartcontext from '../Store/Cart-context'
import { NavLink } from 'react-router-dom'
import AuthContext from '../Store/Auth-Context'

const ENav = (props) => {

    const cartctx = useContext(Cartcontext);
    const authcxt = useContext(AuthContext);

    const numberOfCartProducts = cartctx.products.reduce((curr, pro) => {
        return curr + pro.quantity;
    }, 0)



    const logoutHandler = () => {
        authcxt.logout();
    }
    
  return (
      <>
          <Navbar expand="sm" bg="dark" variant="dark">
              <Container>
                  <Navbar.Brand href="/">
                      <h3>Ecommerce Project</h3>
                  </Navbar.Brand>
                  <Nav>
                        {<Nav.Link as={NavLink} to="/"><h5>Home</h5></Nav.Link>}
                        {<Nav.Link as={NavLink} to="/store"><h5>Store</h5></Nav.Link>}
                        {<Nav.Link as={NavLink} to="/about"><h5>About</h5></Nav.Link>}
                        {<Nav.Link as={NavLink} to="/contact"><h5>Contact</h5></Nav.Link>}
                        {!authcxt.islogged && <Nav.Link as={NavLink} to="/login"><h5>LogIn</h5></Nav.Link>}
                  </Nav>
                  <div className="d-flex align-items-center gap-4">
                      {authcxt.islogged && <Button variant="success" className='pe-4 ps-4' onClick={props.show}>Cart<div>{numberOfCartProducts}</div></Button>}
                      {authcxt.islogged && <Button onClick={logoutHandler}>Logout</Button>}
                  </div>
              </Container>
          </Navbar>
          <Alert variant="secondary"  className="text-center mt-2">
              <h1>The Generics</h1>
          </Alert>
      </>
  )
}

export default ENav