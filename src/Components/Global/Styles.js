import {createGlobalStyle} from 'styled-components'

const Global = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-size:12px;
    }
    html,body,#root,.App{
        width:100%;
        height:100%;
    }
    .App{
        display:flex;
        flex-direction:column
    }
`

export default Global