import React from 'react'
import './BasketItem.css'
import { useStateValue } from './StateProvider';

function BasketItem({ title, image, price, rating }) {
    const [{basket}, dispatch ] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            title: title,
        })
    }
    return (
        <div className='basket__product'>
            <img className="basket__image" src={image} alt={title}/>
            <div className="basket__info">
                <p className="basket__title">{title}</p>
                <p className="basket__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i)=> (
                        <p>🌟</p>
                    ))}
                    
                </div>
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
            

        </div>
    )
}

export default BasketItem
