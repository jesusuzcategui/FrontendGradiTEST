import { useEffect } from 'react';
import styled from 'styled-components';

const SizesPickerGrid = styled.div`
    display: flex;
    justify-content: flex-start;
`;

const SizesPickerOption = styled.button`
    width: 40px;
    height: 40px;
    border: solid 1px #ccc;
    text-align:center;
    display: block;
    cursor: pointer;
    border: solid 1px #ccc;
    background: transparent;
    color: #ccc;
    transition: all ease .5s;
    font-family: 'Raleway', sans-serif;

    &.selected {
        color: #000;
        border-color: #000;
    }

    &:hover {
        color: #000;
        border-color: #000;
    }
    
    &:not(:last-child) {
        margin-right: .5rem;
    }
`;

const SizesPicker = ( { aviableSizes, selectedSize, action } ) => {
    
    useEffect( () => {}, [aviableSizes, selectedSize]);

    let renderItems = aviableSizes.map((size, i) => {
        return (
            <SizesPickerOption className={ ( selectedSize == size ) ? 'selected' : '' } onClick={() => (action(size))} key={i}>
                {size}
            </SizesPickerOption>
        );
    });
    return (
        <>
            <SizesPickerGrid>
                {renderItems}
            </SizesPickerGrid>
        </>
    );
};

export default SizesPicker;