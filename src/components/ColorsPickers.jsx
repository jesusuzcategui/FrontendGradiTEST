import { useEffect } from 'react';
import styled from 'styled-components';

const ColorPickerGrid = styled.div`
    display: flex;
    justify-content: flex-start;
`;

const ColorPickerOption = styled.button`
    width: 20px;
    height: 20px;
    background-color: ${(props) => {
        return props.color.toLocaleLowerCase();
    }};
    border-radius: 50%;
    border: none;
    position: relative;
    cursor: pointer;
    margin: 1rem 0;
    
    &:not(:last-child){
        margin-right: 1rem;
    }

    &:before {
        content: "";
        width: 25px;
        height: 25px;
        position: absolute;
        top: -7px;
        left: -6px;
        background: transparent;
        border: solid 4px #000;
        border-radius: 50%;
        opacity: 0;
        transition: all ease .5s;
    }

    &:hover:before {
        opacity: 1;
    }
`;

const ColorPicker = ({ avaibleColors, selectedColor }) => {
    useEffect( () => {}, [avaibleColors] );
    let renderItems = avaibleColors.map((it, i) => {
        return (
            <ColorPickerOption key={i} color={it} />
        );
    });
    console.log(typeof avaibleColors);
    return (
        <>
            <ColorPickerGrid>
                {renderItems}
            </ColorPickerGrid>
        </>
    );
};

export default ColorPicker;