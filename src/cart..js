import React from "react";
import CartItem from './CartItem';

//inherting the from the Component which is in the React package
const Cart = (props) => {

  

    const { products } = props;

    return (
      <div className="cart">

        {products.map((product) => {
          return (
            <CartItem
              product={product}
              key={product.id}
              onIncreaseQuantity={props.onIncreaseQuantity}
              onDecreaseQuantity={props.onDecreaseQuantity}
              onDeleteProduct={props.onDeleteProduct}

            />
          )
        })}
      </div>
    );
}


export default Cart;