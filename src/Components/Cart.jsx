import React, { useEffect } from "react";
import Button from "./Elements/Button";
import Table from "./Elements/Table";
import Text from "./Elements/Text";
import { CurrencyFormater } from "../Utils";

const Cart = ({ volver, data, removeFromCart }) => {
    const deleteAction = (index) => {
        removeFromCart(c => data.filter((item, j) => index !== j));
    };
    return (
        <>
            <Button primary={true} onClick={() => (volver())}>Volver</Button>
            <Table>
                <thead>
                    <tr>
                        <th>COLOR</th>
                        <th>TALLA</th>
                        <th>PRECIO</th>
                        <th>CANT</th>
                        <th>ELIMINAR</th>
                    </tr>
                </thead>
                {(data) && (data.length > 0) && (
                    <tbody>
                        {data.map((j, i) => {
                            return (
                                <tr>
                                    <td>{j.color}</td>
                                    <td>{j.size}</td>
                                    <td>{CurrencyFormater.format(j.price)}</td>
                                    <td>{j.cant}</td>
                                    <td>
                                        <Button onClick={() => { (deleteAction(i)) }} primary={false}>Eliminar</Button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                )}
                {(data) && (data.length == 0) && (
                    <tbody>
                        <tr>
                            <td colSpan={5}>
                                <Text size={1} align="center">No hay nada en tu carrito</Text>
                            </td>
                        </tr>
                    </tbody>
                )}
            </Table>
        </>
    );
};

export default Cart;