import React from 'react'
import {ProductContent,ImagesContent,InforContent,TitleContent,BuyContent} from './styles'
const Product = () =>{
    return(
        <ProductContent>
            <ImagesContent>

            </ImagesContent>
            <InforContent>
                <TitleContent>
                    <h2>Playstation</h2>
                    <span>by sony</span>
                </TitleContent>
                <p className="description">
                O mercado de ações sobe e cai. Algumas pessoas ganham dinheiro com esses movimentos, enquanto outras ficam tentando entender o porquê dessa oscilação. Antes de começar a operar na Bolsa, você precisa decidir em que lado deseja estar. Caso deseje estar ao lado dos que ganham dinheiro, este é o livro certo para você.
                </p>
            </InforContent>
            <BuyContent>

            </BuyContent>
        </ProductContent>
    )
}

export default Product