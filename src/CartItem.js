import React from "react";

//inherting the from the Component which is in the React package
 class CartItem extends React.Component {
    render(){
        return(
         <div className="cart-item">
            <div className="left-block">
             <img style={styles.image} alt=""/>
            </div>
            <div className="right-block">
             <div>Phone</div>
             <div>Rs 1999</div>
             <div>Qty : 1</div>
             <div className="cart-item-actions">
              {/* {buttons} */}
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
        borderRadius: 4
    }
 }

 export default CartItem ;