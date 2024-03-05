import React from 'react'
import CommonSection from '../components/UI/CommonSection'
import {Container,Row,Col} from 'reactstrap'
import '../styles/shop.css'
import { useState,useEffect } from 'react'
import products from '../assets/data/products'
import ProductList from '../components/UI/ProductList'

const Shop = () => {


  const [productsData,setProductData]=useState(products)
  const [filteredValue,seFilteredValue]=useState('')
  console.log(productsData)

  useEffect(()=>{
    console.log('filteredValue'+filteredValue)
    if(filteredValue==='' || filteredValue==="All" ){
      setProductData(products)
    }
   
    else{
      const fiteredProducts=products.filter((item)=>
                 item.category===filteredValue
            )
            setProductData(fiteredProducts)
    }
  },[filteredValue])
   
  
  const handleFilter=e=>{
       const filteredValue=e.target.value
       console.log(filteredValue)
       seFilteredValue(filteredValue)
      }

  const handleSearch=e=>{
    const searchItem=e.target.value
    console.log(searchItem)
    const SearchedProducts=products.filter(item=>item.category.toLowerCase().includes(searchItem.toLowerCase()))
    setProductData(SearchedProducts)
  }
  return (

   <><CommonSection title="Products"></CommonSection>
    <section>
      <Container>
        <Row>
         <Col lg="3" md="6">
          <div className="filter_widget">
            <select onChange={handleFilter}>
              <option value="All">Filter By Category</option>
              <option value="sofa">Sofa</option>
              <option value="mobile">Mobile</option>
              <option value="chair">Chair</option>
              <option value="watch">Watch</option>
              <option value="wireless">Wireless</option>
            </select>
          </div>
         </Col>
         <Col lg="3" md="6" className='text-end'>
         <div className="filter_widget ">
            <select >
              <option >Sort By</option>
              <option value="ascending">Ascending</option>
              <option value="descending">Descending</option>
           
            </select>
          </div>
         </Col>
         <Col lg="6" md="12">
          <div className="search_box">
          <input type="text" placeholder='Search...' onChange={handleSearch}></input>
          <span><i class="ri-search-line"></i></span>
          </div>
         </Col>
        </Row>
      </Container>
      </section>
      <section>
        <Container>
          <Row>
            {
            productsData.length===0?<h1>No Products Found!</h1>:<ProductList data={productsData}></ProductList>
          }
          </Row>
        </Container>
      </section>
      </>
  )
}

export default Shop