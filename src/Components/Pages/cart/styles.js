import styled from 'styled-components'

const Content = styled.div`
    height:100%;
    background-color:#fff;
    padding:20px;
    h3{
        font-size:2.0em
    }
    .products{
        padding:20px 0;
        .product{
            display:flex;
            border-top:1px solid #eee;
            margin-top:10px;
            padding-top:10px;
            .title{
                display:flex;
                justify-content:space-between;
                h4{
                    font-size:1.3em;
                    font-weight:200;
                }
                span{
                    font-size:1.3em;
                    color:green;
                    font-weight:600;
                }
            }
            .button-content{
                margin:40px 0;
                button{
                    border:none;
                    background-color:white;
                    border-top: 1px solid #eee;
                    border-bottom: 1px solid #eee;
                    padding:10px;
                    margin-right:10px;
                    outline:none;
                }
            }
        }
    }
`

export default Content