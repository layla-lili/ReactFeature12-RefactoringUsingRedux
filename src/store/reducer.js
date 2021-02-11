
import productsData from "../products.js";
import {DELETE_PRODUCT} from "./action"
const initialState = {
    products: productsData,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_PRODUCT:
            const productToKeep = state.products.filter(
              (product) => product.id !== action.payload.productId
            );
            return {
              ...state,
              products: productToKeep, //copy all of the old state, and only manipulate the part we want to manipulate.
            };

            default:return state;
    }

  };

  export default reducer;