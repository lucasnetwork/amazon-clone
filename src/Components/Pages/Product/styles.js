import styled from 'styled-components'

const ProductContent = styled.div`
    display:flex;
    height:630px;
    background-color:#fff;
    padding:20px;
    @media(max-width: 1060px){
        flex-direction:column;
        height:1000px;
    }
    border-bottom:1px solid #eee;
`
const ImagesContent = styled.div`
    height:100%;
    width:400px;
`
const InforContent = styled.div`
    flex:1;
    p{
        line-height:1.5;
    }
`
const TitleContent = styled.div`
    height:100px;
    border-bottom:1px solid #eee;
    h2{
        font-size:3.5em;
    }
`
const BuyContent = styled.div`
    width:300px;
    height:500px;
    margin:30px;
    box-shadow:-2px 5px 10px 5px rgba(0,0,0,0.2);
`
export {ProductContent,ImagesContent,InforContent,TitleContent,BuyContent}