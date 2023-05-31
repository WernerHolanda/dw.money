import styled from "styled-components";

export const Container = styled.div`
    border: 4px black solid;
    margin-top: 3rem;

    table {
        width: 100%; //estica para as bordas
    }

    th {
        color: var(--text-body);
        font-weight: 400;
        padding: 1rem 2rem;
        text-align: 1.5rem;
    }

    td {
        padding: 1rem 2rem;
        border: 0;
        background: var(--shape);
        color: var(--text-body);
        border-radius: 0.25rem;

        &:first-child {
            color: var(--text-title);
        }
        
        &.deposit {
            color: var(--green);
        }

        &.withdraw {
            color: var(--red);
        }

    }
    //thead {
        
      //  border: 4px black solid;
    //};


    //tbody {
      //  border: 4px black solid;
    //};
`;