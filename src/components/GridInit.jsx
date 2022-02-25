import styled from "styled-components";

const GridInit = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export default GridInit;