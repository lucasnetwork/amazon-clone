import React from 'react'
import {Link} from 'react-router-dom'
import {FiShoppingCart as Cart, FiSearch as Search} from 'react-icons/fi'
import Content from './styles'
const Header = () =>{
    return(
        <Content>
            <Link to="/">
                <h1>Eufrates</h1>
            </Link>
            <form className="search">
                <select>
                    <option selected="selected" value="search-alias=aps">All Departments</option>
                </select>
                <input type="search"/>
                <Search/>
            </form>

            <Link to="/cart">
                <Cart id="cart" />
            </Link>
        </Content>
    )
}

export default Header