import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import Button from '../Elements/Button';

const WrapperButtons = styled.div`
    display: grid;
    grid-template-columns: ${(props) => (props.cart.length > 0) ? ' 1fr 1fr 1fr' : '1fr 1fr'};
    column-gap: 1rem;
`;

const Buttons = ( { addTocart, currentCart, showCart, price, size, color, cant } ) => {
    useEffect(() => {
        console.log('Actual', currentCart, 'Price', price);
    }, [currentCart]);

    const addCart = () => {
        let a = {
            cant: cant,
            color: color,
            size: size,
            price: price
        };

        addTocart(c => [a,...c]);
    };

    return (
        <>
            <WrapperButtons cart={currentCart}>
                <Button primary={false}>Add to favorite</Button>
                <Button primary={true} onClick={() => (addCart())}>Add to cart</Button>
                {(currentCart.length > 0) && (<Button primary={true} onClick={() => (showCart(true))}>View Cart</Button>)}
            </WrapperButtons>
        </>
    );
};

export default Buttons;