import React from "react";
import { Container, Row } from "reactstrap";
import { NavLink,Link } from "react-router-dom";
import logo from "../../assets/images/eco-logo.png";
import user_icon from "../../assets/images/user-icon.png";
import "./Header.css";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const nav_link = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "shop",
    display: "Shop",
  },
  {
    path: "cart",
    display: "Cart",
  },
];
const Header = () => {

  const totalQuantity=useSelector(state=>  (state.cart.totalQuanity))
  console.log("totalQuantity" + totalQuantity)
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav_wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
              <h1>MaltiMart</h1>
              
            </div>
            <div className="navigation">
              <ul className="menu">
                {nav_link.map((item, index) => (
                  <NavLink
                    to={item.path}
                    key={index}
                    className={(navClass) => {
                      return navClass.isActive ? "nav_active" : "";
                    }}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </ul>
            </div>
            <div className="nav__icons">
              <span className="fav__icon">
                <i class="ri-heart-line"></i>
                <span className="badge">1</span>
              </span>
              <span className="cart__icons"><Link to="/cart"><i class="ri-shopping-cart-line"></i></Link>
                
                <span className="badge">{totalQuantity}</span>
              </span>
              <span>
                <motion.img
                  whileTap={{ scale: 1.2 }}
                  src={user_icon}
                  alt="user"
                ></motion.img>
              </span>
            </div>
            <div className="mobile__menu">
              <span className="menu">
                <i class="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
