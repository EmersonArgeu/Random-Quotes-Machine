import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: ${(props) => props.theme.randomTheme};
        color: ${(props) => props.theme.randomTheme};
        -webkit-font-smoothing: antialiased;

    }

    body, input, textarea, button{
        font-family: 'Raleway', sans-serif;
        font-weight: 400;
        font-size: 1rem;

    }
`
