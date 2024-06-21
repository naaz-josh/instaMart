import React, { useRef } from "react";
import { Container, Row } from "reactstrap";
import { NavLink,Link } from "react-router-dom";
import logo from "../../assets/images/eco-logo.png";
import user_icon from "../../assets/images/user-icon.png";
import "./Header.css";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import useAuth from "../../custom-hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";
import { toast} from "react-toastify";
import { useNavigate } from "react-router-dom";


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
  
  const {currentUser}=useAuth(null)
  const totalQuantity=useSelector(state=>  (state.cart.totalQuanity))
  console.log("totalQuantity" + totalQuantity)
  const navigate =useNavigate()
 const profileActionsRef=useRef(null)
  // let showNotification=()=>{
  //      return <Notification></Notification>
  // }


  const toggleProfileActions=()=>
    profileActionsRef.current.classList.toggle('.show_profile-actions')
    const logout=()=>{
      signOut(auth).then(
       ()=>{toast.success("Logged Out")
       navigate("/home")}
      ).catch((err)=>{
        toast.error(err.message)
      })
    }
  
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
              {/* <span className="notification_icon">
              <i class="ri-notification-2-fill" ></i>
              <span className="badge">{totalQuantity}</span>
              </span> */}

              {/* <span className="fav__icon">
                <i class="ri-heart-line"></i>
                <span className="badge">1</span>
              </span> */}

              <span className="cart__icons"><Link to="/cart"><i class="ri-shopping-cart-line"></i></Link>
              <span className="badge">{totalQuantity}</span>
              </span>
              <div className="profile">
                <motion.img
                  whileTap={{ scale: 1.2 }}
                  src={ currentUser? currentUser.photoURL : user_icon}
                  alt="user"
                ></motion.img>
               <div className="profile_actions" ref={profileActionsRef} onClick={toggleProfileActions}>{
                currentUser? <span onClick={logout}>Logout</span>:<div className="d-flex align-items-center justify-content-center flex-column"><Link to="/sign-up">Signup</Link>
                 <Link to="/login">Login</Link></div>
               
               }</div>
              </div>
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
