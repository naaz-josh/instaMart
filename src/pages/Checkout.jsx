import React, { useEffect, useMemo } from 'react'
import CommonSection from '../components/UI/CommonSection'
import { Container,Col,Row, FormGroup,Form} from 'reactstrap'
import { useSelector } from 'react-redux'
import { useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";

import '../styles/checkout.css'
import useAuth from '../custom-hooks/useAuth'

const Checkout = () => {
  const totalQuanity =useSelector(state=>state.cart.totalQuanity)
  const totalAmount= useSelector(state=>state.cart.totalAmount)
   const navigate = useNavigate();
   const {currentUser}=useAuth();
   const dispatch=useDispatch()
  
  const handlePlaceOrder=()=>{
   
    // const user= JSON.parse(localStorage.getItem('user'))
    if(currentUser){

    debugger
      toast.success("Your order is Placed !")
      dispatch(cartActions.clearCart())
      navigate('/home')
    }
    else{
      
      navigate('/login')
      toast.warn('You need to Login In first to place an order')
    }
  }

   
  return (
    <>
    <CommonSection> </CommonSection>
    <section>
    
      <Container>
      <Row>
        <Col lg="8">
          <h6 className='mb-4 fw-bold'>Billing Information</h6>
          <Form className='billing_form'>
            <FormGroup className='form-group'>
              <input type="text" placeholder='Enter your name' />
            </FormGroup>
            <FormGroup className='form-group'>
              <input type="text" placeholder='Enter your email' />
            </FormGroup>
            <FormGroup className='form-group'>
              <input type="text" placeholder='Phone Number' />
            </FormGroup>
            <FormGroup className='form-group'>
              <input type="text" placeholder='Street Adress' />
            </FormGroup>
            <FormGroup className='form-group'>
              <input type="text" placeholder='City' />
            </FormGroup>
            <FormGroup className='form-group'>
              <input type="text" placeholder='Postal Code' />
            </FormGroup>
            <FormGroup className='form-group'>
              <input type="text" placeholder='Country' />
            </FormGroup>
          </Form>
           <button className="buy_btn save_info">Save</button>
        </Col>
        <Col lg="4">
          <div className="checkout_cart">
          <h6>Total Qty : <span>{totalQuanity} items</span></h6>
          <h6>Subtotal  : <span>${totalAmount}</span></h6>
          <h6><span>Shipping : <br/>free shipping</span><span>$0</span></h6>
          {/* <h6>Free Shipping</h6> */}
          <h4>Total Cost : <span>${totalAmount}</span></h4>
          <button className="buy_btn auth_btn w-100" onClick={handlePlaceOrder}>Place an order</button>
          
        
          </div>
         
        </Col>
      </Row>
      </Container>
    </section>
    </>
  )
}

export default Checkout