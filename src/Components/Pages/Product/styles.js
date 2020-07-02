import styled from 'styled-components'

const ProductContent = styled.div`
    display:flex;
    height:630px;
    background-color:#fff;
    padding:20px;
    padding-top:50px;
    @media(max-width: 1060px){
        flex-direction:column;
        height:1000px;
    }
    border-bottom:1px solid #eee;
`
const ImagesContent = styled.div`
    display:flex;
    & > img{
        margin-left:30px;
        height:200px;
    }
    height:auto;
    width:400px;
    .images {
        display:flex;
        flex-direction:column;
        border-right:1px solid #eee;
        img{
            margin-top:10px;
            width:40px;
        }
    }
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

    display:flex;
    flex-direction:column;
    padding:20px;
    width:200px;
    height:250px;
    margin:30px;
    margin-right:0;
    box-shadow:-2px 5px 10px 5px rgba(0,0,0,0.2);
    span:first-child{
        font-size:1.7em;
        margin-bottom:10px;
        color:red;
    }
    span{
        font-size:1.5em;
        color:green;
    }
    div{
        display:flex;
        input{
            margin-left:10px;
            width:25px;
        }
        margin-top: 50px;
    }
    button{
        margin-top:auto;
        height:30px;
        background:linear-gradient(to bottom,#f6c88f,#ed9220);
        border:none;
        color:white;
    }
`
const CommentContent = styled.div`
    width:100%;
    border-top:1px solid #eee;
    background-color:#fff;
    padding: 40px 200px;
    height:100%;
`
export {ProductContent,ImagesContent,InforContent,TitleContent,BuyContent,CommentContent}