import React, { Component } from 'react';
import { BrowserRouter , Route, Switch,Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Test from './Test';
import Cart from './Cart';
import List from './List';

class App extends Component {

  render() {

    return ( 
        <div>
          <div className='nav'>
            <Link to='/'>
              <button>products</button>
            </Link>
  
            <Link to='/cart'>
              <button>{'cart('+this.getCartCount(this.props.cart)+')'}</button>
            </Link>

            <Link to='/test'>
              <button>test</button>
            </Link>
            
          </div>
  
        <Switch>
          <Route exact path='/' component={List}/>
          <Route path='/cart' component={Cart}/>
          <Route path='/test' component={Test}/>
        </Switch>
        </div>
     )
    
  }

  //////

  getCartCount(cart){

    let cnt = 0;

    if(cart.length > 0){

      cart.forEach(item => {
      cnt += item.count;
      });

      return cnt;

    }else{
      return 0;
    }
    
  }

  //////

}

//////

// read states from store
const mapStateToProps = (state) => {
  return {
      cart:state.cart,
      theme:state.theme
  }
}


export default connect(mapStateToProps)(App);
