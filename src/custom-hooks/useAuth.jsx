// import React from 'react'
import { useEffect,useState } from 'react'
import { auth } from '../firebase.config'
import {onAuthStateChanged} from 'firebase/auth'

const useAuth = () => {

    const [currentUser,setCurrentUser]=useState({})
    // const [isloading,setLoading]=useState(true)
    console.log(currentUser)

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                setCurrentUser(user)
            }

            else{
                setCurrentUser(null)
            }
        })
    },[currentUser])

  return {
    currentUser,
    // isloading
  }
}

export default useAuth;