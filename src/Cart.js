import React, { Component } from 'react';
import { connect } from 'react-redux';

class Cart extends Component {

    render() { 
      let crt = this.props.cart;
      const cartlist = crt.map((i,index) => {
        return (
        <tr key={index}>
          <td>{i.id}</td>
          <td>{i.name}</td>
          <td>{'x'+i.count}</td>
          <td>
            <button onClick={()=>this.props.removePd(this.props.cart.indexOf(i))}>
              remove
            </button>
          </td>
        </tr>
        )
      })
  
      if(crt.length > 0){
  
      return ( 
  
            <div style={
              {padding:'15px'}
            }>
            <table className='c'>
              
              <thead>
              <tr className='thead'>
                <th>ID</th>
                <th>NAME</th>
                <th>QUANTITY</th>
                <th>ACTIONS</th>
              </tr>
              </thead>

              <tbody>
              {cartlist}
              </tbody>
            </table>
            </div>
        )
  
          } else{
            return <p className='c'>cart is empty</p>
          }
    }
  }

  // read states from store
const mapStateToProps = (state) => {
    return {
        cart:state.cart,
    }
  }

  //read actions from store
const mapDispatchToProps = (dispatch) =>{
    return {
        removePd: (indx) => dispatch({type:'remove_cart', index:indx}),
    }
}
  
  
  export default connect(mapStateToProps,mapDispatchToProps)(Cart);