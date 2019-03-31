import React, { Component } from 'react';
import { connect } from 'react-redux';

class List extends Component {

    constructor(props) {
      super(props);
      
      this.state = { 
        list: [
          {name:'book', id:1}, {name:'laptop', id:2}, {name:'game console', id:3}, {name:'radio', id:4}, {name:'pen', id:5}
      ]
       }
    }
    
    render() { 
      let lst = this.state.list;
      const pdlist = lst.map((i,index) => {
        return <li key={index}>id:{i.id} | product name: <strong>{i.name}</strong> 

        <button style={{marginLeft: '15px'}} onClick={() => this.props.newPd(i)}>
        add to cart
      </button> 
      
      </li>
      })
  
      return ( 
            <ul>
              {pdlist}
            </ul>
        );
    }
  }

  ////////////

  // read states from store
  const mapStateToProps = (state) => {
    return {
        cart:state.cart,
    }
  }

//read actions from store
const mapDispatchToProps = (dispatch) =>{
    return {
        newPd: (pd) => dispatch({type:'add_cart', pd:pd}),
    }
}

  export default connect(mapStateToProps, mapDispatchToProps)(List);
  



