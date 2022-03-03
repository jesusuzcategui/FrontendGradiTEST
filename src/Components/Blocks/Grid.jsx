import styled from "styled-components";

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    column-gap: 1rem;

    @media screen and (max-width: 1024px){
        & {
            grid-template-columns: 1fr;
            row-gap: 1rem;
        }
    }
`;

export default Grid;