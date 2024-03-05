import {configureStore} from '@reduxjs/toolkit'
import cartSlice from './slices/cartSlice'
import { apiSlice } from '../redux/api/apiSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
console.log(apiSlice.red)
const store=configureStore({
    reducer:{
        cart: cartSlice,
        [apiSlice.reducerPath]: apiSlice.reducer,
        
      
    }
})
export default store
setupListeners(store.dispatch)