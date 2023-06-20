import styled from 'styled-components';
import { darken, transparentize } from 'polished'; //polished é um yarn add que usa js pra manipular e alterar as cores e efeitos do css. a usada aqui foi a darken, esta escurece o botão//

export const Container = styled.form`
        border-radius: 0.25rem;
    
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

    button[type="submit"] {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: var(--green);
        color: #FFF;
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;

        &hover{

        }
    }

    button.Botao-fechar {
        color: red;
        position: fixed right;
        margin-left: 90%;

    }
`;

 export const TransactionTypeContainer = styled.div `
    margin: 1rem  0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
 `;

 interface RadioBoxProps {
    isactive: true | false; //boolean;// a ideia aqui é dizer que dentro das propriedades da Radiobox, o isActiv será do tipo booleado, .'. ou estará ativo ou não estará ativo;
    activecolor: 'green' | 'red';//activeColo será então ou verde ou vermelho
 };

 const colors = {
    green: '#33CC95',
    red: '#E52E40'
 };

 export const RadioBox = styled.button<RadioBoxProps>`
    
        height: 4rem;
        border: 1px solid #d7d7d7;
        border-radius: 0.25rem;
        // $ significa uma interpolação. em seguida, vem uma função. E toda vez q eu tiver uma interpolação com uma função-
        //- isso significa que essa função passará quando o RadioBox for solicitado.
        // se a propriedade isactive for true '?' eu quero transaprentizar ela com as configs a seguir.
        // senão ':' eu quero que ela fique apenas transparent-obs esse transparente está escrito com aspas simples pois está em javascript. 
        background: ${(props) => props.isactive 
        ? transparentize (0.7, colors[props.activecolor]) 
        : 'transparent'
        };
        
        display: flex;
        align-items: center;
        justify-content: center;

        transition: border-color 0.2s;

        &:hover {
            border-color: ${darken(0.1, '#d7d7d7')};
        }
    
    img {
        height: 20px;
        width: 20px;
    }

    span {
        display: inline-block;
        margin-left: 1rem;
        font-size: 1rem;
        color: var(--text-title);
    }
 `;