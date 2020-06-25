import styled from 'styled-components'

const Content = styled.section`
    flex:1;
    background-color:#eee;
    .content{
        padding:50px;
        padding-top:0;
    }
`
const ContentCard = styled.div`
    display:flex;
    justify-content:space-between;
    margin-bottom:20px;
`

export {Content,ContentCard}