import React from 'react'
import Product from './Product'
import Content from './styles'
const Cart = () =>{
    return(
        <Content>
            <h3>Carrinho de Compras</h3>
            <div className="products">
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>
        </Content>
    )
}

export default Cart