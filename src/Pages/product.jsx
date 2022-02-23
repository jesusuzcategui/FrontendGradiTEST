//Importamos los Hooks de react para establecer un estado en el que se guardara el producto; se implementa el useEffect para detectar el cambio del estado del producto.
import { useEffect, useState } from "react";

//Importamos axios para obtener la data desde la api.
import axios from "axios";

import styled from "styled-components";

//Importando contenedor
import ContainerApp from "../components/Container";
import GridInit from "../components/GridInit";
import ProductCant from "../components/ProductCant";
import ColorPicker from "../components/ColorsPickers";
import SizesPicker from "../components/SizesPickers";

const TitleProduct = styled.h1`
    font-size: 3rem;
    color: #000;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    margin-top: 0;
`;

const AuthorProduct = styled.span`
    font-size: 0.8rem;
    color: #ccc;
    font-family: 'Raleway', sans-serif;
`;

const DescriptionProduct = styled.div`
    font-size: 1rem;
    color: #ccc;
    font-family: 'Raleway', sans-serif;
`;

const PriceProduct = styled.div`
    font-family: 'Raleway', sans-serif;
    display: flex;
    align-items: center;

    & h4 {
        font-size: 1.5rem;
        color: #000;
        margin-right: 0.5rem;
        margin-top: 0;
    }

    & h5 {
        font-size: 1rem;
        color: #ccc;
        margin-top: 0;
    }
`;

//Creamos un componente funcional para la renderizacion de la pagina del producto.

const ProductPage = () => {
    //Creamos un estado por defecto en null
    const [product, setProduct] = useState(null);
    //Creamos un estado para en caso de error de api mostrar mensaje.
    const [error, setError] = useState(0);
    //Creamos el estado para la cantidad del producto.
    const [cant, setCant] = useState(1);
    //Creamos el estado para tener los colores disponibles del producto.
    const [colorsAviable, setColorsAviable] = useState([]);
    const [sizesAviables, setSizesAviable] = useState([]);

    const CurrencyFormater = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    const fecthData = async () => {
        try {
            const { data } = await axios.get('https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js');
            setProduct(data);
        } catch (error) {
            setError(1);
        }
    };

    const upCant = () => {
        let canti = cant+1;
        setCant(canti);
    };

    const delCant = () => {
        let canti = cant-1;
        setCant(canti);
    };

    //Establecemos el useffect para la deteccion del cambio del product.
    useEffect(() => {
        fecthData();
    }, []);

    useEffect(() => {
        if(product){
            //Filtraremos la opciones del producto para sacar las tallas y los colores
            const aviC = product.options.filter((itemOpt) => {
                return itemOpt.name === "Color";
            });

            const aviS = product.options.filter((itemOpt) => {
                return itemOpt.name === "Size";
            });

            if(aviC && aviC.length > 0){
                setColorsAviable(aviC[0].values);
            }

            if(aviS && aviS.length > 0){
                setSizesAviable(aviS[0].values);
            }
        }
    }, [product, colorsAviable, sizesAviables]);

    //Retornamos el JSX de la pagina del producto.

    return (
        <>
            <ContainerApp>
                {(product) && (
                    <div>
                        <GridInit>
                            <div></div>
                            <div>
                                <AuthorProduct>
                                    {"by " + product.vendor}
                                </AuthorProduct>
                                <TitleProduct>
                                    {product.title}
                                </TitleProduct>
                                <PriceProduct>
                                    <h4>{CurrencyFormater.format(product.price)}</h4>
                                    <h5>{CurrencyFormater.format(product.compare_at_price)}</h5>
                                </PriceProduct>
                                <ColorPicker avaibleColors={colorsAviable} />
                                <SizesPicker aviableSizes={sizesAviables} />
                                <ProductCant cant={cant} plusAction={upCant} reduceAction={delCant} price={product.price} />
                                <DescriptionProduct  dangerouslySetInnerHTML={{ __html: product.description}} />
                            </div>
                        </GridInit>
                    </div>
                )}
                <hr />
                <pre style={{ width: "500px", overflowX: "auto" }}>{JSON.stringify(product, '', 1)}</pre>
            </ContainerApp>
        </>
    );
};

export default ProductPage;