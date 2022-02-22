import { useState, useEffect } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

//Importamos el styledComponents para crear microcomponentes basado en estilos css.
import styled from "styled-components";

const ProductSliderContainer = styled.div``;

const ProductImages = ( { items } ) => {

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);

    useEffect( () => {
        console.log(this);
    }, [] );
    
    const iteration = items.map( (it, i) => {
        return (
            <>

            </>
        );
    } );

    return (
        <></>
    );
};

export default ProductImages;

