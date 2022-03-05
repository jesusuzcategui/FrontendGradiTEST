import React, { useState, useEffect } from 'react';
import styled from "styled-components";

import { CurrencyFormater } from '../../Utils';

const CantContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    columns-gap: .5rem;
    border: solid 1px #ccc;
    padding: .5rem 2rem;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
`;

const ContainerMain = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    columns-gap: 1rem;
    margin: 1rem 0;
    align-items: center;

    @media screen and (max-width: 768px){
        & {
            grid-template-columns: 1fr 1fr;  
        }
    }
`;

const CantAction = styled.button`
    font-size: 1.3rem;
    text-align: center;
    border: none;
    background: #fff;
    cursor: pointer;
    transition: all ease .3s;

    &:not(:disabled):hover {
        background: #000;
        color: #fff;
    }

    &:disabled {
        cursor: not-allowed;
    }
`;

const CantNumber = styled.span`
    font-size: 1.3rem;
    text-align: center;
`;

const PriceTotalContainer = styled.div`
    font-size: 1rem;
    color: #ddd;

    & span {
        color: #000;
        font-weight: bold;
    }
`;

const Cant = ( { cant, add, less, price } ) => {
    const [diabled, setDisabled] = useState(false);
    const [totalPrice, setTotalPrice] = useState(price);

    useEffect(() => {
        setDisabled(cant === 1);
        setTotalPrice(price * cant);
    }, [cant]);
    return (
        <>
            <ContainerMain>
                <CantContainer>
                    <CantAction disabled={diabled} onClick={() => (less())}>-</CantAction>
                    <CantNumber>{cant}</CantNumber>
                    <CantAction onClick={() => (add())}>+</CantAction>
                </CantContainer>
                <div>&nbsp;</div>
                <PriceTotalContainer>
                    Total price <span>{ CurrencyFormater.format(totalPrice) }</span>
                </PriceTotalContainer>
            </ContainerMain>
        </>
    );
};

export default Cant;