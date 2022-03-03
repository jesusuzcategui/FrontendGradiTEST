import React, { useEffect, useState } from "react";
import getProduct from "../service";

import Loading from "./Elements/Loading";
import Container from "./Blocks/Container";
import Grid from "./Blocks/Grid";
import GridItem from "./Elements/GridItem";

const Product = () => {

    const [currentProduct, setCurrentProduct] = useState(null);
    const [view, setCurrentView] = useState(0);

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

    return (
        <>
            <Container>
                {(view === 0) && (<Loading />)}
                {(view === 1) && (
                    <div>
                        <Grid>
                            <GridItem>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum commodi magnam exercitationem deleniti obcaecati, possimus soluta vel accusantium quo quod itaque explicabo! Officia nemo fugit, maxime exercitationem quibusdam temporibus eaque?</p>
                            </GridItem>
                            <GridItem>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero voluptatibus eum corrupti. Ut, quisquam? Quos dolore facilis modi architecto ducimus excepturi iusto perferendis quam omnis ad, voluptas molestias repellendus nulla!
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