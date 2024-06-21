import React from 'react'
import{Col,Row,Container} from 'reactstrap'
import '../services/services.css'
import dataServices from '../assets/data/serviceData'
import { motion } from 'framer-motion'


const Service = () => {
  return (
  <Container>
    <Row>
       {
        dataServices.map((item,index)=>
            <Col lg="3" md="4" key={index}>
            <section className="service_content" >
                <motion.div whileHover={{scale:1.1}}className="service_Item"  key={item.id} style={{background:`${item.bg}`}}>
                <span><i class={item.icon}></i></span>
                   <div >
                        <h3>{item.title}</h3>
                        <p>{item.subtitle}</p>
                    </div> 
                </motion.div>
                </section>
                    </Col>
        
        )}

   
   
    </Row>
  </Container>
  )
}

export default Service