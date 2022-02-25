import styled from "styled-components";
import { useEffect } from "react";

const ActionsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    margin: .5rem 0;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr 1fr;    
    }
`;

const ActionButton = styled.button`
    background: ${(props) => (props.bg == 'primary') ? '#000' : '#ccc' };
    color: ${(props) => (props.bg == 'primary') ? '#ccc' : '#000' };
    width: 100%;
    text-align: center;
    cursor: pointer;
    padding: 1rem 1rem;
    border: none;
    font-family: 'Raleway', sans-serif;
`;

const ProductActions = ( { cart, add, price } ) => {

    useEffect( () => {}, [cart] );

    const addTo = () => {
        add(price);
    };

    return (
        <>
            <ActionsGrid>
                <ActionButton bg="secondary">Add to favourite</ActionButton>
                <ActionButton bg="primary" onClick={ () => (addTo()) }>Add to cart</ActionButton>
            </ActionsGrid>
        </>
    );
};
export default ProductActions;