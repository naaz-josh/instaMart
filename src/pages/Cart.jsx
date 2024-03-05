import React from "react";
import CommonSection from "../components/UI/CommonSection";
import { Container, Row, Col } from "reactstrap";

import "../styles/cart.css";
import motion from "framer-motion";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItem = useSelector((state) => state.cart.cartItems);
  const totalAmount=useSelector((state)=>state.cart.totalAmount)
  console.log("cartitems" + JSON.stringify(cartItem));
 

  return (
    <>
      <CommonSection title="shopping_cart"></CommonSection>
      <Container>
        <Row>
          <Col lg="9">
            {cartItem.length === 0 ? (
              <h2 className="fs-4">No Items added to the cart</h2>
            ) : (
              <table className="table bordered">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Qty</th>

                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItem.map((item, index) => (
                      <Tr item={item} key={index}></Tr>
                  ))}
                </tbody>
              </table>
            )}
          </Col>
          <Col lg='3'>
            <div className="cart_total">
          <h4 className="d-flex align-items-center justify-content-between">Subtotal  : <span>${totalAmount}</span></h4>
          
          <p className="fs-6 mt-2">taxes and shipping will be calculated in checkout</p>
          <div>
          <button className="buy_btn w-100 mt-3" ><Link to="/checkout">Checkout</Link></button>
          <button className="buy_btn w-100 mt-3 mb-3" ><Link to="/shop">Continue Shopping</Link></button>
          </div>
          
         
            </div>
         
          </Col>
        </Row>
      </Container>
    </>
  );
};


const Tr = ({ item }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    // console.log("item-->"+  JSON.stringify(item))
  dispatch(cartActions.deleteItem(item.id));
 console.log("xyx"+item)
  }
  return(<tr>
  <td>
    <img src={item.imgUrl} alt="" />
  </td>
  <td>{item.productName}</td>
  <td>${item.price}</td>
  <td>{item.quantity}</td>
  <td>
    <i
      onClick={handleDelete}
      class="ri-delete-bin-line"
    ></i>
  </td>
</tr>)
;
}


export default Cart;
