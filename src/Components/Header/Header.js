import React from 'react'
import {FiShoppingCart as Car, FiSearch as Search} from 'react-icons/fi'
import Content from './styles'
const Header = () =>{
    return(
        <Content>
            <h1>Eufrates</h1>
            <form className="search">
                <select>
                    <option selected="selected" value="search-alias=aps">All Departments</option>
                </select>
                <input type="search"/>
                <Search/>
            </form>

            <Car id="cart" />
        </Content>
    )
}

export default Header