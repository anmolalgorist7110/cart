import React from "react";
import CartItem from './CartItem';

//inherting the from the Component which is in the React package
<<<<<<< HEAD
const Cart = (props) => {
=======
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


 // function to increase the product
 handleIncreaseQuantity = (product) => {
   const {products} = this.state;
   const index = products.indexOf(product);

   products[index].qty += 1 ;

   this.setState({
    products: products 
   })
 }

 // function to decrease the product
 handleDecreaseQuantity = (product) => {
    const {products} = this.state;
    const index = products.indexOf(product);

    if(products[index].qty === 0){
     return ;
    }

    products[index].qty -= 1 ;
 
    this.setState({
     products: products 
    })
  }

  //function to delete the product
  handleDeleteProduct = (id) =>{
    const{products} = this.state ;

    const items = products.filter((item) => item.id != id);// return an array whose prodcts id is not equal to the id that is passed

    this.setState({
        products: items
    })
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
                 onIncreaseQuantity = {this.handleIncreaseQuantity}
                 onDecreaseQuantity = {this.handleDecreaseQuantity}
                 onDeleteProduct = {this.handleDeleteProduct} 
                 />
                )
            })}
         </div>
        );
    }
   
   }
>>>>>>> 05d213d8ae9cd73b0efa547089b16f3423a5a94b

  

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