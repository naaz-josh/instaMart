import React, { useMemo } from "react";
import { useState,useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import hero from "../assets/images/hero-img.png";
import "../styles/home.css";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion'
import Service from "../services/Service";
import ProductList from "../components/UI/ProductList";
import products from "../assets/data/products";
import counterImg from '../assets/images/counter-timer-img.png'
import Clock from "../components/UI/Clock";




const Home = () => {

  const [Trendingdata,setTrendingData]=useState([])
  // const [BestSalesData,setBestSalesData]=useState([])
  const [mobileProducts,setmobileProducts]=useState([])
  const [wirelessProducts,setwirelessProducts]=useState([])
  const[popularProducts,setpopularProducts]=useState([])
  const year = new Date().getFullYear();
  // console.log(year);
  useEffect(()=>{
    const filteredTrendingProducts=products.filter((product)=> product.category==="chair")
      setTrendingData(filteredTrendingProducts)
      console.log('render-trending')
    
      const filteredmobileProducts=products.filter((product)=> product.category==="mobile")
      setmobileProducts(filteredmobileProducts)
      const filteredwireLessProducts=products.filter((product)=> product.category==="wireless")
      setwirelessProducts(filteredwireLessProducts)
      const filteredpopularProducts=products.filter((product)=> product.category==="watch")
      setpopularProducts(filteredpopularProducts)

  },[])
  
   let bestSales=useMemo(()=>{
    const filteredBestSales=products.filter((product)=> product.category==="sofa")
    return filteredBestSales
    
    // setBestSalesData(filteredBestSales)
  },[])
  console.log(bestSales)
  return (
    <>
      <section className="hero_section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero_content">
                <p className="hero_subtitle">Trending Products in {year} </p>
                <h2>Keep your Furniture More Ergonimic and Modern</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum dolor expedita architecto, ducimus ea maiores,
                  veritatis, possimus explicabo officiis nulla natus unde libero
                  quas nemo pariatur illo dicta eligendi rem? 
                 </p>
                <motion.button whileTap={{scale:1.2}} className="buy_btn"><Link to='/shop'>SHOP NOW</Link></motion.button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero_img">
                <img src={hero} alt="hero_img" />
              </div>
            </Col>
          </Row>
        </Container>
       
      </section>
      <Service></Service>
      <section className="trending_products">
        <Container>
          <Row>
            <Col lg="12" md="4"className="text-center" >
                <h2 className="section_title">Trending Products</h2>
                <ProductList data={Trendingdata}></ProductList>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="Best_Sales">
        <Container>
        <h2 className="section_title text-center">Best Sales</h2>
       
                <ProductList data={bestSales}></ProductList>
        
        </Container>
      </section>
      <section className="timer_count">
        <Container>
          <Row>
            <Col lg='6' md='6'>
              
              <div className="clock_top-center">
                <h4 className="text-white fs-5 mb-2">Limited Offer</h4>
                <h3 className="text-white fs-4 mb-3">Quality Items</h3>
              </div>
             <Clock></Clock>
        
              <motion.button whileTap={{scale:1.2}}className="buy_btn store_btn"><Link to="/shop">Visit Store</Link></motion.button>
            </Col>
            <Col lg='6' md='6'  className="text-end">
              <img src={counterImg} alt="counterImg"/>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="new-arrival">
        <Container>
         <Row>
         <Col lg="12" md="4" className="text-center mb-5" >
                <h2 className="section_title">New Arrivals</h2>
                <ProductList data={[...mobileProducts,...wirelessProducts]}></ProductList>
                {/* <ProductList data={mobileProducts}></ProductList>
                <ProductList data={wirelessProducts}></ProductList> */}
                
        </Col>
         </Row>
        </Container>
      </section>
      <section className="popular_in_products">
        <Container>
         <Row>
         <Col lg="12" md="4"className="text-center mb-5" >
                <h2 className="section_title">New Arrivals</h2>
                <Col>
                
                <ProductList data={popularProducts}></ProductList></Col>
                
        </Col>
         </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
