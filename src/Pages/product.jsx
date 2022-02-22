//Importamos los Hooks de react para establecer un estado en el que se guardara el producto; se implementa el useEffect para detectar el cambio del estado del producto.
import { useEffect, useState } from "react";

//Importamos axios para obtener la data desde la api.
import axios from "axios";

import styled from "styled-components";

//Importando contenedor
import ContainerApp from "../components/Container";
import GridInit from "../components/GridInit";

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

//Creamos un componente funcional para la renderizacion de la pagina del producto.

const ProductPage = () => {
    //Creamos un estado por defecto en null
    const [product, setProduct] = useState(null);
    //Creamos un estado para en caso de error de api mostrar mensaje.
    const [error, setError] = useState(0);

    const fecthData = async () => {
        try {
            const { data } = await axios.get('https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js');
            setProduct(data);
        } catch (error) {
            setError(1);
        }
    };

    //Establecemos el useffect para la deteccion del cambio del product.
    useEffect(() => {
        fecthData();
    }, [product]);

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