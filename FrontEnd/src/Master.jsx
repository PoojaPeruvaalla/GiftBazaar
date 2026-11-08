import { BrowserRouter, Route, Routes } from "react-router";
import { useState } from "react";

import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Shop from "./Shop";
import WishList from "./WishList";
import NavBar from "./NavBar";
import Cart from "./Cart";
import About from "./About";
import Contact from "./Contact";


const Master = () => {

  const [like, setLike] = useState([]);
  const obj = {
    like,
    setLike
  };

  const uniqueLikes = new Set(like);
  console.log(uniqueLikes);

  const [cartItem,setCartItem]=useState([])
  const obj1={
    cartItem,
    setCartItem
  }
  
  const cartList=new Set(cartItem)


  return (
    <BrowserRouter>

      <NavBar count={uniqueLikes.size} count1={cartList.size} />

      <Routes>
        <Route
          path="/"
          element={<Home/>}
        />

        <Route
        path="/about"
        element={<About/>}/>

        <Route
        path="/contact"
        element={<Contact/>}/>
        
        <Route
          path="/shop"
          element={<Shop props={obj}/>}
        />


        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/wish"
          element={<WishList prop={uniqueLikes} prop1={obj1} />}
        />
        <Route
          path="/cart"
          element={<Cart prop={cartList} prop1={obj1}/>}        
        />
       
      </Routes>

    </BrowserRouter>
  );
};

export default Master;