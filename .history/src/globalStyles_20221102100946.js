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
        overflow-x: hidden;

        ::-webkit-scrollbar{
            background-color: #191970;
            width: 2px;
            height: 2px;
            border-radius: 300px;
        }

        ::-webkit-scrollbar-thumb{
            background-color: #fff;
            border-radius: 300px;
        }

        }
`

export default GlobalStyle