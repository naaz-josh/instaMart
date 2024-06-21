import {Route,Routes,Navigate} from 'react-router-dom'
import Home from '../pages/Home.jsx'
import Cart from '../pages/Cart.jsx'
import Checkout from '../pages/Checkout.jsx'
import Login from '../pages/Login.jsx'
import ProductDetails from '../pages/ProductDetails.jsx'
import Signup from '../pages/Signup.jsx'
import Shop from '../pages/Shop.jsx'
import ProtectedRoutes from './ProtectedRoute.js'




const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to="/home"/>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='shop' element={<Shop/>}></Route>
        <Route path='cart' element={<Cart/>}></Route>
        <Route path='checkout' element={<ProtectedRoutes><Checkout></Checkout></ProtectedRoutes>}></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='shop/:id' element={<ProductDetails/>}></Route>
        <Route path='sign-up' element={<Signup/>}></Route>
    </Routes>
  )
}

export default Router