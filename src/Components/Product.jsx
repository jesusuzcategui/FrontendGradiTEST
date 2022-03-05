import React, { useEffect, useState } from "react";
import getProduct from "../service";
import { CurrencyFormater } from "../Utils";

import Loading from "./Elements/Loading";
import Container from "./Blocks/Container";
import Grid from "./Blocks/Grid";
import Gallery from "./Blocks/Gallery";
import Price from "./Blocks/Price";
import Color from "./Blocks/Color";
import Size from "./Blocks/Size";
import Cant from "./Blocks/Cant";
import Cart from "./Cart";

import GridItem from "./Elements/GridItem";
import Text from "./Elements/Text";
import Buttons from "./Blocks/Buttons";


const Product = () => {

    const [currentProduct, setCurrentProduct] = useState(null);
    const [view, setCurrentView] = useState(0);
    const [imageAviable, setAviableImage] = useState([]);
    const [colorsAviable, setColorsAviable] = useState([]);
    const [sizesAviables, setSizesAviable] = useState([]);
    const [selectionColor, setSelectionColor] = useState(null);
    const [selectionSize, setSelectionSize] = useState(null);
    const [cant, updateCant] = useState(1);
    const [cart, setCart] = useState([]);


    const fetchData = async () => {
        try {
            const resp = await getProduct();
            setCurrentProduct(resp);
            setCurrentView(1);
        } catch (error) {
            setCurrentView(3);
        }
    };

    const plusToCant = () => {
        let canti = cant + 1;
        updateCant(canti);
    };

    const lessToCant = () => {
        let canti = cant - 1;
        updateCant(canti);
    };

    const showCart = () => {
        setCurrentView(2);
    };

    const showProduct = () => {
        setCurrentView(1);
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (currentProduct) {
            
            //Filtraremos la opciones del producto para sacar las tallas y los colores
            const aviC = currentProduct.options.filter((itemOpt) => {
                return itemOpt.name === "Color";
            });

            const aviS = currentProduct.options.filter((itemOpt) => {
                return itemOpt.name === "Size";
            });

            if (aviC && aviC.length > 0) {
                setColorsAviable(aviC[0].values);
            }

            if (aviS && aviS.length > 0) {
                setSizesAviable(aviS[0].values);
            }

            setAviableImage(currentProduct.media);

        }
    }, [currentProduct]);

    useEffect(() => {}, [cart]);

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
                                <Text color="grey">by {currentProduct.vendor}</Text>
                                <Text color="black" size={2}>{currentProduct.title}</Text>
                                <Price>
                                    <Text color="black" size={3}>{CurrencyFormater.format(currentProduct.price)}</Text>
                                    <Text color="grey" size={4}>{CurrencyFormater.format(currentProduct.compare_at_price)}</Text>
                                </Price>
                                
                                <Color aviable={ colorsAviable } selected={ selectionColor } callback={ setSelectionColor } />

                                <Size aviable={ sizesAviables } selected={ selectionSize } callback={ setSelectionSize } />

                                <Cant cant={cant} add={plusToCant} less={lessToCant} price={currentProduct.price} />

                                <Buttons showCart={showCart} cant={cant} color={selectionColor} size={selectionSize} price={currentProduct.price} addTocart={setCart} currentCart={cart} />

                                <Text size={4} color="grey" dangerouslySetInnerHTML={{__html: currentProduct.description}}></Text>
                            </GridItem>
                        </Grid>
                    </div>
                )}
                {(view === 2) && (
                    <Cart volver={showProduct} data={cart} removeFromCart={setCart} />
                )}
            </Container>
        </>
    );
};

export default Product