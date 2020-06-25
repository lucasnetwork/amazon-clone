import styled from 'styled-components'

const Slide = styled.img`
    display:none;
    height:600px;
    width:100%;
    object-fit:cover;
    zoom:1;
    &.active{
        display:block;
    }
`
const SlideContent = styled.div`
    height:300px;
    div{
        display:flex;
    }
`

export {Slide,SlideContent}