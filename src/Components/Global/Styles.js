import {createGlobalStyle} from 'styled-components'
import Roboto from '../../fonts/Roboto-Regular.ttf'
const Global = createGlobalStyle`
    @font-face{
        font-family:'Roboto';
        src:url(${Roboto});
    }
    *{
        font-family:'Roboto';
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-size:12px;
    }
    .App{
        display:flex;
        flex-direction:column
    }
`

export default Global