import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: "Bakemono Text Bold";
        src: local("Bakemono Text Bold"),
        url("./fonts/BakemonoTextBold.ttf") format("truetype");
        font-weight: normal;
    }

    @font-face {
        font-family: "Bakemono Text Extrabold";
        src: local("Bakemono Text Extrabold"),
        url("./fonts/BakemonoTextExtrabold.ttf") format("truetype");
        font-weight: normal;
    }

    @font-face {
        font-family: "Bakemono Text Regular";
        src: local("Bakemono Text Regular"),
        url("./fonts/BakemonoTextRegular.ttf") format("truetype");
        font-weight: normal;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
    }

    body {
        background: ${(props) => props.theme.background};
        color: ${(props) => props.theme.baseText};
    }
    
    body, input, textarea, button {
        font-family: 'Bakemono Text Regular';
        font-size: 1rem;
    }
`
