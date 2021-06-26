import React from 'react'
import './Subtotal.css'
import CurrencyFormat from "react-currency-format"
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
function Subtotal() {
    const [{basket}, dispatch ] = useStateValue();
    // const subtotal_list = basket.map(x => x.price )
    // function add(a, b) {
    //     return a + b;
    // }
    // var subprc = subtotal_list.reduce(add, 0); 
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket?.length} items):
                            <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)} //part pf the homework
                displayType={"text"}
                thousandSeperator={true}
                prefix={"$"}
            />

            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
