import React from 'react'
import './footer.css'
import { Container,Col,Row, ListGroup,ListGroupItem} from 'reactstrap'
import { Link } from 'react-router-dom'


import hero from "../../assets/images/eco-logo.png";
const Footer = () => {
  const year= new Date().getFullYear()
  return (
  
     <footer className="footer ">
     <Container>
      <Row className='d-flex'>
        <Col lg="4" >
          <div className="logo">
            <img src={hero} alt="logo" />
         <h1 className="multiMart text-white">MultiMart</h1>
          </div>
          
          <p className="footer_text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, impedit deserunt. Eaque enim aliquam, quos explicabo laboriosam rerum cupiditate. Numquam.
          </p>
        </Col>
        <Col lg="3">
          <div className="footer_quick-links">
             <h4 className="quick-links_title">Top Categories</h4>
            <ListGroup className='footer_contact'>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <Link to="#">Mobile Phones</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <Link to="#">Modern Sofa</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <Link to="#">Arm Chair</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <Link to="#">Smart Chairs</Link>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>
        <Col lg="2">
        <div className="footer_useful_links">
             <h4 className="link_title">Useful Links</h4>
            <ListGroup>
              <ListGroupItem className='ps-0 border-0'>
                <Link to="/shop">Shop</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to="/cart">Cart</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to="/login">Login</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
                <Link to="#">Privacy Policy</Link>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>
        <Col lg="3">
        <div className="footer_contact">
             <h4 className="contact_title">Contact</h4>
            <ListGroup>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <span><i class="ri-map-pin-line"></i></span>
                <p>601 AmarTechPark Pune</p>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <span><i class="ri-phone-line"></i></span>
                <p>+8833316714</p>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
               <span><i class="ri-mail-line"></i></span>
               <p>xyz@gmail.com</p>
              </ListGroupItem>
            
            </ListGroup>
          </div>
        </Col>
          <Col lg="12">
            <p className='footer_copyright'> Copyright {year} developed by naaz. All rights reserved</p>
          </Col>
        </Row></Container>
     </footer>
    
  )
}

export default Footer