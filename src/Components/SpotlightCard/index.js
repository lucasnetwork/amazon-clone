import React from 'react'
import Content from './styles'

const SpotlightCard = ({image,text})=>{
    return(
        <Content>
            <h3>Card</h3>
            <img src={image} alt={text}/>
            <a href>shop now</a>
        </Content>
    )
}

export default SpotlightCard