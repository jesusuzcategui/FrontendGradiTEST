import React, { useEffect } from 'react';
import styled from 'styled-components';
import ColorItem from '../Elements/ColorItem';

const WrapperColors = styled.div`
    display: flex;
    justify-content: flex-start;
    position: relative;
    margin: 1rem 0;
`;

const Color = ( { aviable, selected, callback  } ) => {

    useEffect(() => {}, [aviable, selected]);

    const elements = aviable.map( (item, i) => <ColorItem className={ ( selected == item ) ? 'selected' : '' } key={i} color={item} onClick={ () => (callback(item)) }  /> );

    return (
        <>
            <WrapperColors>
                {elements}
            </WrapperColors>
        </>
    );
};

export default Color;