import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from '../Elements/Image';


const Gallery = ( { items } ) => {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const slider1 = useRef(null);
    const slider2 = useRef(null);

    useEffect(() => {
        setNav1(slider1.current);
        setNav2(slider2.current);
    }, []);

    const iteration = items.map((it, i) => {
        return (
            <Image key={i} isThumb={false}>
                <img src={it.src} alt={it.id} />
            </Image>
        );
    });

    const iterationThum = items.map((it, i) => {
        return (
            <Image key={i} isThumb={true}>
                <img src={it.src} alt={it.id} />
            </Image>
        );
    });

    return (
        <div style={{ width: "100%", maxWidth: "675px" }}>
            <div>
                <Slider className='sliderBig' dots={true} asNavFor={nav2} ref={slider1}>
                    {iteration}
                </Slider>
                <Slider
                    className='sliderThumb'
                    asNavFor={nav1}
                    ref={slider2}
                    slidesToShow={3}
                    swipeToSlide={true}
                    focusOnSelect={true}
                >
                    {iterationThum}
                </Slider>
            </div>
        </div>
    );
};

export default Gallery;