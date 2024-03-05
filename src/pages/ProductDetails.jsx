import React from "react";
import CommonSection from "../components/UI/CommonSection";
import { Container, Col, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import products from "../assets/data/products";
import "../styles/product_details.css";
import { motion } from "framer-motion";
import { useState } from "react";
import ProductList from "../components/UI/ProductList";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";
const ProductDetails = () => {
  const dispatch = useDispatch()
  const [tab, setTab] = useState("desc");
  const [rating,setRating]=useState(null)
  const reviewUser=useRef('')
  const reviewMsg=useRef('')
  

  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const {
    imgUrl,
    productName,
    category,
    avgRating,
    reviews,
    price,
    description,
    shortDesc,
  } = product;
  console.log("product-->" + product);
  const relatedProducts=products.filter((item)=>item.category===category)
  const submitHandler=(e)=>{
    e.preventDefault()
    const reviewUserName=reviewUser.current.value
    const reviewUserMsg=reviewMsg.current.value
    const reviewObj={
      name:reviewUserName,
      msg:reviewUserMsg,
      rating:rating
    }
    console.log(reviewObj)
  }
  const addToCart=()=>{
      dispatch(cartActions.addItem({
        id,
        image:imgUrl,
        productName,
        price

      }))
      toast.success('Product Added Succesfully')
  }

  return (
    <>
      <CommonSection title={productName}></CommonSection>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={imgUrl} alt="logo"/>
            </Col>
            <Col lg="6">
              <div className="products_details">
                <h2>{productName}</h2>
                <div className="product_ratings d-flex align-items-center gap-3 mb-3 ">
                  <div>
                    <span >
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span >
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span  >
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span >
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span  >
                      <i class="ri-star-half-s-fill"></i>
                    </span>
                  </div>
                  <p>
                    <span>({avgRating}rating)</span>
                  </p>
                </div>
                <span className="product_price">${price}</span>
                <p className="mt-3">{shortDesc}</p>
                <motion.button whileTap={{ scale: 1.2 }} className="buy_btn" onClick={addToCart}>
                  Add To Cart
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="tap_wrapper d-flex align-items-center gap-5 mb-5">
                <h6
                  className={`${tab === "desc" ? "active_block" : " "}`}
                  onClick={() => {
                    setTab("desc");
                  }}
                >
                  Description
                </h6>
                <h6
                  className={`${tab === "revs" ? "active_block" : " "}`}
                  onClick={() => {
                    setTab("revs");
                  }}
                >
                  Reviews({reviews.length})
                </h6>
              </div>
              {tab === "desc" ? (
                <div className="tap_content">
                  <p>{description}</p>
                </div>
              ) : (
                <div className="product_review">
                  <div className="review_wrapper">
                    <ul>
                      {reviews.map((item, index) => (
                        <li key={index}>
                          <h6>Naaz</h6>
                          <span>{item.rating}(ratings)</span>
                          <p>{item.text}</p>
                        </li>
                      ))}
                    </ul>
                    <div className="review_form">
                      <form action="" onClick={submitHandler}>
                        <div className="form_group">
                          <h4>Leave your Experience</h4>
                          <input type="text" ref={reviewUser} placeholder="Enter name" required/>
                        </div>
                        <div className="form_group d-flex gap-5">
                         <motion.span whileTap={{scale:1.2}} onClick={()=>{setRating(1)}}>1<i class="ri-star-s-fill"></i></motion.span>
                         <motion.span  whileTap={{scale:1.2}} onClick={()=>{setRating(2)}}>2<i class="ri-star-s-fill"></i></motion.span>
                         <motion.span  whileTap={{scale:1.2}} onClick={()=>{setRating(3)}}>3<i class="ri-star-s-fill"></i></motion.span>
                         <motion.span  whileTap={{scale:1.2}} onClick={()=>{setRating(4)}}>4<i class="ri-star-s-fill"></i></motion.span>
                         <motion.span  whileTap={{scale:1.2}} onClick={()=>{setRating(5)}}>5<i class="ri-star-s-fill"></i></motion.span>
                        </div>
                        <div className="form_group">
                          <textarea ref={reviewMsg} row={4} type="text" placeholder="Review Message" required/>
                        </div>
                        <motion.button whileTap={{scale:1.2}} className="buy_btn" >Submit</motion.button>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </Col>
            <Col lg='12'>
              <h2 className="related_title">You might also like</h2>
              <ProductList data={relatedProducts}></ProductList>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ProductDetails;
