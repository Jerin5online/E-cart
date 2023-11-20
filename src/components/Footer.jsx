import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
              <div style={{ width: '100%', height: '300px', }} className='d-flex justify-content-center align-items-center flex-column'>
              <div className='footer d-flex justify-content-evenly align-items-center w-100'>
                  <div className='website' style={{width:'400px'}}>
                      <h4><i class="fa-solid fa-cart-shopping me-1 mt-3 "></i> CLOTHIFY</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim repellendus harum provident perferendis dolo numquam aliquam sequi expedita omnis nesciunt, ipsam, vel id!</p>
                  </div>
                  <div className='links d-flex flex-column'>
                  <h4>Links</h4>
                  <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Home Page</Link>
                  <Link to={'/home'} style={{textDecoration:'none',color:'white'}}> WishList</Link>
                  <Link to={'/watch-history'} style={{textDecoration:'none',color:'white'}}> Cart</Link>
  
  
                   
              </div>
              <div className='guides d-flex flex-column'>
              <h4>Guides</h4>
                  <Link to={'/'} style={{textDecoration:'none',color:'white'}}>React</Link>
                  <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none',color:'white'}}>React Bootstrap</Link>
                  <Link to={'https://bootswatch.com/'} style={{textDecoration:'none',color:'white'}}>Bootswatch</Link>
              </div>
              <div className='contact'>
                  <h4 className='mb-3 mt-4 '>Contact Us</h4>
                  <div className='d-flex mb-2 '>
                      <input type="text" className='form-control h-25' placeholder='Enter your Email id' />
                      <button className='btn btn-danger text-white ms-2  w-50 '>Suscribe</button>
                  </div>
                  <div className='icons  d-flex justify-content-evenly mt-3'>
                  <Link to={''} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-instagram fa-2x"></i></Link>
                  <Link to={''} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-facebook fa-2x"></i></Link>
                  <Link to={''} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-twitter fa-2x"></i></Link>
                  <Link to={''} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-linkedin fa-2x"></i></Link>
  
                  </div>
              </div>
              </div>
              
              <p>Copyright  2023 E-CART.Built with react.</p>
  
          </div>
  )
}

export default Footer
