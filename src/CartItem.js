import React from "react";


//inherting the from the Component which is in the React package
 class CartItem extends React.Component {


   // testing () {
   //    const promise = new Promise((resolve , reject) => {
   //       setTimeout(() => {
   //          resolve('done');
   //       } , 5000)
   //    })

   //    promise.then(() => {
   //       this.setState({qty : this.state.qty + 10});

   //       this.setState({qty : this.state.qty + 10});

   //       this.setState({qty : this.state.qty + 10});

   //       console.log('state' , this.state);
   //    });


   // }
   

   // for increasing the cart intems quant
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


   // for decreasing the cart items quant
   decreaseQuantity = () => {
    
       const {qty} = this.state;

       if(qty === 0){
         return ;
       }

      // set state 2 - if previous required use this
      this.setState((prevstate) => {
         return{
            qty: prevstate.qty - 1 
         }
      }  , () =>{
         console.log('this.state' , this.state);
      });


   }

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
               onClick={this.increaseQuantity.bind(this)}
              />
              <img
               alt="decrease" 
               className="action-icons" 
               src="https://www.svgrepo.com/show/512494/minus-circle-1426.svg" 
               onClick={this.decreaseQuantity.bind(this)}
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