import React, { useEffect } from 'react';
import styled from 'styled-components';

import SizeItem from '../Elements/SizeItem';

const WrapperSizes= styled.div`
    display: flex;
    justify-content: flex-start;
    position: relative;
    margin: 1rem 0;
`;

const Size = ( { aviable, selected, callback } ) => {

    useEffect( () => {}, [aviable, selected] );

    const elements = aviable.map( (item, i) => <SizeItem className={ ( selected == item ) ? 'selected' : '' } key={i} onClick={ () => (callback(item)) }>{item}</SizeItem> );

    return (
        <>
            <WrapperSizes>
                {elements}
            </WrapperSizes>
        </>
    );
};

export default Size;