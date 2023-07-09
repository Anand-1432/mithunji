import { Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import SignUp from "./pages/signup/SignUp"
import Verification from "./pages/verification/Verification"
import Business from "./pages/business/Business"
import BusinessRegister from "./pages/business-register/BusinessRegister"
import DashBoard from "./pages/dashBoard/DashBoard"
import Products from "./pages/products/Products"
import AddProduct from "./pages/add-product/AddProduct"

//------------------------------ Routes ---------------------//
export const home = "/";
export const login = "/login";
export const signup = "/signup";
export const products = "/products";
export const dashBoard = "/dashboard";
export const base_add_product = "/add-product";
export const add_product = "/add-product/:url";
export const verification = "verification"
export const business = "/business";
export const business_register = "/business-register";

const App = () => {


  return (
    <>
      <Routes>
        <Route path={home} element={<Home />} />
        <Route path={login} element={<Login />} />
        <Route path={signup} element={<SignUp />} />
        <Route path={dashBoard} element={<DashBoard />} />
        <Route path={products} element={<Products />} />
        <Route path={add_product} element={<AddProduct />} />
        <Route path={verification} element={<Verification />} />
        <Route path={business} element={<Business />} />
        <Route path={business_register} element={<BusinessRegister />} />
      </Routes>
    </>
  )
}

export default App