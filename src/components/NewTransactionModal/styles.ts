import styled from 'styled-components';

export const Container = styled.div`

    //container {
        border-radius: 0.25rem;

    //}
    
    h2 {
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    input {
        width: 100%;
        border-radius: 0.25rem;
        border: 1px solid #d7d7d7 ;
        font-weight: 400;
        font-size: 1rem;
        height: 3rem;
        padding: 0 1.5rem;
        margin-bottom: 0.25rem;
    }

    button {
        border: 0;
        font-weight: 600;

        transition: filter 0.3s;
        &:hover {
    filter: brightness(0.9);
    }

    }

    button.Entrada {
        margin-left: 1rem;
        margin-right: 0.80rem;
        margin-bottom: 0.25rem;
        height: 3rem;
        border-radius: 0.25rem;
        background: var(--background);
        color: black;
        width: 45%;
    }

    button.Saida {
        //margin: 0.20rem;
        height: 3rem;
        border-radius: 0.25rem;
        background: var(--background);
        color: black;
        width: 45%;
        //image-rendering: ;
    }

    button.Cadastrar {
        margin-top: 1rem;
        height: 3rem;
        border-radius: 0.25rem;
        background: var(--green);
        width: 100%;
        //margin-right: 2rem;
    }

    button.Botao-fechar {
        color: red;
        position: fixed right;
        margin-left: 90%;

    }
`;