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
    z-index: 9;
    display: block;
    
    &:not(:last-child){
        margin-right: 1rem;
    }

    &:before {
        content: "";
        width: 25px;
        height: 25px;
        position: absolute;
        top: -7px;
        left: -6.4px;
        background: transparent;
        border: solid 4px #000;
        border-radius: 50%;
        opacity: 0;
        transition: all ease .5s;
        z-index: 1;
    }

    &:hover:before {
        opacity: 1;
    }

    &.selected:before {
        opacity: 1;
    }
`;

const ColorPicker = ({ avaibleColors, selectedColor, action }) => {

    useEffect( () => {}, [avaibleColors, selectedColor] );

    let renderItems = avaibleColors.map((it, i) => {
        return (
            <ColorPickerOption className={ ( selectedColor == it ) ? 'selected' : '' } onClick={() => (action(it))} key={i} color={it} />
        );
    });

    

    return (
        <>
            <ColorPickerGrid>
                {renderItems}
            </ColorPickerGrid>
        </>
    );
};

export default ColorPicker;