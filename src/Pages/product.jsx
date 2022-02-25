//Importamos los Hooks de react para establecer un estado en el que se guardara el producto; se implementa el useEffect para detectar el cambio del estado del producto.
import { useEffect, useState, useCallback } from "react";

//Importamos axios para obtener la data desde la api.
import axios from "axios";

import styled from "styled-components";
import { ToastContainer } from "react-toastr";

//Importando contenedor
import ContainerApp from "../components/Container";
import GridInit from "../components/GridInit";
import ProductCant from "../components/ProductCant";
import ColorPicker from "../components/ColorsPickers";
import SizesPicker from "../components/SizesPickers";
import ProductActions from "../components/ProductActions";
import ProductImages from "../components/ProductImages";

import Cart from "../components/Cart";

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
    line-height: 1.8;
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

const ColumnInfoProduct = styled.div`
    width: 100%;
`;

const ToggleCart = styled.button`
    background: ${(props) => (props.bg == 'primary') ? '#000' : '#ccc'};
    color: ${(props) => (props.bg == 'primary') ? '#ccc' : '#000'};
    width: 100%;
    text-align: center;
    cursor: pointer;
    padding: 1rem 1rem;
    border: none;
    font-family: 'Raleway', sans-serif;
`;

//Creamos un componente funcional para la renderizacion de la pagina del producto.

const ProductPage = () => {
    //View
    const [view, setView] = useState(1);

    //Creamos un estado por defecto en null
    const [product, setProduct] = useState(null);
    //Creamos un estado para en caso de error de api mostrar mensaje.
    const [error, setError] = useState(0);
    //Creamos el estado para la cantidad del producto.
    const [cant, setCant] = useState(1);
    //Creamos el estado para tener los colores disponibles del producto.
    const [colorsAviable, setColorsAviable] = useState([]);
    const [sizesAviables, setSizesAviable] = useState([]);
    const [imagesAviables, setImagesAviables] = useState([]);

    const [cart, setCart] = useState([]);
    const [selectionSize, setSelectionSize] = useState(null);
    const [selectionColor, setSelectionColor] = useState(null);

    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);

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
        let canti = cant + 1;
        setCant(canti);
    };

    const delCant = () => {
        let canti = cant - 1;
        setCant(canti);
    };

    let containerToastr;

    const AddToCart = (price) => {

        if (!selectionColor || !selectionSize) {
            alert('Por favor selecciona un color y una talla');
            return false;
        }

        let currentCart = cart;
        currentCart.push({
            cant: cant,
            color: selectionColor,
            size: selectionSize,
            price: price

        });
        setCart(currentCart);

        containerToastr.success(`Añadido al carrito`, `Informacion`, {
            closeButton: true,
        });

        setView(2);

        updateState();
    };

    const RemoveToCart = (index) => {
        let currentCart = cart;
        currentCart.splice(0, index);
        setCart(currentCart);
        console.log(cart);
    };

    //Establecemos el useffect para la deteccion del cambio del product.
    useEffect(() => {
        fecthData();
    }, []);

    useEffect(() => {
        if (product) {
            //Filtraremos la opciones del producto para sacar las tallas y los colores
            const aviC = product.options.filter((itemOpt) => {
                return itemOpt.name === "Color";
            });

            const aviS = product.options.filter((itemOpt) => {
                return itemOpt.name === "Size";
            });

            if (aviC && aviC.length > 0) {
                setColorsAviable(aviC[0].values);
            }

            if (aviS && aviS.length > 0) {
                setSizesAviable(aviS[0].values);
            }

            setImagesAviables(product.media);
        }



    }, [product, colorsAviable, sizesAviables, imagesAviables, cart, selectionSize, selectionColor, view]);


    //Retornamos el JSX de la pagina del producto.

    return (
        <>
            <ToastContainer
                ref={ref => containerToastr = ref}
                className="toast-bottom-left"
            />
            <ContainerApp>
                {(view == 1) && (
                    <div>
                        {(product) && (
                            <div>
                                <GridInit>
                                    <ColumnInfoProduct>
                                        <ProductImages items={imagesAviables} />
                                    </ColumnInfoProduct>
                                    <ColumnInfoProduct>
                                        {(cart.length > 0) && (
                                            <ToggleCart bg="primary" onClick={() => (setView(2))}>Ver carrito</ToggleCart>
                                        )}
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
                                        <ColorPicker selectedColor={selectionColor} action={setSelectionColor} avaibleColors={colorsAviable} />
                                        <SizesPicker selectedSize={selectionSize} action={setSelectionSize} aviableSizes={sizesAviables} />
                                        <ProductCant cant={cant} plusAction={upCant} reduceAction={delCant} price={product.price} />
                                        <ProductActions price={product.price} cart={cart} add={AddToCart} />
                                        <DescriptionProduct dangerouslySetInnerHTML={{ __html: product.description }} />
                                    </ColumnInfoProduct>
                                </GridInit>
                            </div>
                        )}
                    </div>
                )}

                {(view == 2) && (
                    <div>
                        <ToggleCart bg="secondary" onClick={() => (setView(1))}>Volver</ToggleCart>
                        <Cart current={cart} deleteItem={ RemoveToCart } />
                    </div>
                )}
            </ContainerApp>
        </>
    );
};

export default ProductPage;