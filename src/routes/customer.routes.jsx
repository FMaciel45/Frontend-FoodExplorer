import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/home";
import { Dish } from "../pages/dish";
import { Profile } from "../pages/profile";
import { NotFound } from "../pages/notFound";
import { Cart } from "../pages/cart";
import { ConfirmOrder } from "../pages/confirmOrder";

export function CustomerRoutes() {

  return(
    <Routes>

      <Route path = "/" element = {<Home/>}/>
      <Route path = "/dish/:id" element = {<Dish/>}/>
      <Route path = "/profile" element = {<Profile/>}/>
      <Route path = "/cart" element = {<Cart/>}/>
      <Route path = "/confirm" element = {<ConfirmOrder/>}/>

      <Route path = "*" exact = {true} element = {<NotFound/>}/>
      
    </Routes>
  )
}