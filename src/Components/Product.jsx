import React, { useEffect, useState } from "react";
import getProduct from "../service";

import Loading from "./Elements/Loading";
import Container from "./Blocks/Container";
import Grid from "./Blocks/Grid";
import Gallery from "./Blocks/Gallery";

import GridItem from "./Elements/GridItem";
import Text from "./Elements/Text";


const Product = () => {

    const [currentProduct, setCurrentProduct] = useState(null);
    const [view, setCurrentView] = useState(0);
    const [imageAviable, setAviableImage] = useState([]);



    const fetchData = async () => {
        try {
            const resp = await getProduct();
            setCurrentProduct(resp);
            setCurrentView(1);
        } catch (error) {
            setCurrentView(3);
        }
    };

    useEffect( () => {
        fetchData();
    }, [] );
    
    useEffect( () => {
        if(currentProduct){
            setAviableImage(currentProduct.media);
        }
    }, [currentProduct] );

    return (
        <>
            <Container>
                {(view === 0) && (<Loading />)}
                {(view === 1) && (
                    <div>
                        <Grid>
                            <GridItem>
                                <Gallery items={imageAviable} />
                            </GridItem>
                            <GridItem>
                                <Text color="black" size={2}>{currentProduct.title}</Text>
                            </GridItem>
                        </Grid>
                        <pre>{JSON.stringify(currentProduct, '', 1)}</pre>
                    </div>
                )}
            </Container>
        </>
    );
};

export default Product