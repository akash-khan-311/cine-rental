const initialState = {
  cartData: [],
};

const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const updatedCart = [...state.cartData, action.payload];
      return {
        ...state,
        cartData: updatedCart,
      };
    }
    case "REMOVE_FROM_CART": {
      const updatedCart = state.cartData.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        cartData: updatedCart,
      };
    }
    default:
      return state;
  }
};


export {initialState, CartReducer};