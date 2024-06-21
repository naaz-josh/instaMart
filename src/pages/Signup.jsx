import React, { useState} from "react";
import { useFormik} from "formik";
import * as Yup from "yup";
import { Container, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/login.css";
import {toast} from 'react-toastify'
import { useNavigate } from "react-router-dom";

import {createUserWithEmailAndPassword,updateProfile} from "firebase/auth"
import {getDownloadURL,uploadBytesResumable,ref} from "firebase/storage"
import {doc,setDoc} from "firebase/firestore"
import {auth} from "../firebase.config"
import {store} from "../firebase.config"
import { db } from "../firebase.config";




const Signup = () => {
  const [loading,setLoading]=useState(false)
  const navigate= useNavigate()
  
const signup= async(e)=>{ 
  e.preventDefault()
  setLoading(true)
 
  try{
    const userCredentials= await createUserWithEmailAndPassword(auth,formik.values.email,formik.values.password)
    console.log("usercred",userCredentials)
    const user = await userCredentials.user
    
    // console.log("user",user)
    const StorageRef= ref(store,`images/${Date.now() + formik.values.username}`)
  const uploadTask=uploadBytesResumable(StorageRef,formik.values.file)

  uploadTask.on((error)=>{
    toast.error(error.message)
  },()=>{
    getDownloadURL(uploadTask.snapshot.ref).then(async (downdURL)=>{
            //UPDATE USER Profile 

            await updateProfile(user,{
              displayName:formik.values.username,
              photoURL:downdURL
            });
            // store the data 
            await setDoc(doc(db,'users',user.uid),{
              uid:user.uid,
              displayName:formik.values.username,
              email:formik.values.email,
              photoURL:downdURL

            })
           
    })
  })
  setLoading(false)
  toast.success("Account created succesfully")
  navigate("/login")
  }
  catch(error){
         setLoading(false)
         toast.error("Something went wrong")
  }
  
  }
 
  

  const formik = useFormik({
    initialValues: {
      username:"",
      email: "",
      password: "",
      file:null
      
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
      const userData = { username: values.username,email: values.email , password : values.password,file:values.file};
      localStorage.setItem("user", JSON.stringify(userData));
      
      toast.success('You are Logged In !')
      navigate('/checkout')

      
    },
  });
  
 

  return (
    <section>
      <Container>
        <Row>
         {
          loading?<Col lg="12" className="text-center"><h5 className="fw-bold">...Loading</h5></Col>: <Col lg="6" className="m-auto text-center">
          <h3 className="form-title fw-bold fs-4 mb-3">Sign Up</h3>
          <form className="login_form" onSubmit={signup}>
            <input className="w-100"
              id="username"
              placeholder="UserName.."
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
           ></input>
            <input
              className="w-100"
              id="email"
              name="email"
              type="email"
              placeholder="Enter Email.."
              value={formik.values.email}
              // onChange={(e)=>{setEmail(e.target.value)}}
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
              // onChange={(e)=>{setPassword(e.target.value)}}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error">{formik.errors.password}</div>
            ) : null}
            <input className="W-100" type="file" value={formik.values.file}></input>
            <br />
            <button type="submit" className="login_btn" data-testid="login">Sign Up</button>
          
            <p>
              Already have an account?{" "}
              <Link to="/login">Login</Link>
            </p>
          </form>
        </Col>
         }
        </Row>
      </Container>
    </section>
  );
;
              }
export default Signup;
