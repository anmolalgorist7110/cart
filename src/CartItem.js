import React from "react";


//inherting the from the Component which is in the React package
<<<<<<< HEAD
const CartItem = (props) => {


   // all the info about passed here
   const {
      price,
      title,
      qty
   } = props.product;

   // all the functionalitie is passed here
   const { product
      , onIncreaseQuantity,
      onDecreaseQuantity,
      onDeleteProduct
   } = props;
   return (
      <div className="cart-item">
         <div className="left-block">
            <img style={styles.image} alt="" />
         </div>
         <div className="right-block">
            <div style={{ fontSize: 25 }}>{title}</div>
            <div style={{ color: '#777' }}>{price}</div>
            <div style={{ color: '#777' }}>{qty}</div>
            <div className="cart-item-actions">
               {/* {buttons} */}
               <img
                  alt="increase"
                  className="action-icons"
                  src="https://www.svgrepo.com/show/512677/plus-circle-1425.svg"
                  onClick={() => onIncreaseQuantity(product)}
               />
               <img
                  alt="decrease"
                  className="action-icons"
                  src="https://www.svgrepo.com/show/512494/minus-circle-1426.svg"
                  onClick={() => onDecreaseQuantity(product)}
               />
               <img
                  alt="delete"
                  className="action-icons"
                  src="https://www.svgrepo.com/show/511788/delete-1487.svg"
                  onClick={() => onDeleteProduct(product.id)}
=======
 class CartItem extends React.Component {
    render(){
      console.log('this.props' , this.props);
      
      // all the info about passed here
      const {
         price ,
          title ,
           qty
         } = this.props.product;

      // all the functionalitie is passed here
      const {product
          ,onIncreaseQuantity,
           onDecreaseQuantity , 
           onDeleteProduct
         } = this.props ;
        return(
         <div className="cart-item">
            <div className="left-block">
             <img style={styles.image} alt=""/>
            </div>
            <div className="right-block">
             <div style={{fontSize: 25}}>{title}</div>
             <div style={{color: '#777'}}>{price}</div>
             <div style={{color: '#777'}}>{qty}</div>
             <div className="cart-item-actions">
              {/* {buttons} */}
              <img 
              alt="increase"
               className="action-icons" 
               src="https://www.svgrepo.com/show/512677/plus-circle-1425.svg" 
               onClick={() => onIncreaseQuantity(product)}
              />
              <img
               alt="decrease" 
               className="action-icons" 
               src="https://www.svgrepo.com/show/512494/minus-circle-1426.svg" 
               onClick={() => onDecreaseQuantity(product)}
              />
              <img
               alt="delete"
                className="action-icons" 
                src="https://www.svgrepo.com/show/511788/delete-1487.svg" 
                onClick = {() => onDeleteProduct(product.id) }
>>>>>>> 05d213d8ae9cd73b0efa547089b16f3423a5a94b
               />
            </div>
         </div>
      </div>
   );
}

const styles = {
   image: {
      height: 110,
      width: 110,
      borderRadius: 4,
      background: '#ccc'
   }
}

export default CartItem;