import styled from 'styled-components'

const Content = styled.div`
    width:100%;
    height:200px;
    .profile{
        display:flex;
        align-items:center;
        img{
            background-color:#333;
            width:50px;
            height:50px;
            border-radius:50%;
        }
        h4{
            margin-left:20px;
            font-size:1.4em;
        }
    }
    p{
        margin-top:10px;
        font-size:1.2em
    }
    .buttons-content{
        margin:10px 0;
        button{
            padding:5px;
            width:100px;
            margin-left:10px;
            :first-child ~ button{
                background-color:#fff;
                border:none;
                border-bottom:1px dotted #aaa; 
                border-top:1px dotted #aaa;
                color:#888;

            }
            outline:none;
        }
    }
`

export default Content