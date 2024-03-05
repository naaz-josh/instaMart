import React, { useEffect } from "react";
import { useFormik,useState } from "formik";
import * as Yup from "yup";
import { Container, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/login.css";
import {toast} from 'react-toastify'
import { useNavigate } from "react-router-dom";
import { useGetProductsQuery } from "../redux/api/apiSlice";



const Login = () => {
  const { data: products } = useGetProductsQuery();
  console.log(products);
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
      localStorage.setItem("user", JSON.stringify(userData));
      
      toast.success('You are Logged In !')
      navigate('/checkout')

      
    },
  });
  // const logout = () => {
  //   // Clear user data from localStorage
  //   localStorage.removeItem("user");
  //   toast.success('You are Logged Out !')
    
  // };

  useEffect(()=>{
    const user= JSON.parse(localStorage.getItem("user"))
    if(user){
      alert("User already logged in")
    }
  },[])
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" className="m-auto text-center">
            <h3 className="form-title fw-bold fs-4 mb-3">Login</h3>
            <form className="login_form" onSubmit={formik.handleSubmit}>
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
                <Link to="/signup">Create an account</Link>
              </p>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
