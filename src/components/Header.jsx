import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';

function Header() {
  const wishlist = useSelector((state)=>state.wishlistReducer) // states represents store
  console.log(wishlist);

  const cart = useSelector((state)=>state.cartReducer) 
  console.log(cart);
  return (
    <Navbar expand="lg" className="bg-primary btn border rounded border-secondary fixed-top">
    <Container>
      <Navbar.Brand  style={{fontWeight:"bolder",fontSize:"30px"}}>  <Link to={'/'} style={{textDecoration:"none",color:"white"}} ><i class="fa-solid fa-shirt me-1"></i>CLOTHIFY</Link> </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link className='btn border rounded border-secondary ms-2 mt-2'><Link style={{textDecoration:"none",color:"white"}} to={'/wishList'}> <i class="fa-solid fa-heart text-info"></i> WishList <Badge bg="light" className='rounded ms-2'>{wishlist.length}</Badge> </Link></Nav.Link>
          <Nav.Link  className='btn border rounded border-secondary ms-2 mt-2'><Link style={{textDecoration:"none",color:"white"}} to={'/Cart'}> <i class="fa-solid fa-cart-shopping text-success "></i> Cart <Badge bg="light"  className='rounded ms-2' >{cart.length}</Badge> </Link></Nav.Link>
        
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>)
}

export default Header
