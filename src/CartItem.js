import React from "react";


//inherting the from the Component which is in the React package
 class CartItem extends React.Component {
    render(){
      console.log('this.props' , this.props);
      const {price , title , qty} = this.props.product;
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
               onClick={() => this.props.onIncreaseQuantity(this.props.product)}
              />
              <img
               alt="decrease" 
               className="action-icons" 
               src="https://www.svgrepo.com/show/512494/minus-circle-1426.svg" 
               onClick={() => this.props.onDecreaseQuantity(this.props.product)}
              />
              <img
               alt="delete"
                className="action-icons" 
                src="https://www.svgrepo.com/show/511788/delete-1487.svg" 
               />
             </div>
            </div>
         </div>
        );
    }
 }

 const styles = {
    image:{
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
 }

 export default CartItem ;