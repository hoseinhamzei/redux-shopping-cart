const initialState = {
    cart:[]
}

const reducer = (state = initialState, action) =>{

    const newState = {...state}
    
    if(action.type === 'add_cart'){
        addNew(action.pd);
    }

    if(action.type === 'remove_cart'){
        removePd(action.index);
    }

    
    //////////////////

    function addNew(pd){
        
        const newItem = {
          count:1,
          id:pd.id,
          name:pd.name
        }

        const newCart = [...newState.cart];
    
        const filtered = newCart.filter(i =>{
          return i.id === pd.id;
        });
    
        if(filtered.length > 0){
          const pos = newCart.map(i => { return i.id; }).indexOf(pd.id);
          newCart[pos].count += 1;
          newState.cart = newCart;
        }else{
            newCart.push(newItem);
            newState.cart = newCart;
        }
        
      }
    
      ///////////////////
    
      function removePd(indx){
        const newCart = [...newState.cart]
        newCart.splice(indx,1);
        newState.cart = newCart;
      }

    return newState;

}

export default reducer;