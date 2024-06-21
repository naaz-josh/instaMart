import React from "react";
// import productImg from "../assets/images/arm-chair-01.jpg";
import "../../styles/productCard.css";
import { Col } from "reactstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";
import { toast } from 'react-toastify';
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const ProductCard = ({ item,id,key}) => {

  const {attributes,listeners,setNodeRef,transform,transition,isDragging}=useSortable({id,dragOverlay: true})
  const style ={
    transition,
    transform: CSS.Transform.toString(transform),
    opacity: isDragging ? 0.5 : 1

    
  }
  const dispatch = useDispatch();

  const addToCart = () => {
    
    dispatch(
      cartActions.addItem({
        id: item.id,
        productName: item.productName,
        imgUrl: item.imgUrl,
        price: item.price,
        quantity: 1,
        totalPrice: item.price,
      })
    );
    toast.success('Product added successfully')
   
    
  };

  // console.log(item)
  return (

    <Col lg="3" md="4">
      <motion.div ref={setNodeRef}{...attributes}{...listeners} style={style} whileHover={{ scale: 0.9 }} className="product_items ">
        <div className="product_img">
       
         <Link to={`/shop/${item.id}`}><img src={item.imgUrl} alt="Chair Img" /></Link> 
        </div>
        <div className="p-2 product_info">
          <h3 className="product_name">{item.productName}
            {/* <Link to={`/shop/${item.id}`}></Link> */}
          </h3>
          <span>{item.category}</span>
        </div>

        <div className="product_card_bottom d-flex align-items-center justify-content-between p-2 ">
          <span className="price_tag">${item.price}</span>
          <motion.span whileTap={{ scale: 1.2 }} onClick={addToCart}>
            <i class="ri-add-line"></i>
          </motion.span>
        </div>
      </motion.div>
    </Col>
  );
};

export default ProductCard;
