import React from "react";
import CartItem from './CartItem';

//inherting the from the Component which is in the React package
 class Cart extends React.Component {

    
   constructor (){
    super();

    this.state = {
      products:[
        {
            price: 99,
            title: 'Watch',
            qty: 1,  
            img: '',
            id: 1
        },
        {
            price: 999,
            title: 'Mobile phone',
            qty: 10,  
            img: '',
            id: 2 
        },
        {
            price: 799,
            title: 'laptop',
            qty: 4,  
            img: '',
            id: 3 
        },
      ]
    }
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing();
 }

    render (){

        const {products} = this.state ;

        return (
         <div className="cart">
            
            {products.map((product) => {
                return (
                <CartItem
                 product = {product} 
                 key = {product.id}
                 />
                )
            })}
         </div>
        );
    }
   
   }

  
 export default Cart;