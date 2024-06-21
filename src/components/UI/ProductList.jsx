import React from 'react'
import ProductCard from './ProductCard'
import {Row} from "reactstrap";
import {SortableContext, horizontalListSortingStrategy} from '@dnd-kit/sortable'
const ProductList = ({data}) => {
  console.log(data)
   return (
    <SortableContext items={data} strategy={horizontalListSortingStrategy}>
      <Row>{
        data?.map((item,index)=>{
          return <ProductCard key={item.id} item={item} id={item.id}></ProductCard>
        })
    }</Row>
    </SortableContext>
    
  ) 
}

export default ProductList