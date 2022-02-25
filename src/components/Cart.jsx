import { useEffect } from "react";
import styled from "styled-components";

const TableCart = styled.table`
    width: 100%;
    border-collapse: collapse;
    border: none;

    & tr th {
        background-color: #DDD;
        color: #000;
    }

    & tr td {
        background-color: #FFF;
        color: #000;
    }
`;

const ButtonDel = styled.button`
    background: #000;
    padding: .5rem .5rem;
    border-radius: 3px;
    text-align: center;
    color: #fff;
    cursor: pointer;
`;

const Cart = ({ current, deleteItem }) => {
    return (
        <>
            {(current.length == 0) && (
                <h3>Tu carrito esta vacio</h3>
            )}

            {(current.length > 0) && (
                <div>
                    <TableCart>
                        <thead>
                            <tr>
                                <th>Color</th>
                                <th>Talla</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {current.map((j, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{j.color}</td>
                                        <td>{j.size}</td>
                                        <td>{j.price}</td>
                                        <td>{j.cant}</td>
                                        <td>
                                            <ButtonDel onClick={() =>( deleteItem(i))}>
                                                X
                                            </ButtonDel>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </TableCart>
                </div>
            )}
        </>
    );
};

export default Cart;