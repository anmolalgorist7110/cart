import React from "react";

//inherting the from the Component which is in the React package
 class CartItem extends React.Component {

   constructor (){
      super();

      this.state = {
         price: 999,
         title: 'Aplle I Phone 6s',
         qty: 1,
         img: ''
      }
      // this.increaseQuantity = this.increaseQuantity.bind(this);
   }
   
   increaseQuantity = () => {
      // this.state.qty += 1 ; 
      console.log('this.state' , this.state) ;
      /*----------------------------------------------------------------------------------------*/
      
      //set state form 1
      //(by using the object)

      // this.setState({
      //    qty: this.state.qty + 1  
      // })
      
      /*----------------------------------------------------------------------------------------*/

      //set state form 2 - use only if the prev state is required
      //(by using the callback function) 

      this.setState((prevstate) => {
         return{
            qty: prevstate.qty + 1 
         }
      });

      /*-----------------------------------------------------------------------------------------*/

   }

    render(){
      const {price , title , qty} = this.state;
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
               onClick={this.increaseQuantity.bind(this)}
              />
              <img
               alt="decrease" 
               className="action-icons" 
               src="https://www.svgrepo.com/show/512494/minus-circle-1426.svg" 
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