import { createGlobalStyle } from 'styled-components'

import BakemonoTextBoldUrl from './fonts/BakemonoTextBold.ttf'
import BakemonoTextExtraboldUrl from './fonts/BakemonoTextExtrabold.ttf'
import BakemonoTextRegularUrl from './fonts/BakemonoTextRegular.ttf'

export const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: "Bakemono Text Bold";
        src: local("Bakemono Text Bold"),
        url(${BakemonoTextBoldUrl}) format("truetype");
        font-weight: normal;
    }

    @font-face {
        font-family: "Bakemono Text Extrabold";
        src: local("Bakemono Text Extrabold"),
        url(${BakemonoTextExtraboldUrl}) format("truetype");
        font-weight: normal;
    }

    @font-face {
        font-family: "Bakemono Text Regular";
        src: local("Bakemono Text Regular"),
        url(${BakemonoTextRegularUrl}) format("truetype");
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
        line-height: 1.625rem;
    }
    
    body, input, textarea, button, select {
        font-family: 'Bakemono Text Regular';
        font-size: 1rem;
        line-height: 1.625rem;
    }

    html {
      @media only screen and (max-width: 1600px) {
        font-size: 93.75%;
      }	

      @media only screen and (max-width: 1200px) {
        font-size: 87.5%;
      }
      
      @media only screen and (max-width: 900px) {
        font-size: 81.25%;
      }

      @media only screen and (max-width: 600px) {
        font-size: 75%;
      }
    }


`
