import React, { useState } from 'react';
import './Cart.css';
import { useStateValue } from '../StateProvider';
import { getBasketTotal } from '../reducer';
import CartItem from './CartItem'


export default function CartTotal({ items }) {
    const [{ basket }, dispatch] = useStateValue();
    
    const emptyBasket = () => {
        dispatch({
            type: 'EMPTY_BASKET'
        })
    }

    return (
        <div className="cart__body">
            <h1>Total: 
                <span> S/. </span>
                {getBasketTotal(basket)}
            </h1>
                <h3> Cantidad: ({basket?.length})</h3>
            <hr />
            {basket.map(item => (
                        <CartItem
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                        />
                    ))}
            
            <button className="button__end" onClick={emptyBasket}>Enviar a cocina</button>
        </div>
    )
}
