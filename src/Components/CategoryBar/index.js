import React from 'react'
import Content from './styles'
import {Link} from 'react-router-dom'
const CategoryBar = ({images})=>{

    return(
        
        <Content>
            <h3>Category</h3>
            <div>
                {images.map(image => (
                    <Link to="product">
                        <img src={image}/>
                    </Link>
                ))}
            </div>
        </Content>
    )
}

export default CategoryBar