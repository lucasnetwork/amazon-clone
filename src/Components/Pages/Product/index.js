import React from 'react'
import {ProductContent,ImagesContent,InforContent,TitleContent,BuyContent,CommentContent} from './styles'
import Comment from '../../Comment'
const Product = () =>{
    return(
        <>
            <ProductContent>
                <ImagesContent>
                    <div className="images">
                        <img src="https://images.ctfassets.net/hrltx12pl8hq/17iLMo2CS9k9k3d2v9uznb/d3e7080e01a1aedca423eb220efc23ee/shutterstock_1096026971_copy.jpg?fit=fill&w=480&h=400"/>
                        <img src="https://images.ctfassets.net/hrltx12pl8hq/17iLMo2CS9k9k3d2v9uznb/d3e7080e01a1aedca423eb220efc23ee/shutterstock_1096026971_copy.jpg?fit=fill&w=480&h=400"/>
                        <img src="https://images.ctfassets.net/hrltx12pl8hq/17iLMo2CS9k9k3d2v9uznb/d3e7080e01a1aedca423eb220efc23ee/shutterstock_1096026971_copy.jpg?fit=fill&w=480&h=400"/>
                        <img src="https://images.ctfassets.net/hrltx12pl8hq/17iLMo2CS9k9k3d2v9uznb/d3e7080e01a1aedca423eb220efc23ee/shutterstock_1096026971_copy.jpg?fit=fill&w=480&h=400"/>
                        <img src="https://images.ctfassets.net/hrltx12pl8hq/17iLMo2CS9k9k3d2v9uznb/d3e7080e01a1aedca423eb220efc23ee/shutterstock_1096026971_copy.jpg?fit=fill&w=480&h=400"/>
                    </div>
                        <img src="https://images.ctfassets.net/hrltx12pl8hq/17iLMo2CS9k9k3d2v9uznb/d3e7080e01a1aedca423eb220efc23ee/shutterstock_1096026971_copy.jpg?fit=fill&w=480&h=400"/>
                        
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
                    <span>50,00R$</span>
                    <span>Em estoque</span>
                    <div>
                        <label>Quantidade</label>
                        <input type="number"/>
                    </div>
                    <button>Comprar</button>
                </BuyContent>
            </ProductContent>
            <CommentContent>
                <Comment/>
            </CommentContent>
        </>
    )
}

export default Product