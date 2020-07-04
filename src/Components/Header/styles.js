import styled from 'styled-components'

const Content = styled.header`
    display:flex;
    justify-content:space-between;
    width:100%;
    background-color:#131921;
    height:50px;
    padding:10px 40px;
    color:#fff;
    a{
        color:#fff;
        text-decoration:none;
        h1{
            font-size:2.5em;
        }

    }
    .search{
        display:flex;
        width:50%;
        background-color:#fff;
        border-radius:4px;
        overflow:hidden;
        select{
            font-size:1em;
            outline:0;
        }
        input{
            height:100%;
            flex:1;
            outline:0;
            border:none;
        }
        svg{
            font-size:25px;
            background-color:#e77600;
            height:100%;
            width:50px;
        }
        &.active{
            border:1px solid #e77600;
        }
    }
    #cart{
        font-size:35px;
        cursor:pointer;
    }
`
export default Content