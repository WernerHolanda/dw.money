import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #f0f2f5;
        --red: #E52E4D;
        --green: #33CC95;
        --blue: #5429CC;

        --blue-light: #6933FF;

        --text-title: #363f5f;
        --text-body: #969CB3;

        --background:#f0f2f5;
        --shape: #FFFFFF;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    //aqui a font size do site irá ser base 16px, porém dessa forma ela irá se adaptando conforme abre ou diminui o site.
    //isso serve para dar ao site parâmetros ideais de uso
    html{
        @media (max-width:1080px) {font-size: 93,75%;} //15px
        @media (max-width: 720px) {font-size: 87,50%;} //14px
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;

    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    } 

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {opacity: 0.6; cursor: not-allowed;}

    .react-modal-overlay{
        border: solid black 5px;
        background: rgba(0, 0, 0, 0.5);

        position: fixed; //essa fixed é q faz com que fique sobreposto por cima e no meio somado ao center do justify
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
    
        display: flex;
        justify-content: center; //aqui de fato que centraliza o conteudo no meio da esquerda pra direita
        align-items: center; // aqui que centraliza de cima pra baixo no meio

    }
    .react-modal-content{
        border: solid black 5px;
        
        

        width: 100%; //100% da tela limitado a 560px
        max-width: 576px;
        background: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: 0.24rem;

    }
`