import React from 'react'
import ProductCard from './ProductCard'
import { Col,Row} from "reactstrap";

const ProductList = ({data}) => {
   
  return (
    <Row>{
        data?.map((item,index)=>{
            
    
    return <ProductCard key={index} item={item}></ProductCard>
        })
    }</Row>
   

 

  
   
  )
}

export default ProductList