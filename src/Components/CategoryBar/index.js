import React from 'react'
import Content from './styles'
const CategoryBar = ({images})=>{

    return(
        <Content>
            <h3>Category</h3>
            <div>
                {images.map(image => (
                    <img src={image}/>
                ))}
            </div>
        </Content>
    )
}

export default CategoryBar