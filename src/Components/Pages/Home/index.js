import React,{useState} from 'react'
import {Content,ContentCard} from './styles'
import Card from '../../SpotlightCard'
import CategoryBar from '../../CategoryBar'
import Slider from '../../Slider'
const Home = () =>{
    const [cardItens,setCardItens] = useState(
        [
            {img:"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"},
            {img:"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"},
            {img:"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"},
            {img:"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"},
        ]
    )
    return(
        <Content>
            <Slider/>
            <div className="content">
                <ContentCard>
                    {cardItens.map(card => <Card image={card.img} text={card.text}/>)}
                </ContentCard>
                <CategoryBar images={["https://images-na.ssl-images-amazon.com/images/I/41XCql8cjsL._AC_SY200_.jpg"]}/>
                <CategoryBar images={["https://images-na.ssl-images-amazon.com/images/I/41XCql8cjsL._AC_SY200_.jpg"]}/>
                <CategoryBar images={["https://images-na.ssl-images-amazon.com/images/I/41XCql8cjsL._AC_SY200_.jpg"]}/>
                <CategoryBar images={["https://images-na.ssl-images-amazon.com/images/I/41XCql8cjsL._AC_SY200_.jpg"]}/>
            </div>
        </Content>
    )
}

export default Home