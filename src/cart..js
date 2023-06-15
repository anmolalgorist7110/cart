import React from "react";
import CartItem from './CartItem';

//inherting the from the Component which is in the React package
 class Cart extends React.Component {

    render (){
        return (
         <div className="cart">
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
         </div>
        );
    }
   
   }

  
 export default Cart;