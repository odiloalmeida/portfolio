import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        width: 100vw;
        height: 1080px;
        display: grid;
        text-align: center;
        overflow: auto;
        }
`

export default GlobalStyle