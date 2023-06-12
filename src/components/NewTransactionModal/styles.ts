import styled from 'styled-components';
import { darken, transparentize } from 'polished'; //polished é um yarn add que usa js pra manipular e alterar as cores e efeitos do css. a usada aqui foi a darken, esta escurece o botão//

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

    //button.Entrada {
      //  margin-left: 1rem;
        //margin-right: 0.80rem;
        //margin-bottom: 0.25rem;
        //height: 3rem;
       // border-radius: 0.25rem;
      //  background: var(--background);
        //color: black;
        //width: 45%;
   // }

    //button.Saida {
      //  height: 3rem;
      //  border-radius: 0.25rem;
      //  background: var(--background);
      //  color: black;
      //  width: 45%;
        
    //}

    button.Cadastrar {
        margin-top: 1rem;
        height: 3rem;
        border-radius: 0.25rem;
        background: var(--green);
        width: 100%;
        margin-right: 2rem;
    }

    button.Botao-fechar {
        color: red;
        position: fixed right;
        margin-left: 90%;

    }
`;

 export const TransactionTypeContainer = styled.div `
    margin: 1rem  0 ;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;

 `;

 interface RadioboxProps {
    isActive: boolean;// a ideia aqui é dizer que dentro das propriedades da Radiobox, o isActiv será do tipo booleado, .'. ou estará ativo ou não estará ativo;
    activeColor: 'green' | 'red';//activeColo será então ou verde ou vermelho
 };

 const colors = {
    green: '#33CC95',
    red: '#E52E40'
 };

 export const RadioBox = styled.button<RadioboxProps>`
    
        height: 4rem;
        border: 1px solid #d7d7d7;
        border-radius: 0.25rem;
        
        background: ${(props) => props.isActive 
        ? transparentize (0.7, colors[props.activeColor]) 
        : 'transparent'
        };
        

        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
            border-color: ${darken(0.1, '#d7d7d7')};
            //filter: brightness(0.9);
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