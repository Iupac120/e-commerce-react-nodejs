import React from "react";
import Cart from "./pages/Cart";
import Home from './pages/Home'
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Pay from "./pages/Pay"
import Success from "./pages/Success"

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useRouteMatch,
    Navigate,
  } from "react-router-dom";
  

const App =()=>{
    const user = true
    return(
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/products/:category" element={<ProductList/>}/>
                    <Route path="/product/:id" element={<Product/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/pay" element={<Pay/>}/>
                    <Route path="/success" element={<Success/>}/>
                    <Route path="/login" element={user ? <Navigate to="/" replace /> :  <Login />} />
                    <Route path="/register" element={user?<Navigate to="/" replace/>: <Register/>}/>
                </Routes>
            </Router>
    
    )
}

export default App