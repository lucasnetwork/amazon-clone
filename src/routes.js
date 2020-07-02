import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Home from './Components/Pages/Home'
import Product from './Components/Pages/Product'
import Cart from './Components/Pages/cart'
const Routes = () => (
    <Router>
        <Route exact component={Home} path="/"/>
        <Route component={Product} path="/product"/>
        <Route component={Cart} path="/Cart"/>
    </Router>
)

export default Routes