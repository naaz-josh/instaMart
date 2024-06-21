import React, { useState} from "react";
import { useFormik} from "formik";
import * as Yup from "yup";
import { Container, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/login.css";
import {toast} from 'react-toastify'
import { useNavigate } from "react-router-dom";
import { useGetProductsQuery,useGetSingleProductQuery } from "../redux/api/apiSlice";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";



const Login = () => {

  const [loading,setLoading]=useState(false)
  const { data: products } = useGetProductsQuery();
  const {data:singleProduct}=useGetSingleProductQuery("iPhone")
  console.log(products);
  console.log(singleProduct)

  const navigate= useNavigate()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("*Invalid email address")
        .required("*Required")
        .matches(
          /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
          "Must be a valid Gmail address"
        ),
      password: Yup.string()
        .min(8, "*Password must be at least 8 characters")
        .required("*Password is required")
        .matches(
          /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
          "Password must contain at least 8 characters, one uppercase, one number and one special case character"
        ),
    }),
    onSubmit: (values) => {
      const userData = { email: values.email , password : values.password };
      console.log(userData)
      // localStorage.setItem("user", JSON.stringify(userData));
      
      // toast.success('You are Logged In !')
      // navigate('/checkout')

      
    },
  });
  // const logout = () => {
  //   // Clear user data from localStorage
  //   localStorage.removeItem("user");
  //   toast.success('You are Logged Out !')
    
  // };


  const signIn= async(e)=>{
    e.preventDefault()
    setLoading(true)
   
    try{
      const userCredentials = await signInWithEmailAndPassword(auth,formik.values.email,formik.values.password)
      const user = userCredentials.user
      console.log(user)
      setLoading(false)
      toast.success("Successfully Logged In")
      navigate('/checkout')
  
    }
    catch(error){
      setLoading(false)
      toast.error(error.message)
    }
  }
  return (
    <section >
      <Container>
        <Row>
         {loading? <Col lg="12" className="text-center"><h5 className="fw-bold">...Loading</h5></Col>: <Col lg="6" className="m-auto text-center">
            <h3 className="form-title fw-bold fs-4 mb-3">Login</h3>
            <form className="login_form" onSubmit={signIn}>
              <input
                className="w-100"
                id="email"
                name="email"
                type="email"
                placeholder="Enter Email.."
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="error">{formik.errors.email}</div>
              ) : null}

              <input
                className="w-100"
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password here..."
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="error">{formik.errors.password}</div>
              ) : null}
              <button type="submit" className="login_btn" data-testid="login">Login</button>
            
              <p>
                Dont have an account?{" "}
                <Link to="/sign-up">Create an account</Link>
              </p>
            </form>
          </Col>}
        </Row>
      </Container>
    </section>
  );
};

export default Login;
