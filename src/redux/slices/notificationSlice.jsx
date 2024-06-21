import { createSlice } from "@reduxjs/toolkit";

const initialState={
    notifications:[],
    newNotifications:[],
    totalNotify:0
}

const notificationSlice=createSlice({
     name:"notifications",
     initialState,
     reducers:{
          addnotification:()=> {
                  
          },
          
     }
})

export default notificationSlice.reducers