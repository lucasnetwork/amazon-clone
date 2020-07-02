import React from 'react'

const Product = () =>{
    return(
        <div className="product">
            <img src="https://m.media-amazon.com/images/I/61tBuJYk5jL._AC_AA180_.jpg"/>
            <div>
                <div className="title">
                    <h4>Fone de Ouvido</h4>
                    <span>R$99,00</span>
                </div>
                <span>Em estoque</span>
                <div className="button-content">
                    <button>Excluir</button>
                    <button>Mover para o carrinho</button>
                    <button>Mover para lista de desejos</button>
                </div>
            </div>
        </div>
    )
}

export default Product