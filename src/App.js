import React from 'react';
import Cart from "./cart.";
import Navbar from "./Navb" ;


class App extends React.Component{
  
  
  constructor (){
    super();

    this.state = {
      products:[
        {
            price: 99,
            title: 'Watch',
            qty: 1,  
            img: 'https://images.unsplash.com/photo-1639006570490-79c0c53f1080?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
            id: 1
        },
        {
            price: 999,
            title: 'Mobile phone',
            qty: 10,  
            img: 'https://images.unsplash.com/photo-1570891836654-d4961a7b6929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
            id: 2 
        },
        {
            price: 799,
            title: 'laptop',
            qty: 4,  
            img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80',
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

    const items = products.filter((item) => item.id !== id);// return an array whose prodcts id is not equal to the id that is passed

    this.setState({
        products: items
    })
  }

  getCartCount = () =>{
    const {products} = this.state;
    
    let count = 0 ;
   
    products.forEach((product) => {
      count += product.qty ;
    })

    return count ;
  }

  render() {
    const {products} = this.state ;
  return (
    <div className="App">
      <Navbar count = {this.getCartCount()}
      />
      <Cart
        products = {products}
        onIncreaseQuantity = {this.handleIncreaseQuantity}
        onDecreaseQuantity = {this.handleDecreaseQuantity}
        onDeleteProduct = {this.handleDeleteProduct} 

      />
    </div>
  );

  }
}

 

export default App;
