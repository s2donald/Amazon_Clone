import React from 'react'
import BasketItem from './BasketItem'
import './Checkout.css'
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal'

function Checkout() {
    const [{basket}, dispatch ] = useStateValue();
    
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="Ad Placement"/>
                <div>
                    <h2 className="checkout__title">Your shopping basket</h2>
                    {/* BasketItem */}
                    {basket?.map(item=> (
                        <BasketItem title={item?.title} price={item?.price} rating={item?.rating} image={item?.image}/>
                    ))}
                    
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
