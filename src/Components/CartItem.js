import React from 'react';
import CancelIcon from '@material-ui/icons/Cancel';
import { useStateValue } from '../StateProvider';
import './CartItem.css'

function CartItem( { item, id, image, title, price }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
            
        })
    }

    return (
        <div className="cartItem">
            
            <div className="cartList">
                <h3 className="cartList_name" key={id}>
                    {title}
                </h3>
                <button className="cartList_button" onClick={removeFromBasket}>
                    <CancelIcon />
                </button>    
            </div>
            
        </div>
    )
}

export default CartItem
