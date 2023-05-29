import styled from 'styled-components';

export const Container = styled.header`
    background: var(--blue);
    padding: 1rem;
`;

export const Content = styled.div`
    max-width: 1020px;
    margin: auto;

    padding: 0 1rem 10rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        font-size: 1rem;
        color: white;
        border-radius: 5px;
        background: var(--blue-light);
        border: 0;//(retira a borda)
        border-radius: 5px;
        height: 3rem;
        padding: 0 2rem; // 1ª é a distancia para cima. o 2º dist para as laterais. 

        transition: filter 0.5s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`